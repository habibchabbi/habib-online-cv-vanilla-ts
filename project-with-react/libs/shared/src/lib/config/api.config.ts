import { AppEnvironment } from '@libs/types';

const generalLocalApiConfig = "http://localhost:8080/api";
const generalProductionApiConfig = "https://online-cv.com/api";

export function getBasesApiUrl(environment: AppEnvironment) {
  return environment === 'local' ? generalLocalApiConfig : generalProductionApiConfig;
}

export const clientsApiConfig = {
  loadClients: '/clients'
};

export const projectsApiConfig = {
  loadProjects: '/projects'
};

export const professionalExperiencesApiConfig = {
  loadProfessionalExperiences: '/professional-experiences'
};

export const architectsApiConfig = {
  loadArchitects: '/architects'
};

export const skillsApiConfig = {
  loadSkills: '/skills'
};

export const softwaresApiConfig = {
  loadSoftwares: '/softwares'
};

export const certificatesApiConfig = {
  loadCertificates: '/certificates'
};

export const educationsApiConfig = {
  loadEducations: '/educations'
};

export const contactApiConfig = {
  loadContact: '/contact'
};

export const authApiConfig = {
  login: '/auth/login',
  googleLogin: '/auth/google'
};
