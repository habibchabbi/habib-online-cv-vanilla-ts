"use client";

import { EMPLOYER_ICONS } from '@libs/data';
import { getImageSrcFromGroup, useTranslation } from '@libs/shared';
import type { ProfessionalExperienceType } from '@libs/types';

export interface ProfessionalExperienceProps {
  professionalExperience: ProfessionalExperienceType;
}

export function ProfessionalExperience({ professionalExperience }: ProfessionalExperienceProps) {
  const { t } = useTranslation();
  const {
    post,
    employer,
    employerDescription,
    startDate,
    endDate,
    employerIcon,
    employerLocation,
    projectsList,
  } = professionalExperience;
/*
  //const iconSrc = EMPLOYER_ICONS[employerIcon];
const iconSrc = EMPLOYER_ICONS[employerIcon];
  const iconUrl =
    typeof iconSrc === 'string' ? iconSrc : iconSrc?.src;

 */
const iconUrl = getImageSrcFromGroup(EMPLOYER_ICONS, employerIcon);
  return (
    <div className="mb-4 flex flex-col  sm:flex-row  items-start gap-4">
      <div className=" w-1/6 max-2xl:w-1/6 max-lg:w-1/5 max-sm:1/4 mt-3 max-sm:mt-0 p-0 sm:p-1 md:p-2 lg:p-3 xl:p-4 2xl:p-5 ">
        <img
          src={iconUrl}
          alt={employer}
          className=" w-22 object-contain rounded-lg"
        />
      </div>

      <div className="flex-1 flex-col gap-1">
        <h3 className="font-semibold fade-in"
            style={{ animationDelay: `${ 0.20}s` }}
        >{post}</h3>
        <p className="italic fade-in"
           style={{ animationDelay: `${ 0.40}s` }}
        >
          {employer} - {employerLocation} ({startDate} - {endDate})
        </p>
        <p className="fade-in"
        style={{ animationDelay: `${ 0.40}s` }}
        >{employerDescription}</p>
        {projectsList.length > 0 && (
          <div className="flex fade-in"
          style={{ animationDelay: `${ 0.60}s` }}
          >
          <span>
            {t('professionalExperiences.realizedProjects', 'Realized Projects :')}
          </span>
              <ul className="mt-1 flex items-center list-disc list-inside">
                {projectsList.map((project, i) => (
                  <span className="font-bold fade-in"
                  style={{ animationDelay: `${i* 0.40}s` }}
                  >{project.name + ' ,'}</span>
                ))}
              </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfessionalExperience;
