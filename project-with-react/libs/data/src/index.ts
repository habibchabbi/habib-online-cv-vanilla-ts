// Use this file to export React client components (e.g. those with 'use client' directive) or other non-server utilities
export {
    CERTIFICATES,
    CERTIFICATES_DE,
    CERTIFICATES_EN,
    CERTIFICATES_FR,
    getCertificatesByLanguage
} from './lib/static-data/certificates';
export {
    EDUCATIONS,
    EDUCATIONS_DE,
    EDUCATIONS_EN,
    EDUCATIONS_FR,
    getEducationsByLanguage
} from './lib/static-data/educations';
export { LANGUAGES } from './lib/static-data/languages';
export {
    getProfessionalExperiencesByLanguage, PROFESSIONAL_EXPERIENCES,
    PROFESSIONAL_EXPERIENCES_DE,
    PROFESSIONAL_EXPERIENCES_EN,
    PROFESSIONAL_EXPERIENCES_FR
} from './lib/static-data/professional-experiences';
export * from './lib/static-data/projects';
export { EMPLOYER_ICONS, type EmployerIconId } from './lib/public/exports/employer-icons';
export { PROJECT_THUMBNAILS, type ProjectThumbnailId } from './lib/public/exports/project-thumbnails';
//export { PROJECTS } from './lib/projects';
export {
    THINGS_I_CAN_DO,
    THINGS_I_CAN_DO_OBJECTS,
    getThingsICanDoByLanguage,
    getThingsICanDoObjectsByLanguage,
} from './lib/static-data/candos';
export { CONTACT, getContactValue } from './lib/static-data/contact';
export { skills, skillTools } from './lib/static-data/skills';

export * from './lib/services/certificates-service/certificates-http-service';
export * from './lib/services/educations-service/educations-http-service';
export * from './lib/services/projects-service/projects-http-service';
export * from './lib/services/skills-service/skills-http-service';
export * from './lib/services/softwares-service/softwares-http-service';
export * from './lib/services/contact-service/contact-http-service';
export * from './lib/services/professional-experiences-service/professional-experiences-http-service';

export { LANGUAGE_OPTIONS } from './lib/static-data/language-options';
export { bgImagesList, quote, role } from './lib/static-data/quote';

