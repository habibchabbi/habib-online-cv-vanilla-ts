import { LanguageOption } from '@libs/types';
import { EnvironmentService } from '@libs/shared';

const BASE_LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '/flags/gb.svg' },
  { code: 'de', name: 'German', flag: '/flags/de.svg' },
  { code: 'fr', name: 'French', flag: '/flags/fr.svg' },
  { code: 'nl', name: 'Dutch', flag: '/flags/nl.svg' },
];

const DEVELOPMENT_LANGUAGE_OPTIONS: LanguageOption[] = [
  ...BASE_LANGUAGE_OPTIONS,
  { code: 'ar', name: 'Arabic', flag: '/flags/ar.svg' },
];

export const LANGUAGE_OPTIONS: LanguageOption[] =
  EnvironmentService.isDevelopment()
    ? DEVELOPMENT_LANGUAGE_OPTIONS
    : BASE_LANGUAGE_OPTIONS;
