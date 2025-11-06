"use client";

import { useEffect, useMemo, useState } from 'react';

import {
  EducationsService,
  getEducationsByLanguage,
  type Education as EducationData,
} from '@libs/data';
import { useTranslation } from '@libs/shared';
import { Education as EducationComponent } from '@libs/shared-ui';

export function Educations() {
  const { language } = useTranslation();
  const [educations, setEducations] = useState<EducationData[]>([]);

  const educationsService = useMemo(
    () => new EducationsService(),
    [],
  );

  useEffect(() => {
    let isSubscribed = true;

    educationsService
      .getEducations(undefined, true, true, language)
      .then((data) => {
        if (isSubscribed) {
          setEducations(data);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setEducations(getEducationsByLanguage(language ?? ''));
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [educationsService, language]);

  return (
    <div>
      {educations.map((education, i) => (
        <div
          key={education.schoolName}
          className="fade-in rounded-lg p-2 transition-colors duration-300 theme-card theme-card-hover"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <EducationComponent
            key={education.title + education.startYear}
            education={education}
          />
        </div>
      ))}
    </div>
  );
}

export default Educations;
