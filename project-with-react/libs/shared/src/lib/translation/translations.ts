import { EnvironmentService } from '../services/environment-service';

export type TranslationValue = string | TranslationDictionary;

export interface TranslationDictionary {
  [key: string]: TranslationValue;
}

export type TranslationResources = Record<string, TranslationDictionary>;

const baseNavigation: TranslationDictionary = {
  navigation: {
    about: 'About',
    softwares: 'Softwares',
    professionalExperiences: 'Professional Experiences',
    projects: 'Projects',
    education: 'Education',
    skills: 'Skills',
    certificates: 'Certificates',
    languages: 'Languages',
    contact: 'Contact',
    whatICanDo: 'What I Can Do',
  },
  about: {
    section1:
      'With a robust professional background of 9 years, I have excelled in key areas mainly: web-development (Angular-JAVA), architecture, conception, and testing.',
    section2:
      'My approach is characterized by creativity, autonomy, optimism, and a positive attitude, coupled with a strong aptitude for critical thinking.',
    section3:
      'Eager to further diversify and deepen my competencies, I am committed to continuous learning and growth within my career, aspiring to take on additional responsibilities and make significant progress in my professional journey.',
  },
  professionalExperiences: {
    realizedProjects: 'Realized Projects :',
  },
};

const baseNavigationDe: TranslationDictionary = {
  navigation: {
    about: 'Über mich',
    softwares: 'Software',
    professionalExperiences: 'Berufserfahrung',
    projects: 'Projekte',
    education: 'Ausbildung',
    skills: 'Fähigkeiten',
    certificates: 'Zertifizierungen',
    languages: 'Sprachen',
    contact: 'Kontakt',
    whatICanDo: 'Was ich kann',
  },
  about: {
    section1:
      'Mit einer soliden beruflichen Erfahrung von 9 Jahren habe ich mich vor allem in den Bereichen Webentwicklung (Angular-JAVA), Architektur, Konzeption und Testing ausgezeichnet.',
    section2:
      'Mein Ansatz ist geprägt von Kreativität, Eigenständigkeit, Optimismus und einer positiven Haltung sowie einer ausgeprägten Fähigkeit zum kritischen Denken.',
    section3:
      'Um meine Kompetenzen weiter zu diversifizieren und zu vertiefen, engagiere ich mich für kontinuierliches Lernen und Wachstum in meiner Laufbahn, strebe nach zusätzlichen Verantwortungen und möchte in meiner beruflichen Laufbahn spürbare Fortschritte erzielen.',
  },
  professionalExperiences: {
    realizedProjects: 'Realisierte Projekte :',
  },
};

const baseNavigationFr: TranslationDictionary = {
  navigation: {
    about: 'À propos',
    softwares: 'Logiciels',
    professionalExperiences: 'Expériences professionnelles',
    projects: 'Projets',
    education: 'Formation',
    skills: 'Compétences',
    certificates: 'Certifications',
    languages: 'Langues',
    contact: 'Contact',
    whatICanDo: 'Ce que je peux faire',
  },
  about: {
    section1:
      "Fort d'une solide expérience professionnelle de 9 ans, je me suis distingué principalement dans les domaines du développement web (Angular-JAVA), de l'architecture, de la conception et des tests.",
    section2:
      'Mon approche se caractérise par la créativité, l’autonomie, l’optimisme et une attitude positive, associés à une forte capacité de pensée critique.',
    section3:
      'Désireux de diversifier et d’approfondir davantage mes compétences, je m’engage dans un apprentissage continu et une progression constante dans ma carrière, aspirant à assumer plus de responsabilités et à franchir des étapes significatives dans mon parcours professionnel.',
  },
  professionalExperiences: {
    realizedProjects: 'Projets r?alis?s :',
  },
};

const baseNavigationAr: TranslationDictionary = {
  navigation: {
    about: 'نبذة عني',
    softwares: 'البرمجيات',
    professionalExperiences: 'الخبرات المهنية',
    projects: 'المشاريع',
    education: 'التعليم',
    skills: 'المهارات',
    certificates: 'الشهادات',
    languages: 'اللغات',
    contact: 'تواصل',
    whatICanDo: 'ما يمكنني القيام به',
  },
  about: {
    section1:
      'بفضل خلفية مهنية قوية تمتد لتسع سنوات، تميزت في مجالات أساسية تشمل تطوير الويب (Angular-JAVA)، والهندسة المعمارية، والتصميم، والاختبار.',
    section2:
      'يتسم أسلوبي بالإبداع والاستقلالية والتفاؤل والموقف الإيجابي، إلى جانب قدرة قوية على التفكير النقدي.',
    section3:
      'أتطلع إلى تنويع وتعميق مهاراتي أكثر فأكثر، وألتزم بالتعلم المستمر والنمو المهني، طامحًا إلى تحمل مسؤوليات إضافية وتحقيق تقدم ملموس في مسيرتي.',
  },
  professionalExperiences: {
    realizedProjects: 'المشاريع المنجزة :',
  },
};

const baseNavigationNl: TranslationDictionary = {
  navigation: {
    about: 'Over mij',
    softwares: 'Software',
    professionalExperiences: 'Professionele ervaringen',
    projects: 'Projecten',
    education: 'Opleiding',
    skills: 'Vaardigheden',
    certificates: 'Certificaten',
    languages: 'Talen',
    contact: 'Contact',
    whatICanDo: 'Wat ik kan',
  },
  about: {
    section1:
      'Met een stevige professionele ervaring van 9 jaar heb ik uitgeblonken in kerngebieden zoals webontwikkeling (Angular-JAVA), architectuur, ontwerp en testen.',
    section2:
      'Mijn aanpak wordt gekenmerkt door creativiteit, zelfstandigheid, optimisme en een positieve houding, gecombineerd met een sterk kritisch denkvermogen.',
    section3:
      'Om mijn competenties verder te verbreden en te verdiepen, zet ik in op voortdurend leren en groeien in mijn loopbaan, met de ambitie om meer verantwoordelijkheid op te nemen en aanzienlijke vooruitgang te boeken.',
  },
  professionalExperiences: {
    realizedProjects: 'Gerealiseerde projecten :',
  },
};

const productionTranslationResources = {
  en: baseNavigation,
  de: baseNavigationDe,
  fr: baseNavigationFr,
  nl: baseNavigationNl,
} as const satisfies TranslationResources;

const developmentTranslationResources = {
  ...productionTranslationResources,
  ar: baseNavigationAr,
} as const satisfies TranslationResources;

export const translationResources = EnvironmentService.isDevelopment()
  ? developmentTranslationResources
  : productionTranslationResources;

export type SupportedLanguage = keyof typeof translationResources;

export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

export const SUPPORTED_LANGUAGES = Object.keys(
  translationResources,
) as SupportedLanguage[];

export const isSupportedLanguage = (
  code: string | null | undefined,
): code is SupportedLanguage => {
  if (!code) {
    return false;
  }

  return Object.prototype.hasOwnProperty.call(translationResources, code);
};
