import type { AxiosRequestConfig } from 'axios';
import type { SkillType } from '@libs/types';

import { BaseHttpService, skillsApiConfig, type HttpRequestOptions } from '@libs/shared';

import { skills } from '../../static-data/skills';

export type Skill = SkillType;

export type SkillIdentifier = string | number;

export type CreateSkillPayload = SkillType;

export type UpdateSkillPayload = Partial<SkillType>;

export interface SkillsServiceOptions {
  baseURL?: string;
  axiosConfig?: AxiosRequestConfig;
  resourcePath?: string;
  httpService?: BaseHttpService;
}

export class SkillsService {
  private readonly httpService: BaseHttpService;
  private readonly resourcePath: string;

  constructor(options: SkillsServiceOptions = {}) {
    const {
      baseURL,
      axiosConfig,
      resourcePath = skillsApiConfig.loadSkills,
      httpService,
    } = options;

    this.resourcePath = SkillsService.normalizeResourcePath(resourcePath);
    this.httpService = httpService ?? new BaseHttpService(baseURL, axiosConfig);
  }

  public async getSkills(
    options: HttpRequestOptions | undefined,
    staticDataIgnoreDB: boolean,
    useStaticDataFullback = false,
  ): Promise<Skill[]> {
    if (staticDataIgnoreDB) {
      return skills;
    }

    try {
      return await this.httpService.get<Skill[]>(this.resourcePath, options);
    } catch (error) {
      if (!useStaticDataFullback) {
        throw error;
      }

      return skills;
    }
  }

  public getSkill(id: SkillIdentifier, options?: HttpRequestOptions): Promise<Skill> {
    return this.httpService.get<Skill>(this.createItemUrl(id), options);
  }

  public createSkill(
    payload: CreateSkillPayload,
    options?: HttpRequestOptions<CreateSkillPayload>,
  ): Promise<Skill> {
    return this.httpService.post<Skill, CreateSkillPayload>(
      this.resourcePath,
      payload,
      options,
    );
  }

  public replaceSkill(
    id: SkillIdentifier,
    payload: CreateSkillPayload,
    options?: HttpRequestOptions<CreateSkillPayload>,
  ): Promise<Skill> {
    return this.httpService.put<Skill, CreateSkillPayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  public updateSkill(
    id: SkillIdentifier,
    payload: UpdateSkillPayload,
    options?: HttpRequestOptions<UpdateSkillPayload>,
  ): Promise<Skill> {
    return this.httpService.patch<Skill, UpdateSkillPayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  public deleteSkill(id: SkillIdentifier, options?: HttpRequestOptions): Promise<void> {
    return this.httpService.delete<void>(this.createItemUrl(id), options);
  }

  private static normalizeResourcePath(resourcePath: string): string {
    const trimmedPath = resourcePath.replace(/^\/+|\/+$/g, '');

    if (!trimmedPath) {
      return '';
    }

    return trimmedPath;
  }

  private createItemUrl(id: SkillIdentifier): string {
    if (!this.resourcePath) {
      return `${id}`;
    }

    return `${this.resourcePath}/${id}`;
  }
}
