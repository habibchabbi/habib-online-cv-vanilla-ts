export * from './lib/components/skills/skills-set/skills-set';
// Use this file to export React client components (e.g. those with 'use client' directive) or other non-server utilities

export { default as Section } from './lib/shared/section/Section';
export { default as Toolbar, type ToolbarProps } from './lib/components/toolbar/Toolbar';
export {
  type ToolbarLink,
  type ToolbarProps as NavbarProps,
} from './lib/components/navbar/navbar';
export { default as NavMenu } from './lib/components/nav-menu/nav-menu';
export { default as Photo } from './lib/bio/bio-and-contact/bio-and-contact';
export { default as Project, type ProjectProps } from './lib/components/project/project';
export {
  default as Education,
  type EducationProps,
} from './lib/components/education/education';
export { default as Skill, type SkillProps } from './lib/components/skills/skill/skill';
export {
  default as Language,
  type LanguageProps,
} from './lib/components/languages-skill/language';
export {
  default as Certificate,
  type CertificateProps,
} from './lib/components/certificate/certificate';
export { default as CanDo } from './lib/shared/cando/cando';

export {
  default as ProfessionalExperience,
  type ProfessionalExperienceProps,
} from './lib/components/professional-experience/professional-experience';

export { default as Contact } from './lib/contact/loose-contact-links/looseContactLinks';
export { default as ContactMenu } from './lib/contact/contact-menu/contact-menu';

export { default as SkillTool } from './lib/components/skills/skill-tool/skill-tool';
export {
  default as LanguageSelector,
  type LanguageSelectorProps,
} from './lib/components/language-selector/language-selector';
export {
  default as ImageCarousel,
  type ImageCarouselProps,
} from './lib/shared/image-carousel/image-carousel';
export { type CarouselImageWithLabel } from './lib/shared/image-carousel/use-image-carousel';
export {
  default as CircularImageCarousel,
  type CircularImageCarouselProps,
} from './lib/shared/image-carousel/circular-image-carousel';

export {
  default as ThemeSelector,
  type ThemeSelectorProps,
} from './lib/components/theme-selector/theme-selector';
