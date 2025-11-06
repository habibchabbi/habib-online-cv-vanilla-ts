import { CANDOS_ICONS, type CandosIconsId } from '../public/exports/candos-icons';
import { getImageSrcFromGroup } from '@libs/shared';

const CAN_DO_LANGUAGES = ['en', 'fr', 'de', 'nl', 'ar'] as const;

type CanDoLanguage = (typeof CAN_DO_LANGUAGES)[number];

type CanDoTranslations = Record<CanDoLanguage, string>;

interface CanDoItem {
  icon: CandosIconsId;
  translations: CanDoTranslations;
}

const CAN_DO_ITEMS: CanDoItem[] = [
  {
    icon: 'experience',
    translations: {
      en: 'I have about 9 years of experience with development',
      fr: "J'ai environ 9 ans d'expérience en développement",
      de: 'Ich habe rund 9 Jahre Erfahrung in der Entwicklung',
      nl: 'Ik heb ongeveer 9 jaar ervaring met ontwikkeling',
      ar: 'لدي نحو تسع سنوات من الخبرة في مجال التطوير',
    },
  },
  {
    icon: 'angularExpert',
    translations: {
      en: 'I am an expert in the Angular ecosystem.',
      fr: "Je suis expert de l'écosystème Angular.",
      de: 'Ich bin Experte im Angular-Ökosystem.',
      nl: 'Ik ben expert in het Angular-ecosysteem.',
      ar: 'أنا خبير في منظومة Angular.',
    },
  },
  {
    icon: 'javaSpring',
    translations: {
      en: 'I am familiar with the Java and Spring Boot ecosystem.',
      fr: "Je maîtrise l'écosystème Java et Spring Boot.",
      de: 'Ich kenne mich im Java- und Spring-Boot-Ökosystem aus.',
      nl: 'Ik ben vertrouwd met het Java- en Spring Boot-ecosysteem.',
      ar: 'أتمتع بمعرفة جيدة بمنظومة Java وSpring Boot.',
    },
  },
  {
    icon: 'languages',
    translations: {
      en: 'I can communicate in several languages',
      fr: 'Je peux communiquer en plusieurs langues',
      de: 'Ich kann in mehreren Sprachen kommunizieren',
      nl: 'Ik kan in meerdere talen communiceren',
      ar: 'أستطيع التواصل بعدة لغات',
    },
  },
  {
    icon: 'bestPractices',
    translations: {
      en: 'I use best practices',
      fr: 'J’applique les meilleures pratiques',
      de: 'Ich wende Best Practices an',
      nl: 'Ik pas best practices toe',
      ar: 'أطبق أفضل الممارسات',
    },
  },
  {
    icon: 'solutions',
    translations: {
      en: 'Propose solution',
      fr: 'Je propose des solutions',
      de: 'Ich schlage Lösungen vor',
      nl: 'Ik stel oplossingen voor',
      ar: 'أقترح الحلول المناسبة',
    },
  },
  {
    icon: 'mentoring',
    translations: {
      en: 'Help juniors Developers',
      fr: 'J’accompagne les développeurs juniors',
      de: 'Ich unterstütze Junior-Entwickler',
      nl: 'Ik begeleid juniorontwikkelaars',
      ar: 'أدعم المطورين المبتدئين',
    },
  },
  {
    icon: 'teamwork',
    translations: {
      en: 'Work in team',
      fr: 'Je travaille en équipe',
      de: 'Ich arbeite im Team',
      nl: 'Ik werk graag in teamverband',
      ar: 'أعمل ضمن فريق',
    },
  },
];

const buildCanDoStrings = (language: CanDoLanguage): string[] =>
  CAN_DO_ITEMS.map(({ translations }) => translations[language]);

const buildCanDoObjects = (
  language: CanDoLanguage,
): { image: string; label: string }[] =>
  CAN_DO_ITEMS.map(({ icon, translations }) => ({
    label: translations[language],
    image: getImageSrcFromGroup(CANDOS_ICONS, icon),
  }));

const THINGS_I_CAN_DO_EN = buildCanDoStrings('en');
const THINGS_I_CAN_DO_FR = buildCanDoStrings('fr');
const THINGS_I_CAN_DO_DE = buildCanDoStrings('de');
const THINGS_I_CAN_DO_NL = buildCanDoStrings('nl');
const THINGS_I_CAN_DO_AR = buildCanDoStrings('ar');

const THINGS_I_CAN_DO_BY_LANGUAGE = {
  en: THINGS_I_CAN_DO_EN,
  fr: THINGS_I_CAN_DO_FR,
  de: THINGS_I_CAN_DO_DE,
  nl: THINGS_I_CAN_DO_NL,
  ar: THINGS_I_CAN_DO_AR,
} as const;

const THINGS_I_CAN_DO_OBJECTS_EN = buildCanDoObjects('en');
const THINGS_I_CAN_DO_OBJECTS_FR = buildCanDoObjects('fr');
const THINGS_I_CAN_DO_OBJECTS_DE = buildCanDoObjects('de');
const THINGS_I_CAN_DO_OBJECTS_NL = buildCanDoObjects('nl');
const THINGS_I_CAN_DO_OBJECTS_AR = buildCanDoObjects('ar');

const THINGS_I_CAN_DO_OBJECTS_BY_LANGUAGE = {
  en: THINGS_I_CAN_DO_OBJECTS_EN,
  fr: THINGS_I_CAN_DO_OBJECTS_FR,
  de: THINGS_I_CAN_DO_OBJECTS_DE,
  nl: THINGS_I_CAN_DO_OBJECTS_NL,
  ar: THINGS_I_CAN_DO_OBJECTS_AR,
} as const;

export const getThingsICanDoByLanguage = (
  language: string,
): string[] => {
  if (language && language in THINGS_I_CAN_DO_BY_LANGUAGE) {
    return THINGS_I_CAN_DO_BY_LANGUAGE[language as CanDoLanguage];
  }

  return THINGS_I_CAN_DO_EN;
};

export const getThingsICanDoObjectsByLanguage = (
  language: string,
): { image: string; label: string }[] => {
  if (language && language in THINGS_I_CAN_DO_OBJECTS_BY_LANGUAGE) {
    return THINGS_I_CAN_DO_OBJECTS_BY_LANGUAGE[
      language as CanDoLanguage
    ];
  }

  return THINGS_I_CAN_DO_OBJECTS_EN;
};

export const THINGS_I_CAN_DO = THINGS_I_CAN_DO_EN;

export const THINGS_I_CAN_DO_OBJECTS = THINGS_I_CAN_DO_OBJECTS_EN;
