'use client';

export type Environment = 'development' | 'production';

export class EnvironmentService {
  static getEnvironment(): Environment {
    if (typeof window === 'undefined') {
      const inferredEnvironment = EnvironmentService.getEnvironmentFromProcess();

      if (inferredEnvironment) {
        return inferredEnvironment;
      }

      return 'production';
    }

    const host = window.location.hostname.toLowerCase();

    if (host.includes('localhost')) {
      return 'development';
    }

    if (host.includes('habib')) {
      return 'production';
    }

    return 'production';
  }

  static isDevelopment(): boolean {
    return EnvironmentService.getEnvironment() === 'development';
  }

  static isProduction(): boolean {
    return EnvironmentService.getEnvironment() === 'production';
  }

  private static getEnvironmentFromProcess(): Environment | undefined {
    if (typeof process === 'undefined') {
      return undefined;
    }

    const explicitEnvironment = process.env.NEXT_PUBLIC_APP_ENV ?? process.env.APP_ENV;

    if (explicitEnvironment === 'development') {
      return 'development';
    }

    if (explicitEnvironment === 'production') {
      return 'production';
    }

    if (process.env.NODE_ENV === 'development') {
      return 'development';
    }

    if (process.env.NODE_ENV === 'production') {
      return 'production';
    }

    return undefined;
  }
}

export default EnvironmentService;

