"use client";

import dynamic from 'next/dynamic';
import { useEffect, useMemo, useState } from 'react';

import BackgroundSlideshow from '../components/background-slideshow/background-slideshow';
import Summary from '../components/summary/summary';

import {
  bgImagesList,
  CONTACT,
  ContactService,
  quote,
  role,
  skillTools,
  SoftwaresService,
  getThingsICanDoByLanguage,
} from '@libs/data';
import {  useActiveLink, useIsInViewport, useTranslation } from '@libs/shared';
import { Contact, Section } from '@libs/shared-ui';
import CandosCarousel from '../components/candos-carousel/candos-carousel';

const About = dynamic(() => import('../components/about/about'));
const SkillsToolMozaique = dynamic(() => import('../components/skills-tools-mozaiq/skills-tools-mozaiq'));
const ProfessionalExperiences = dynamic(() => import('../components/professional-experiences/professional-experiences'));
const Projects = dynamic(() => import('../components/projects/projects'));
const Educations = dynamic(() => import('../components/educations/educations'));
const Skills = dynamic(() => import('../components/skills/skills'));
const Certificates = dynamic(() => import('../components/certificates/certificates'));
const Languages = dynamic(() => import('../components/languages/languages'));

const sectionBaseClasses = [
  ' sm:mx-2 sm:my-3 md:mx-3 md:my-5 lg:mx-3 lg:my-8   mx-5 my-10 rounded-lg p-3',
  'opacity-95 transition-opacity duration-300 hover:opacity-100',
  'border-t-2 theme-border theme-surface theme-surface-hover hover:cursor-pointer',
].join(' ');

type DeferredRenderOptions = {
  immediate?: boolean;
};

const useDeferredRender = (
  shouldRender: boolean,
  { immediate = false }: DeferredRenderOptions = {}
) => {
  const [isReady, setIsReady] = useState(immediate);

  useEffect(() => {
    if (shouldRender) {
      setIsReady(true);
    }
  }, [shouldRender]);

  return isReady;
};

