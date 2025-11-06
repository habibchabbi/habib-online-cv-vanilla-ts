import type { AxiosRequestConfig } from 'axios';
import type { EducationType } from '@libs/types';

import { BaseHttpService, educationsApiConfig, type HttpRequestOptions } from '@libs/shared';

import { getEducationsByLanguage } from '../../static-data/educations';

export type Education = EducationType;

export type EducationIdentifier = string | number;

export type CreateEducationPayload = EducationType;

export type UpdateEducationPayload = Partial<EducationType>;

export interface EducationsServiceOptions {
  /**
   * Base URL used when issuing requests. Defaults to an empty string meaning that
   * relative URLs will be used (e.g. `/api/educations`).
   */
  baseURL?: string;
  /**
   * Axios configuration applied to the underlying HTTP client instance.
   */
  axiosConfig?: AxiosRequestConfig;
  /**
   * API resource path used for all education requests. Defaults to `/educations`.
   */
  resourcePath?: string;
  /**
   * Optional pre-configured HTTP service. When provided the BaseHttpService configuration
   * options above are ignored, allowing consumers (such as dependency injection containers)
   * to supply their own instance.
   */
  httpService?: BaseHttpService;
}

export class EducationsService {
  private readonly httpService: BaseHttpService;
  private readonly resourcePath: string;

  constructor(options: EducationsServiceOptions = {}) {
    const {
      baseURL,
      axiosConfig,
      resourcePath = educationsApiConfig.loadEducations,
      httpService,
    } = options;
    this.resourcePath = EducationsService.normalizeResourcePath(resourcePath);

    this.httpService = httpService ?? new BaseHttpService(baseURL, axiosConfig);

  }

  /**
   * Fetches every education available in the remote data-store.
   */
  public async getEducations(
    options: HttpRequestOptions | undefined,
    staticDataIgnoreDB: boolean,
    useStaticDataFullback = false,
    language?: string,
  ): Promise<Education[]> {
    if (staticDataIgnoreDB) {
      return getEducationsByLanguage(language ?? '');
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

      return await this.httpService.get<Education[]>(this.resourcePath, requestOptions);
    } catch (error) {
      if (!useStaticDataFullback) {
        throw error;
      }

      return getEducationsByLanguage(language ?? '');
    }
  }

  /**
   * Retrieves a single education by its identifier.
   */
  public getEducation(
    id: EducationIdentifier,
    options?: HttpRequestOptions,
  ): Promise<Education> {
    return this.httpService.get<Education>(this.createItemUrl(id), options);
  }

  /**
   * Persists a brand-new education in the backend.
   */
  public createEducation(
    payload: CreateEducationPayload,
    options?: HttpRequestOptions<CreateEducationPayload>,
  ): Promise<Education> {
    return this.httpService.post<Education, CreateEducationPayload>(
      this.resourcePath,
      payload,
      options,
    );
  }

  /**
   * Replaces an education with the provided payload using an HTTP PUT request.
   */
  public replaceEducation(
    id: EducationIdentifier,
    payload: CreateEducationPayload,
    options?: HttpRequestOptions<CreateEducationPayload>,
  ): Promise<Education> {
    return this.httpService.put<Education, CreateEducationPayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  /**
   * Applies a partial update to an education using an HTTP PATCH request.
   */
  public updateEducation(
    id: EducationIdentifier,
    payload: UpdateEducationPayload,
    options?: HttpRequestOptions<UpdateEducationPayload>,
  ): Promise<Education> {
    return this.httpService.patch<Education, UpdateEducationPayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  /**
   * Deletes an education from the backend storage.
   */
  public deleteEducation(
    id: EducationIdentifier,
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

  private createItemUrl(id: EducationIdentifier): string {
    if (!this.resourcePath) {
      return `${id}`;
    }

    return `${this.resourcePath}/${id}`;
  }
}
