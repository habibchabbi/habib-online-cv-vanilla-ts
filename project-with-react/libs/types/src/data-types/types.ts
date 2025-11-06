// Use this file to export React client components (e.g. those with 'use client' directive) or other non-server utilities
// eslint-disable-next-line @nx/enforce-module-boundaries
export interface EducationType {
  title: string;
  startYear: number;
  endYear: number;
  diploma: string;
  schoolIcon: string;
  schoolName: string;
}

export interface SkillType {
  name: string;
  skill: string;
  icon: string;
  level: number;
  expertiseLevel: string;
  description: string;
  yearsOfExperience: number;
  isTechnical?: boolean;
  class: string;
  className: string;
}

export interface LanguageType {
  language: string;
  proficiency: string;
  flag: string; // path to flag image
  certificate?: string;
}

export interface CertificateType {
  name: string;
  issueDate: string;
  issuingOrganization: string;
  description: string;
  credentialUrl?: string;
}

export interface ProjectType {
  name: string;
  description: string;
  startDate?: number;
  endDate?: number;
  technologies?: string[];
  technicalEnvironment?: string;
  subProjects: string[];
  clients: Client[];
  thumbnail: string;
  roleInTheProject: string;
  achievements: Achievement[];
}

export interface Achievement {
  description: string;
  importance: number;
  type: string;
}

export interface Client {
  name: string;
  description: string;
  icon: string
}

export interface ProfessionalExperienceType {
  post: string;
  startDate: number;
  endDate: number;
  employer: string;
  employerDescription: string;
  projectsList: ProjectType[];
  employerIcon: string;
  employerLocation: string;
}

export interface ContactType {
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  portfolio: string;
  address: string;
  addressMap: string;

}

export interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

export interface ThemeOption {
  theme: string;
  icon: string;
}
