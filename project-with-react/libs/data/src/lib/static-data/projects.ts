// eslint-disable-next-line @nx/enforce-module-boundaries
import type { ProjectType } from '@libs/types';
import {
  ARCHITECTURE_ACHIEVEMENTS_AR,
  ARCHITECTURE_ACHIEVEMENTS_DE,
  ARCHITECTURE_ACHIEVEMENTS_EN,
  ARCHITECTURE_ACHIEVEMENTS_FR,
  ARCHITECTURE_ACHIEVEMENTS_NL,
  CST_CONNECT_ACHIEVEMENTS_AR,
  CST_CONNECT_ACHIEVEMENTS_DE,
  CST_CONNECT_ACHIEVEMENTS_EN,
  CST_CONNECT_ACHIEVEMENTS_FR,
  CST_CONNECT_ACHIEVEMENTS_NL,
  IMBUS_ACHIEVEMENTS_AR,
  IMBUS_ACHIEVEMENTS_DE,
  IMBUS_ACHIEVEMENTS_EN,
  IMBUS_ACHIEVEMENTS_FR,
  IMBUS_ACHIEVEMENTS_NL,
  PORTFOLIO_ACHIEVEMENTS_AR,
  PORTFOLIO_ACHIEVEMENTS_DE,
  PORTFOLIO_ACHIEVEMENTS_EN,
  PORTFOLIO_ACHIEVEMENTS_FR,
  PORTFOLIO_ACHIEVEMENTS_NL,
  WITA_ACHIEVEMENTS_AR,
  WITA_ACHIEVEMENTS_DE,
  WITA_ACHIEVEMENTS_EN,
  WITA_ACHIEVEMENTS_FR,
  WITA_ACHIEVEMENTS_NL,
} from './projects-achievements';

export const PROJECTS_EN: ProjectType[] = [
  {
    name: 'Personal Portfolio',
    description: 'A showcase of my work. ',
    subProjects: [],
    clients: [],
    thumbnail: 'portfolio',
    roleInTheProject: 'Developer of the whole project',
    achievements: PORTFOLIO_ACHIEVEMENTS_EN,
  },
  {
    name: 'wita',
    description:
      '"working in the art", a platform for artist to apply and obtain certificate',
    subProjects: ['artist', 'backoffice', 'commission'],
    clients: [],
    thumbnail: 'wita',
    roleInTheProject: 'Lead frontend (Angular with Spring boot)',
    achievements: WITA_ACHIEVEMENTS_EN,
  },
  {
    name: 'PAM',
    description:
      'Planning accounting metrics, a work planning tool developed for siemens',
    subProjects: [],
    clients: [],
    thumbnail: 'pam',
    roleInTheProject: 'frontend Developer (Angular)',
    achievements: IMBUS_ACHIEVEMENTS_EN,
  },
  {
    name: 'TestBench',
    description: 'Sophisticated test organization and documentation tool',
    subProjects: ['web itorx', 'web testbench'],
    clients: [],
    thumbnail: 'testbench',
    roleInTheProject: 'full stack developer (JAVA/Angular)',
    achievements: IMBUS_ACHIEVEMENTS_EN,
  },
  {
    name: 'ihrm',
    description: 'internal human resouce managent tool for imbus',
    subProjects: [],
    clients: [],
    thumbnail: 'ihrm',
    roleInTheProject: 'developer',
    achievements: IMBUS_ACHIEVEMENTS_EN,
  },
  {
    name: 'cst connect',
    description: 'consultant mngement tool for cruxsoft',
    subProjects: [],
    clients: [],
    thumbnail: 'cstconnect',
    roleInTheProject: 'developer',
    achievements: CST_CONNECT_ACHIEVEMENTS_EN,
  },
  {
    name: 'architecture work management',
    description: 'work digitalization for Architect office',
    subProjects: [],
    clients: [],
    thumbnail: 'architecture',
    roleInTheProject: 'developer',
    achievements: ARCHITECTURE_ACHIEVEMENTS_EN,
  },
  {
    name: 'Architect Personal Portfolio',
    description: 'Personal website for an architect.',
    subProjects: [],
    clients: [],
    thumbnail: 'architectPortfolio',
    roleInTheProject: 'Developer of the entire project',
    achievements: PORTFOLIO_ACHIEVEMENTS_EN,
  },
];

