import type { AxiosRequestConfig } from 'axios';
import type { ContactType } from '@libs/types';

import { BaseHttpService, contactApiConfig, type HttpRequestOptions } from '@libs/shared';

import { CONTACT } from '../../static-data/contact';

export type Contact = ContactType;

export interface ContactServiceOptions {
  baseURL?: string;
  axiosConfig?: AxiosRequestConfig;
  resourcePath?: string;
  httpService?: BaseHttpService;
}

export class ContactService {
  private readonly httpService: BaseHttpService;
  private readonly resourcePath: string;

  constructor(options: ContactServiceOptions = {}) {
    const { baseURL, axiosConfig, resourcePath = contactApiConfig.loadContact, httpService } = options;

    this.resourcePath = ContactService.normalizeResourcePath(resourcePath);
    this.httpService = httpService ?? new BaseHttpService(baseURL, axiosConfig);
  }

  public async getContact(
    options: HttpRequestOptions | undefined,
    staticDataIgnoreDB: boolean,
    useStaticDataFullback = false,
  ): Promise<Contact> {
    if (staticDataIgnoreDB) {
      return CONTACT;
    }

    try {
      return await this.httpService.get<Contact>(this.resourcePath, options);
    } catch (error) {
      if (!useStaticDataFullback) {
        throw error;
      }

      return CONTACT;
    }
  }

  public async updateContact(
    payload: Partial<Contact>,
    options?: HttpRequestOptions<Partial<Contact>>,
  ): Promise<Contact> {
    return this.httpService.patch<Contact, Partial<Contact>>(
      this.resourcePath,
      payload,
      options,
    );
  }

  private static normalizeResourcePath(resourcePath: string): string {
    const trimmedPath = resourcePath.replace(/^\/+|\/+$/g, '');

    if (!trimmedPath) {
      return '';
    }

    return trimmedPath;
  }
}
