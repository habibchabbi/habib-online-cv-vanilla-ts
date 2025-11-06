import type { AxiosRequestConfig } from 'axios';
import type { ProjectType } from '@libs/types';

import { BaseHttpService, projectsApiConfig, type HttpRequestOptions } from '@libs/shared';

import { getProjectsByLanguage } from '../../static-data/projects';

export type Project = ProjectType;

export type ProjectIdentifier = string | number;

export type CreateProjectPayload = ProjectType;

export type UpdateProjectPayload = Partial<ProjectType>;

export interface ProjectsServiceOptions {
  baseURL?: string;
  axiosConfig?: AxiosRequestConfig;
  resourcePath?: string;
  httpService?: BaseHttpService;
}

export class ProjectsService {
  private readonly httpService: BaseHttpService;
  private readonly resourcePath: string;

  constructor(options: ProjectsServiceOptions = {}) {
    const {
      baseURL,
      axiosConfig,
      resourcePath = projectsApiConfig.loadProjects,
      httpService,
    } = options;

    this.resourcePath = ProjectsService.normalizeResourcePath(resourcePath);
    this.httpService = httpService ?? new BaseHttpService(baseURL, axiosConfig);
  }

  public async getProjects(
    options: HttpRequestOptions | undefined,
    staticDataIgnoreDB: boolean,
    useStaticDataFullback = false,
    language?: string,
  ): Promise<Project[]> {
    if (staticDataIgnoreDB) {
      return getProjectsByLanguage(language ?? '');
    }

    try {
      const requestOptions =
        language === undefined
          ? options
          : {
              ...options,
              params: {
                ...(options?.params ?? {}),
                language,
              },
            };

      return await this.httpService.get<Project[]>(this.resourcePath, requestOptions);
    } catch (error) {
      if (!useStaticDataFullback) {
        throw error;
      }

      return getProjectsByLanguage(language ?? '');
    }
  }

  public getProject(id: ProjectIdentifier, options?: HttpRequestOptions): Promise<Project> {
    return this.httpService.get<Project>(this.createItemUrl(id), options);
  }

  public createProject(
    payload: CreateProjectPayload,
    options?: HttpRequestOptions<CreateProjectPayload>,
  ): Promise<Project> {
    return this.httpService.post<Project, CreateProjectPayload>(
      this.resourcePath,
      payload,
      options,
    );
  }

  public replaceProject(
    id: ProjectIdentifier,
    payload: CreateProjectPayload,
    options?: HttpRequestOptions<CreateProjectPayload>,
  ): Promise<Project> {
    return this.httpService.put<Project, CreateProjectPayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  public updateProject(
    id: ProjectIdentifier,
    payload: UpdateProjectPayload,
    options?: HttpRequestOptions<UpdateProjectPayload>,
  ): Promise<Project> {
    return this.httpService.patch<Project, UpdateProjectPayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  public deleteProject(id: ProjectIdentifier, options?: HttpRequestOptions): Promise<void> {
    return this.httpService.delete<void>(this.createItemUrl(id), options);
  }

  private static normalizeResourcePath(resourcePath: string): string {
    const trimmedPath = resourcePath.replace(/^\/+|\/+$/g, '');

    if (!trimmedPath) {
      return '';
    }

    return trimmedPath;
  }

  private createItemUrl(id: ProjectIdentifier): string {
    if (!this.resourcePath) {
      return `${id}`;
    }

    return `${this.resourcePath}/${id}`;
  }
}
