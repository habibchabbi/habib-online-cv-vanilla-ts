// eslint-disable-next-line @nx/enforce-module-boundaries
import type { LanguageType } from '@libs/types';

export const LANGUAGES: LanguageType[] = [
  {
    language: 'French',
    proficiency: 'Professional proficiency',
    flag: '/flags/fr.svg',
  },
  {
    language: 'English',
    proficiency: 'Professional proficiency',
    flag: '/flags/gb.svg',
  },
  {
    language: 'German',
    proficiency: 'B2',
    certificate: 'Goethe certificate',
    flag: '/flags/de.svg',
  },
];