export const PROJECTS_FR: ProjectType[] = [
  {
    name: 'Personal Portfolio',
    description: 'Une vitrine de mon travail.',
    subProjects: [],
    clients: [],
    thumbnail: 'portfolio',
    roleInTheProject: 'Développeur de l’ensemble du projet',
    achievements: PORTFOLIO_ACHIEVEMENTS_FR,
  },
  {
    name: 'wita',
    description:
      '« working in the art », une plateforme permettant aux artistes de postuler et d’obtenir une certification.',
    subProjects: ['artist', 'backoffice', 'commission'],
    clients: [],
    thumbnail: 'wita',
    roleInTheProject: 'Lead frontend (Angular avec Spring Boot)',
    achievements: WITA_ACHIEVEMENTS_FR,
  },
  {
    name: 'PAM',
    description:
      'Planning Accounting Metrics, un outil de planification du travail développé pour Siemens.',
    subProjects: [],
    clients: [],
    thumbnail: 'pam',
    roleInTheProject: 'Développeur frontend (Angular)',
    achievements: IMBUS_ACHIEVEMENTS_FR,
  },
  {
    name: 'TestBench',
    description: "Outil avancé d'organisation et de documentation des tests.",
    subProjects: ['web itorx', 'web testbench'],
    clients: [],
    thumbnail: 'testbench',
    roleInTheProject: 'Développeur full stack (Java/Angular)',
    achievements: IMBUS_ACHIEVEMENTS_FR,
  },
  {
    name: 'ihrm',
    description: 'Outil interne de gestion des ressources humaines pour imbus.',
    subProjects: [],
    clients: [],
    thumbnail: 'ihrm',
    roleInTheProject: 'Développeur',
    achievements: IMBUS_ACHIEVEMENTS_FR,
  },
  {
    name: 'cst connect',
    description: 'Outil de gestion des consultants pour Cruxsoft.',
    subProjects: [],
    clients: [],
    thumbnail: 'cstconnect',
    roleInTheProject: 'Développeur',
    achievements: CST_CONNECT_ACHIEVEMENTS_FR,
  },
  {
    name: 'architecture work management',
    description: 'Numérisation du travail pour un cabinet d’architecture.',
    subProjects: [],
    clients: [],
    thumbnail: 'architecture',
    roleInTheProject: 'Développeur',
    achievements: ARCHITECTURE_ACHIEVEMENTS_FR,
  },
  {
    name: 'Architect Personal Portfolio',
    description: 'Site web personnel pour un architecte.',
    subProjects: [],
    clients: [],
    thumbnail: 'architectPortfolio',
    roleInTheProject: 'Développeur de l’ensemble du projet',
    achievements: PORTFOLIO_ACHIEVEMENTS_FR,
  },
];