export default function Index() {
  const { activeLink } = useActiveLink();
  const { language } = useTranslation();

  const [contact, setContact] = useState(CONTACT);
  const [softwares, setSoftwares] = useState(skillTools);

  const contactService = useMemo(
    () => new ContactService(),
    [],
  );

  const softwaresService = useMemo(
    () => new SoftwaresService(),
    [],
  );

  const thingsICanDo = useMemo(
    () => getThingsICanDoByLanguage(language),
    [language],
  );

  useEffect(() => {
    let isSubscribed = true;

    contactService
      .getContact(undefined, true, true)
      .then((data) => {
        if (isSubscribed) {
          setContact(data);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setContact(CONTACT);
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [contactService]);

  useEffect(() => {
    let isSubscribed = true;

    softwaresService
      .getSoftwares(undefined, true, true)
      .then((data) => {
        if (isSubscribed) {
          setSoftwares(data);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setSoftwares(skillTools);
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [softwaresService]);

  const aboutInViewPort = useIsInViewport('about');
  const softwaresInViewPort = useIsInViewport('softwares');
  const professionalExperiencesInViewPort = useIsInViewport('professionalExperiences');
  const projectsInViewPort = useIsInViewport('projects');
  const educationsInViewPort = useIsInViewport('educations');
  const skillsInViewPort = useIsInViewport('skills');
  const certificatesInViewPort = useIsInViewport('certificates');
  const languagesInViewPort = useIsInViewport('languages');
  const contactInViewPort = useIsInViewport('contact');

  const aboutShouldRender = useDeferredRender(
    aboutInViewPort || activeLink === '#about',
    { immediate: true }
  );
  const softwaresShouldRender = useDeferredRender(
    softwaresInViewPort || activeLink === '#softwares'
  );
  const professionalExperiencesShouldRender = useDeferredRender(
    professionalExperiencesInViewPort ||
      activeLink === '#professionalExperiences'
  );
  const projectsShouldRender = useDeferredRender(
    projectsInViewPort || activeLink === '#projects'
  );
  const educationsShouldRender = useDeferredRender(
    educationsInViewPort || activeLink === '#educations'
  );
  const skillsShouldRender = useDeferredRender(
    skillsInViewPort || activeLink === '#skills'
  );
  const certificatesShouldRender = useDeferredRender(
    certificatesInViewPort || activeLink === '#certificates'
  );
  const languagesShouldRender = useDeferredRender(
    languagesInViewPort || activeLink === '#languages'
  );
  const contactShouldRender = useDeferredRender(
    contactInViewPort || activeLink === '#contact'
  );

  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundSlideshow
        images={bgImagesList}
      />
      <div className="relative z-10">
        <Summary
          showCandos={false}
          quote={quote}
          role={role}
          candos={thingsICanDo}
        />
        <div className="sm:px-1 md:px-2 lg:px-3 xl:px-4 2xl:px-5 3xl:px-8 ">

            <Section
              id="about"
              title={'navigation.whatICanDo'}
              classes={`${sectionBaseClasses}`}
              isActive={false}
              isInViewPort={aboutInViewPort}
            >
              { <CandosCarousel /> }
            </Section>

          <Section
            id="about"
            title={'navigation.about'}
            classes={`${sectionBaseClasses}`}
            isActive={activeLink === '#about'}
            isInViewPort={aboutInViewPort}
          >
            {aboutShouldRender ? <About /> : null}
          </Section>

          <Section
            id="softwares"
            title={'navigation.softwares'}
            classes={`${sectionBaseClasses}`}
            isActive={activeLink === '#softwares'}
            isInViewPort={softwaresInViewPort}
          >
            {softwaresShouldRender ? (
              <SkillsToolMozaique icons={softwares} />
            ) : null}
          </Section>

          <Section
            id="professionalExperiences"
            title={'navigation.professionalExperiences'}
            classes={` ${sectionBaseClasses}`}
            isActive={activeLink === '#professionalExperiences'}
            isInViewPort={professionalExperiencesInViewPort}
          >
            {professionalExperiencesShouldRender ? (
              <ProfessionalExperiences />
            ) : null}
          </Section>

          <Section
            id="projects"
            title={'navigation.projects'}
            classes={` ${sectionBaseClasses}`}
            isActive={activeLink === '#projects'}
            isInViewPort={projectsInViewPort}
          >
            {projectsShouldRender ? <Projects /> : null}
          </Section>

          <Section
            id="educations"
            title={'navigation.education'}
            classes={` ${sectionBaseClasses}`}
            isActive={activeLink === '#educations'}
            isInViewPort={educationsInViewPort}
          >
            {educationsShouldRender ? <Educations /> : null}
          </Section>

          <Section
            id="skills"
            title={'navigation.skills'}
            classes={`${sectionBaseClasses}`}
            isActive={activeLink === '#skills'}
            isInViewPort={skillsInViewPort}
          >
            {skillsShouldRender ? <Skills /> : null}
          </Section>

          <Section
            id="certificates"
            title={'navigation.certificates'}
            classes={` ${sectionBaseClasses}`}
            isActive={activeLink === '#certificates'}
            isInViewPort={certificatesInViewPort}
          >
            {certificatesShouldRender ? <Certificates /> : null}
          </Section>

          <Section
            id="languages"
            title={'navigation.languages'}
            classes={` ${sectionBaseClasses}`}
            isActive={activeLink === '#languages'}
            isInViewPort={languagesInViewPort}
          >
            {languagesShouldRender ? <Languages /> : null}
          </Section>

          <Section
            id="contact"
            title={'navigation.contact'}
            classes={` ${sectionBaseClasses}`}
            isActive={activeLink === '#contact'}
            isInViewPort={contactInViewPort}
          >
            {contactShouldRender ? <Contact contact={contact} /> : null}
          </Section>
        </div>
      </div>
    </div>
  );
}
