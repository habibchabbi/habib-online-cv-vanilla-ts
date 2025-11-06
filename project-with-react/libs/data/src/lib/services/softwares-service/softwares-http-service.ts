import type { AxiosRequestConfig } from 'axios';
import type { SkillType } from '@libs/types';

import { BaseHttpService, softwaresApiConfig, type HttpRequestOptions } from '@libs/shared';

import { skillTools } from '../../static-data/skills';

export type Software = SkillType;

export type SoftwareIdentifier = string | number;

export type CreateSoftwarePayload = SkillType;

export type UpdateSoftwarePayload = Partial<SkillType>;

export interface SoftwaresServiceOptions {
  baseURL?: string;
  axiosConfig?: AxiosRequestConfig;
  resourcePath?: string;
  httpService?: BaseHttpService;
}

export class SoftwaresService {
  private readonly httpService: BaseHttpService;
  private readonly resourcePath: string;

  constructor(options: SoftwaresServiceOptions = {}) {
    const {
      baseURL,
      axiosConfig,
      resourcePath = softwaresApiConfig.loadSoftwares,
      httpService,
    } = options;

    this.resourcePath = SoftwaresService.normalizeResourcePath(resourcePath);
    this.httpService = httpService ?? new BaseHttpService(baseURL, axiosConfig);
  }

  public async getSoftwares(
    options: HttpRequestOptions | undefined,
    staticDataIgnoreDB: boolean,
    useStaticDataFullback = false,
  ): Promise<Software[]> {
    if (staticDataIgnoreDB) {
      return skillTools;
    }

    try {
      return await this.httpService.get<Software[]>(this.resourcePath, options);
    } catch (error) {
      if (!useStaticDataFullback) {
        throw error;
      }

      return skillTools;
    }
  }

  public getSoftware(id: SoftwareIdentifier, options?: HttpRequestOptions): Promise<Software> {
    return this.httpService.get<Software>(this.createItemUrl(id), options);
  }

  public createSoftware(
    payload: CreateSoftwarePayload,
    options?: HttpRequestOptions<CreateSoftwarePayload>,
  ): Promise<Software> {
    return this.httpService.post<Software, CreateSoftwarePayload>(
      this.resourcePath,
      payload,
      options,
    );
  }

  public replaceSoftware(
    id: SoftwareIdentifier,
    payload: CreateSoftwarePayload,
    options?: HttpRequestOptions<CreateSoftwarePayload>,
  ): Promise<Software> {
    return this.httpService.put<Software, CreateSoftwarePayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  public updateSoftware(
    id: SoftwareIdentifier,
    payload: UpdateSoftwarePayload,
    options?: HttpRequestOptions<UpdateSoftwarePayload>,
  ): Promise<Software> {
    return this.httpService.patch<Software, UpdateSoftwarePayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  public deleteSoftware(id: SoftwareIdentifier, options?: HttpRequestOptions): Promise<void> {
    return this.httpService.delete<void>(this.createItemUrl(id), options);
  }

  private static normalizeResourcePath(resourcePath: string): string {
    const trimmedPath = resourcePath.replace(/^\/+|\/+$/g, '');

    if (!trimmedPath) {
      return '';
    }

    return trimmedPath;
  }

  private createItemUrl(id: SoftwareIdentifier): string {
    if (!this.resourcePath) {
      return `${id}`;
    }

    return `${this.resourcePath}/${id}`;
  }
}
