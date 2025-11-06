"use client";

import type { SkillType } from '@libs/types';
import SkillDetails from '../skill-details/skill-details';

export interface SkillProps {
  skill: SkillType;
}

export function Skill({ skill }: SkillProps) {
  const { name, yearsOfExperience, class: description } = skill;
  const icon = name.toLowerCase().replace(/\s+/g, '-');
  return (
    <span className="group relative inline-block">
      <span className="me-3">{name}</span>
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2 rounded-lg bg-black/80 px-2 py-1 text-xs text-white opacity-0 pointer-events-none transition-opacity duration-200 ease-in-out group-hover:opacity-100 z-10 whitespace-nowrap"
      >
        <SkillDetails
          icon={icon}
          name={name}
          description={description}
          yearsOfExperience={yearsOfExperience}
        />
      </div>
    </span>
  );
}

export default Skill;
