"use client";

import type { EducationType } from '@libs/types';

export interface EducationProps {
  education: EducationType;
}

export function Education({ education }: EducationProps) {
  const { title, startYear, endYear, diploma, schoolIcon, schoolName } = education;
  return (
    <div className="mb-4 flex flex-col sm:flex-row  items-start gap-4">
      <div className="w-1/6 max-2xl:w-1/6 max-lg:w-1/5 max-sm:w-1/4 max-sm:w-1/3
       p-0 sm:p-1 md:p-2 lg:p-3 xl:p-4 2xl:p-5  ">
        <img
          src={`/school-icons/${schoolIcon}`}
          alt={schoolName}
          className=" w-22 object-contain rounded-lg"
        />
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <h3 className="italic fade-in"
            style={{ animationDelay: `${ 0.20}s` }}
        >
          {schoolName} ({startYear} - {endYear})
        </h3>
        <p className="font-semibold fade-in"
           style={{ animationDelay: `${ 0.40}s` }}
        >{title}</p>

        <p className="fade-in"
           style={{ animationDelay: `${ 0.60}s` }}
        >{diploma}</p>
      </div>
    </div>
  );
}

export default Education;
