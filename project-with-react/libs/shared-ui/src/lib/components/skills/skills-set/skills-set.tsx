"use client";

import type { SkillType } from '@libs/types';
import Skill from '../skill/skill';

export interface SkillProps {
  skills: SkillType[];
}

export function SkillsSet({ skills }: SkillProps) {
  if (skills.length === 0) {
    return null;
  }

  const className = skills[0].class;

  return (
    <li>
      <span className="h3 me-2  font-bold  ">{className + ' :'} </span>
        {skills.map((skill, i) => (
          <span   className="fade-in"    style={{ animationDelay: `${i * 0.15}s` }}
          >
          <Skill key={skill.name} skill={skill} />
    </span>
        ))}
    </li>
  );
}

export default SkillsSet;
