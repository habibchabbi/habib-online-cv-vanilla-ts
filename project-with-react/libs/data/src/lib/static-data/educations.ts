// eslint-disable-next-line @nx/enforce-module-boundaries
import type { EducationType } from '@libs/types';

export const EDUCATIONS_EN: EducationType[] = [
  {
    title: 'Bachelor of Engineering',
    diploma: 'Telecommunication',
    startYear: 2010,
    endYear: 2014,
    schoolName: "Higher School of Telecommunication of Tunis-Tunisia (Sup'com)",
    schoolIcon: 'supcom.jpg',
  },
  {
    title: 'National Competition Ranking (rank 120/2500)',
    diploma: 'Mathematics-physics',
    startYear: 2008,
    endYear: 2010,
    schoolName:
      'Preparatory Institute for Engineering Studies (IPEIN) Nabeul-Tunisia',
    schoolIcon: 'ipein.png',
  },
];

export const EDUCATIONS_FR: EducationType[] = [
  {
    title: "Diplôme d'ingénieur",
    diploma: 'Télécommunications',
    startYear: 2010,
    endYear: 2014,
    schoolName:
      "École supérieure des communications de Tunis - Tunisie (Sup'com)",
    schoolIcon: 'supcom.jpg',
  },
  {
    title: 'Classement au concours national (rang 120/2500)',
    diploma: 'Mathématiques-physique',
    startYear: 2008,
    endYear: 2010,
    schoolName:
      "Institut préparatoire aux études d'ingénieur (IPEIN) Nabeul-Tunisie",
    schoolIcon: 'ipein.png',
  },
];

export const EDUCATIONS_DE: EducationType[] = [
  {
    title: 'Bachelor of Engineering',
    diploma: 'Telekommunikation',
    startYear: 2010,
    endYear: 2014,
    schoolName:
      "Höhere Schule für Telekommunikation Tunis, Tunesien (Sup'com)",
    schoolIcon: 'supcom.jpg',
  },
  {
    title: 'Platzierung im nationalen Wettbewerb (Rang 120/2500)',
    diploma: 'Mathematik-Physik',
    startYear: 2008,
    endYear: 2010,
    schoolName:
      'Vorbereitungsinstitut für Ingenieurstudien (IPEIN) Nabeul-Tunesien',
    schoolIcon: 'ipein.png',
  },
];

export const EDUCATIONS_NL: EducationType[] = [
  {
    title: 'Bachelor in Engineering',
    diploma: 'Telecommunicatie',
    startYear: 2010,
    endYear: 2014,
    schoolName:
      "Hogere School voor Telecommunicatie van Tunis, Tunesië (Sup'com)",
    schoolIcon: 'supcom.jpg',
  },
  {
    title: 'Nationaal concours (rang 120/2500)',
    diploma: 'Wiskunde-natuurkunde',
    startYear: 2008,
    endYear: 2010,
    schoolName:
      'Voorbereidend Instituut voor Ingenieursstudies (IPEIN) Nabeul-Tunesië',
    schoolIcon: 'ipein.png',
  },
];

export const EDUCATIONS_AR: EducationType[] = [
  {
    title: 'بكالوريوس هندسة',
    diploma: 'الاتصالات',
    startYear: 2010,
    endYear: 2014,
    schoolName:
      "المدرسة العليا للاتصالات بتونس - تونس (Sup'com)",
    schoolIcon: 'supcom.jpg',
  },
  {
    title: 'الترتيب في المناظرة الوطنية (المرتبة 120/2500)',
    diploma: 'رياضيات-فيزياء',
    startYear: 2008,
    endYear: 2010,
    schoolName:
      'المعهد التحضيري للدراسات الهندسية بنابل - تونس (IPEIN)',
    schoolIcon: 'ipein.png',
  },
];

const EDUCATIONS_BY_LANGUAGE = {
  en: EDUCATIONS_EN,
  fr: EDUCATIONS_FR,
  de: EDUCATIONS_DE,
  nl: EDUCATIONS_NL,
  ar: EDUCATIONS_AR,
} as const;

export type EducationLanguage = keyof typeof EDUCATIONS_BY_LANGUAGE;

export const getEducationsByLanguage = (
  language: string,
): EducationType[] => {
  if (
    language &&
    Object.prototype.hasOwnProperty.call(
      EDUCATIONS_BY_LANGUAGE,
      language,
    )
  ) {
    return EDUCATIONS_BY_LANGUAGE[language as EducationLanguage];
  }

  return EDUCATIONS_EN;
};

export const EDUCATIONS = EDUCATIONS_EN;
