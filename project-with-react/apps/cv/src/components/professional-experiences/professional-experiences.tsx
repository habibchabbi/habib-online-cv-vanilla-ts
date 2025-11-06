"use client";

import { useEffect, useMemo, useState } from 'react';

import {
  getProfessionalExperiencesByLanguage,
  ProfessionalExperiencesService,
  type ProfessionalExperience as ProfessionalExperienceData,
} from '@libs/data';
import { useTranslation } from '@libs/shared';
import { ProfessionalExperience } from '@libs/shared-ui';

export function ProfessionalExperiences() {
  const { language } = useTranslation();

  const [professionalExperiences, setProfessionalExperiences] = useState<ProfessionalExperienceData[]>([]);

  const professionalExperiencesService = useMemo(
    () => new ProfessionalExperiencesService(),
    [],
  );

  useEffect(() => {
    let isSubscribed = true;

    professionalExperiencesService
      .getProfessionalExperiences(undefined, true, true, language)
      .then((data) => {
        if (isSubscribed) {
          setProfessionalExperiences(data);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setProfessionalExperiences(
            getProfessionalExperiencesByLanguage(language ?? ''),
          );
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [language, professionalExperiencesService]);

  return (
    <div>
      {professionalExperiences.map((professionalExperience, i) => (
        <div
          key={professionalExperience.employer}
          className="fade-in rounded-lg p-2 transition-colors duration-300 theme-card theme-card-hover"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <ProfessionalExperience
            key={professionalExperience.employer}
            professionalExperience={professionalExperience}
          />
        </div>
      ))}
    </div>
  );
}

export default ProfessionalExperiences;
