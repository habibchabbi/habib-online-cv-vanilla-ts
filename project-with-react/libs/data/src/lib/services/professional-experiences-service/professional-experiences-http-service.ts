import type { AxiosRequestConfig } from 'axios';
import type { ProfessionalExperienceType } from '@libs/types';

import {
  BaseHttpService,
  professionalExperiencesApiConfig,
  type HttpRequestOptions,
} from '@libs/shared';

import { getProfessionalExperiencesByLanguage } from '../../static-data/professional-experiences';

export type ProfessionalExperience = ProfessionalExperienceType;

export type ProfessionalExperienceIdentifier = string | number;

export type CreateProfessionalExperiencePayload = ProfessionalExperienceType;

export type UpdateProfessionalExperiencePayload = Partial<ProfessionalExperienceType>;

export interface ProfessionalExperiencesServiceOptions {
  baseURL?: string;
  axiosConfig?: AxiosRequestConfig;
  resourcePath?: string;
  httpService?: BaseHttpService;
}

export class ProfessionalExperiencesService {
  private readonly httpService: BaseHttpService;
  private readonly resourcePath: string;

  constructor(options: ProfessionalExperiencesServiceOptions = {}) {
    const {
      baseURL,
      axiosConfig,
      resourcePath = professionalExperiencesApiConfig.loadProfessionalExperiences,
      httpService,
    } = options;

    this.resourcePath = ProfessionalExperiencesService.normalizeResourcePath(resourcePath);
    this.httpService = httpService ?? new BaseHttpService(baseURL, axiosConfig);
  }

  public async getProfessionalExperiences(
    options: HttpRequestOptions | undefined,
    staticDataIgnoreDB: boolean,
    useStaticDataFullback = false,
    language?: string,
  ): Promise<ProfessionalExperience[]> {
    if (staticDataIgnoreDB) {
      return getProfessionalExperiencesByLanguage(language ?? '');
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

      return await this.httpService.get<ProfessionalExperience[]>(
        this.resourcePath,
        requestOptions,
      );
    } catch (error) {
      if (!useStaticDataFullback) {
        throw error;
      }

      return getProfessionalExperiencesByLanguage(language ?? '');
    }
  }

  public getProfessionalExperience(
    id: ProfessionalExperienceIdentifier,
    options?: HttpRequestOptions,
  ): Promise<ProfessionalExperience> {
    return this.httpService.get<ProfessionalExperience>(this.createItemUrl(id), options);
  }

  public createProfessionalExperience(
    payload: CreateProfessionalExperiencePayload,
    options?: HttpRequestOptions<CreateProfessionalExperiencePayload>,
  ): Promise<ProfessionalExperience> {
    return this.httpService.post<ProfessionalExperience, CreateProfessionalExperiencePayload>(
      this.resourcePath,
      payload,
      options,
    );
  }

  public replaceProfessionalExperience(
    id: ProfessionalExperienceIdentifier,
    payload: CreateProfessionalExperiencePayload,
    options?: HttpRequestOptions<CreateProfessionalExperiencePayload>,
  ): Promise<ProfessionalExperience> {
    return this.httpService.put<ProfessionalExperience, CreateProfessionalExperiencePayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  public updateProfessionalExperience(
    id: ProfessionalExperienceIdentifier,
    payload: UpdateProfessionalExperiencePayload,
    options?: HttpRequestOptions<UpdateProfessionalExperiencePayload>,
  ): Promise<ProfessionalExperience> {
    return this.httpService.patch<ProfessionalExperience, UpdateProfessionalExperiencePayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  public deleteProfessionalExperience(
    id: ProfessionalExperienceIdentifier,
    options?: HttpRequestOptions,
  ): Promise<void> {
    return this.httpService.delete<void>(this.createItemUrl(id), options);
  }

  private static normalizeResourcePath(resourcePath: string): string {
    const trimmedPath = resourcePath.replace(/^\/+|\/+$/g, '');

    if (!trimmedPath) {
      return '';
    }

    return trimmedPath;
  }

  private createItemUrl(id: ProfessionalExperienceIdentifier): string {
    if (!this.resourcePath) {
      return `${id}`;
    }

    return `${this.resourcePath}/${id}`;
  }
}
