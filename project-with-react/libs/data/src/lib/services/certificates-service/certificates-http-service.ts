import type { AxiosRequestConfig } from 'axios';
import type { CertificateType } from '@libs/types';

import { BaseHttpService, certificatesApiConfig, type HttpRequestOptions } from '@libs/shared';

import { getCertificatesByLanguage } from '../../static-data/certificates';

export type Certificate = CertificateType;

export type CertificateIdentifier = string | number;

export type CreateCertificatePayload = CertificateType;

export type UpdateCertificatePayload = Partial<CertificateType>;

export interface CertificatesServiceOptions {
  /**
   * Base URL used when issuing requests. Defaults to an empty string meaning that
   * relative URLs will be used (e.g. `/api/certificates`).
   */
  baseURL?: string;
  /**
   * Axios configuration applied to the underlying HTTP client instance.
   */
  axiosConfig?: AxiosRequestConfig;
  /**
   * API resource path used for all certificate requests. Defaults to `/certificates`.
   */
  resourcePath?: string;
  /**
   * Optional pre-configured HTTP service. When provided the BaseHttpService configuration
   * options above are ignored, allowing consumers (such as dependency injection containers)
   * to supply their own instance.
   */
  httpService?: BaseHttpService;
}

export class CertificatesService {
  private readonly httpService: BaseHttpService;
  private readonly resourcePath: string;

  constructor(options: CertificatesServiceOptions = {}) {
    const {
      baseURL,
      axiosConfig,
      resourcePath = certificatesApiConfig.loadCertificates,
      httpService,
    } = options;
    this.resourcePath = CertificatesService.normalizeResourcePath(resourcePath);

    this.httpService = httpService ?? new BaseHttpService(baseURL, axiosConfig);

  }

  /**
   * Fetches every certificate available in the remote data-store.
   */
  public async getCertificates(
    options: HttpRequestOptions | undefined,
    staticDataIgnoreDB: boolean,
    useStaticDataFullback = false,
    language?: string,
  ): Promise<Certificate[]> {
    if (staticDataIgnoreDB) {
      return getCertificatesByLanguage(language ?? '');
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

      return await this.httpService.get<Certificate[]>(this.resourcePath, requestOptions);
    } catch (error) {
      if (!useStaticDataFullback) {
        throw error;
      }

      return getCertificatesByLanguage(language ?? '');
    }
  }

  /**
   * Retrieves a single certificate by its identifier.
   */
  public getCertificate(
    id: CertificateIdentifier,
    options?: HttpRequestOptions,
  ): Promise<Certificate> {
    return this.httpService.get<Certificate>(this.createItemUrl(id), options);
  }

  /**
   * Persists a brand-new certificate in the backend.
   */
  public createCertificate(
    payload: CreateCertificatePayload,
    options?: HttpRequestOptions<CreateCertificatePayload>,
  ): Promise<Certificate> {
    return this.httpService.post<Certificate, CreateCertificatePayload>(
      this.resourcePath,
      payload,
      options,
    );
  }

  /**
   * Replaces a certificate with the provided payload using an HTTP PUT request.
   */
  public replaceCertificate(
    id: CertificateIdentifier,
    payload: CreateCertificatePayload,
    options?: HttpRequestOptions<CreateCertificatePayload>,
  ): Promise<Certificate> {
    return this.httpService.put<Certificate, CreateCertificatePayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  /**
   * Applies a partial update to a certificate using an HTTP PATCH request.
   */
  public updateCertificate(
    id: CertificateIdentifier,
    payload: UpdateCertificatePayload,
    options?: HttpRequestOptions<UpdateCertificatePayload>,
  ): Promise<Certificate> {
    return this.httpService.patch<Certificate, UpdateCertificatePayload>(
      this.createItemUrl(id),
      payload,
      options,
    );
  }

  /**
   * Deletes a certificate from the backend storage.
   */
  public deleteCertificate(
    id: CertificateIdentifier,
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

  private createItemUrl(id: CertificateIdentifier): string {
    if (!this.resourcePath) {
      return `${id}`;
    }

    return `${this.resourcePath}/${id}`;
  }
}
