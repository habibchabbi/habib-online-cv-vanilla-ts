"use client";

import { useEffect, useMemo, useState } from 'react';

import { SkillsService, skills as fallbackSkills } from '@libs/data';
import { SkillsSet } from '@libs/shared-ui';
import type { SkillType } from '@libs/types';

export function Skills() {
  const [skills, setSkills] = useState<SkillType[]>([]);

  const skillsService = useMemo(
    () => new SkillsService(),
    [],
  );

  useEffect(() => {
    let isSubscribed = true;

    skillsService
      .getSkills(undefined, true, true)
      .then((data) => {
        if (isSubscribed) {
          setSkills(data);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setSkills(fallbackSkills);
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [skillsService]);

  const skillsGroupedByClass = skills.reduce<Record<string, SkillType[]>>(
    (acc, skill) => {
      const className = skill.class;
      if (!acc[className]) {
        acc[className] = [];
      }
      acc[className].push(skill);
      return acc;
    },
    {},
  );
  const classes = Object.keys(skillsGroupedByClass);

  return (
    <ul>
      {classes.map((className, i) => (
        <div
          key={className}
          className=" fade-in mt-3"
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          <SkillsSet key={className} skills={skillsGroupedByClass[className]} />
        </div>
      ))}
    </ul>
  );
}

export default Skills;