export const PROJECTS_DE: ProjectType[] = [
  {
    name: 'Personal Portfolio',
    description: 'Eine Präsentation meiner Arbeiten.',
    subProjects: [],
    clients: [],
    thumbnail: 'portfolio',
    roleInTheProject: 'Entwickler des gesamten Projekts',
    achievements: PORTFOLIO_ACHIEVEMENTS_DE,
  },
  {
    name: 'wita',
    description:
      '„Working in the Art“, eine Plattform, auf der Künstler sich bewerben und Zertifikate erhalten können.',
    subProjects: ['artist', 'backoffice', 'commission'],
    clients: [],
    thumbnail: 'wita',
    roleInTheProject: 'Lead Frontend (Angular mit Spring Boot)',
    achievements: WITA_ACHIEVEMENTS_DE,
  },
  {
    name: 'PAM',
    description:
      'Planning Accounting Metrics, ein Planungswerkzeug, das für Siemens entwickelt wurde.',
    subProjects: [],
    clients: [],
    thumbnail: 'pam',
    roleInTheProject: 'Frontend-Entwickler (Angular)',
    achievements: IMBUS_ACHIEVEMENTS_DE,
  },
  {
    name: 'TestBench',
    description: 'Umfangreiches Tool zur Organisation und Dokumentation von Tests.',
    subProjects: ['web itorx', 'web testbench'],
    clients: [],
    thumbnail: 'testbench',
    roleInTheProject: 'Full-Stack-Entwickler (Java/Angular)',
    achievements: IMBUS_ACHIEVEMENTS_DE,
  },
  {
    name: 'ihrm',
    description: 'Internes Tool für das Personalmanagement bei imbus.',
    subProjects: [],
    clients: [],
    thumbnail: 'ihrm',
    roleInTheProject: 'Entwickler',
    achievements: IMBUS_ACHIEVEMENTS_DE,
  },
  {
    name: 'cst connect',
    description: 'Beraterverwaltungs-Tool für Cruxsoft.',
    subProjects: [],
    clients: [],
    thumbnail: 'cstconnect',
    roleInTheProject: 'Entwickler',
    achievements: CST_CONNECT_ACHIEVEMENTS_DE,
  },
  {
    name: 'architecture work management',
    description: 'Digitalisierung der Arbeitsprozesse eines Architekturbüros.',
    subProjects: [],
    clients: [],
    thumbnail: 'architecture',
    roleInTheProject: 'Entwickler',
    achievements: ARCHITECTURE_ACHIEVEMENTS_DE,
  },
  {
    name: 'Architect Personal Portfolio',
    description: 'Persönliche Website eines Architekten.',
    subProjects: [],
    clients: [],
    thumbnail: 'architectPortfolio',
    roleInTheProject: 'Entwickler des gesamten Projekts',
    achievements: PORTFOLIO_ACHIEVEMENTS_DE,
  },
];

export const PROJECTS_NL: ProjectType[] = [
  {
    name: 'Personal Portfolio',
    description: 'Een vitrine van mijn werk.',
    subProjects: [],
    clients: [],
    thumbnail: 'portfolio',
    roleInTheProject: 'Ontwikkelaar van het volledige project',
    achievements: PORTFOLIO_ACHIEVEMENTS_NL,
  },
  {
    name: 'wita',
    description:
      '“Working in the Art”, een platform waarop kunstenaars kunnen solliciteren en een certificaat kunnen behalen.',
    subProjects: ['artist', 'backoffice', 'commission'],
    clients: [],
    thumbnail: 'wita',
    roleInTheProject: 'Lead frontend (Angular met Spring Boot)',
    achievements: WITA_ACHIEVEMENTS_NL,
  },
  {
    name: 'PAM',
    description:
      'Planning Accounting Metrics, een planningsinstrument ontwikkeld voor Siemens.',
    subProjects: [],
    clients: [],
    thumbnail: 'pam',
    roleInTheProject: 'Frontendontwikkelaar (Angular)',
    achievements: IMBUS_ACHIEVEMENTS_NL,
  },
  {
    name: 'TestBench',
    description:
      'Geavanceerd hulpmiddel voor testorganisatie en -documentatie.',
    subProjects: ['web itorx', 'web testbench'],
    clients: [],
    thumbnail: 'testbench',
    roleInTheProject: 'Fullstackontwikkelaar (Java/Angular)',
    achievements: IMBUS_ACHIEVEMENTS_NL,
  },
  {
    name: 'ihrm',
    description: 'Intern hulpmiddel voor hr-beheer bij imbus.',
    subProjects: [],
    clients: [],
    thumbnail: 'ihrm',
    roleInTheProject: 'Ontwikkelaar',
    achievements: IMBUS_ACHIEVEMENTS_NL,
  },
  {
    name: 'cst connect',
    description: 'Consultantbeheertool voor Cruxsoft.',
    subProjects: [],
    clients: [],
    thumbnail: 'cstconnect',
    roleInTheProject: 'Ontwikkelaar',
    achievements: CST_CONNECT_ACHIEVEMENTS_NL,
  },
  {
    name: 'architecture work management',
    description: 'Digitalisering van de werkprocessen van een architectenbureau.',
    subProjects: [],
    clients: [],
    thumbnail: 'architecture',
    roleInTheProject: 'Ontwikkelaar',
    achievements: ARCHITECTURE_ACHIEVEMENTS_NL,
  },
  {
    name: 'Architect Personal Portfolio',
    description: 'Persoonlijke website voor een architect.',
    subProjects: [],
    clients: [],
    thumbnail: 'architectPortfolio',
    roleInTheProject: 'Ontwikkelaar van het volledige project',
    achievements: PORTFOLIO_ACHIEVEMENTS_NL,
  },
];

