import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type { AppEnvironment } from '@libs/types';

import { getBasesApiUrl } from '../../config/api.config';
import EnvironmentService from '../environment-service';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type HttpRequestOptions<TData = unknown> = AxiosRequestConfig<TData>;

export class HttpRequestError<T = unknown> extends Error {
  public readonly status?: number;

  public readonly data?: T;

  public readonly headers?: AxiosResponse['headers'];

  public readonly originalError: AxiosError<T>;

  constructor(error: AxiosError<T>) {
    super(error.message);
    this.name = 'HttpRequestError';
    this.status = error.response?.status;
    this.data = error.response?.data;
    this.headers = error.response?.headers;
    this.originalError = error;
  }
}

export class BaseHttpService {
  protected readonly client: AxiosInstance;

  constructor(baseURL?: string, config?: AxiosRequestConfig) {
    const resolvedBaseURL = BaseHttpService.resolveBaseURL(baseURL ?? config?.baseURL);

    this.client = axios.create({ baseURL: resolvedBaseURL, ...config });
  }

  public get<TResponse>(url: string, options?: HttpRequestOptions): Promise<TResponse> {
    return this.request<TResponse>({ ...options, method: 'GET', url });
  }

  public post<TResponse, TData = unknown>(url: string, data?: TData, options?: HttpRequestOptions<TData>): Promise<TResponse> {
    return this.request<TResponse>({ ...options, method: 'POST', url, data });
  }

  public put<TResponse, TData = unknown>(url: string, data?: TData, options?: HttpRequestOptions<TData>): Promise<TResponse> {
    return this.request<TResponse>({ ...options, method: 'PUT', url, data });
  }

  public patch<TResponse, TData = unknown>(url: string, data?: TData, options?: HttpRequestOptions<TData>): Promise<TResponse> {
    return this.request<TResponse>({ ...options, method: 'PATCH', url, data });
  }

  public delete<TResponse>(url: string, options?: HttpRequestOptions): Promise<TResponse> {
    return this.request<TResponse>({ ...options, method: 'DELETE', url });
  }

  protected async request<TResponse>(config: AxiosRequestConfig): Promise<TResponse> {
    try {
      const response = await this.client.request<TResponse>(config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new HttpRequestError(error);
      }

      throw error;
    }
  }

  private static resolveBaseURL(baseURL?: string): string {
    const normalizedBaseURL = baseURL?.trim();

    if (normalizedBaseURL) {
      return normalizedBaseURL;
    }

    return getBasesApiUrl(BaseHttpService.resolveAppEnvironment());
  }

  private static resolveAppEnvironment(): AppEnvironment {
    return EnvironmentService.isDevelopment() ? 'local' : 'production';
  }
}