export const PROJECTS_AR: ProjectType[] = [
  {
    name: 'Personal Portfolio',
    description: 'منصة تعرض أعمالي.',
    subProjects: [],
    clients: [],
    thumbnail: 'portfolio',
    roleInTheProject: 'مطور المشروع بالكامل',
    achievements: PORTFOLIO_ACHIEVEMENTS_AR,
  },
  {
    name: 'wita',
    description:
      'منصة "Working in the Art" تتيح للفنانين التقدم والحصول على شهادة.',
    subProjects: ['artist', 'backoffice', 'commission'],
    clients: [],
    thumbnail: 'wita',
    roleInTheProject: 'قيادة تطوير الواجهة الأمامية (Angular مع Spring Boot)',
    achievements: WITA_ACHIEVEMENTS_AR,
  },
  {
    name: 'PAM',
    description:
      'أداة تخطيط العمل Planning Accounting Metrics المطورة لشركة Siemens.',
    subProjects: [],
    clients: [],
    thumbnail: 'pam',
    roleInTheProject: 'مطور واجهة أمامية (Angular)',
    achievements: IMBUS_ACHIEVEMENTS_AR,
  },
  {
    name: 'TestBench',
    description: 'أداة متقدمة لتنظيم الاختبارات وتوثيقها.',
    subProjects: ['web itorx', 'web testbench'],
    clients: [],
    thumbnail: 'testbench',
    roleInTheProject: 'مطور متكامل (Java/Angular)',
    achievements: IMBUS_ACHIEVEMENTS_AR,
  },
  {
    name: 'ihrm',
    description: 'أداة داخلية لإدارة الموارد البشرية لدى Imbus.',
    subProjects: [],
    clients: [],
    thumbnail: 'ihrm',
    roleInTheProject: 'مطور',
    achievements: IMBUS_ACHIEVEMENTS_AR,
  },
  {
    name: 'cst connect',
    description: 'أداة لإدارة الاستشاريين لدى Cruxsoft.',
    subProjects: [],
    clients: [],
    thumbnail: 'cstconnect',
    roleInTheProject: 'مطور',
    achievements: CST_CONNECT_ACHIEVEMENTS_AR,
  },
  {
    name: 'architecture work management',
    description: 'رقمنة سير العمل لمكتب هندسي.',
    subProjects: [],
    clients: [],
    thumbnail: 'architecture',
    roleInTheProject: 'مطور',
    achievements: ARCHITECTURE_ACHIEVEMENTS_AR,
  },
  {
    name: 'Architect Personal Portfolio',
    description: 'موقع شخصي لمهندس معماري.',
    subProjects: [],
    clients: [],
    thumbnail: 'architectPortfolio',
    roleInTheProject: 'مطور المشروع بالكامل',
    achievements: PORTFOLIO_ACHIEVEMENTS_AR,
  },
];

const PROJECTS_BY_LANGUAGE = {
  en: PROJECTS_EN,
  fr: PROJECTS_FR,
  de: PROJECTS_DE,
  nl: PROJECTS_NL,
  ar: PROJECTS_AR,
} as const;

export type ProjectLanguage = keyof typeof PROJECTS_BY_LANGUAGE;

export const getProjectsByLanguage = (language: string): ProjectType[] => {
  if (
    language &&
    Object.prototype.hasOwnProperty.call(PROJECTS_BY_LANGUAGE, language)
  ) {
    return PROJECTS_BY_LANGUAGE[language as ProjectLanguage];
  }

  return PROJECTS_EN;
};

export const PROJECTS = PROJECTS_EN;
