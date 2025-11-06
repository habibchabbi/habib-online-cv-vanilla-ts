"use client";

import { useEffect, useState } from 'react';
import { SkillInfoAndExperience } from '../skill-info-and-experience/skillInfoAndExperience';
// eslint-disable-next-line @nx/enforce-module-boundaries
import type { SkillType } from '@libs/types';

export function SkillTool({
  icon,
  level = 0,
  name,
  description,
  yearsOfExperience,
}: SkillType) {
  const [mediaSize, setMediaSize] = useState<
    'verySmall' | 'small' | 'medium' | 'large' | 'huge'
  >('huge');

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 480) setMediaSize('verySmall');
      else if (width < 768) setMediaSize('small');
      else if (width < 1024) setMediaSize('medium');
      else if (width < 1280) setMediaSize('large');
      else setMediaSize('huge');
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const scale =
    mediaSize === 'huge'
      ? 1
      : mediaSize === 'large'
      ? 0.9
      : mediaSize === 'medium'
      ? 0.75
      : mediaSize === 'small'
      ? 0.6
      : 0.45;
  const size = scale * (40 + level * 10);
  return (
    <div className="group relative inline-block pointer-events-auto p-2 hover:bg-green-100">
      <img
        src={`/skill-tools/${icon}.svg`}
        alt={name}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        className="block transition-transform duration-200 ease-in-out group-hover:scale-[1.15]"
      />
      <div
        className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2 rounded-lg bg-black/80 px-2 py-1 text-xs text-white opacity-0 pointer-events-none transition-opacity duration-200 ease-in-out group-hover:opacity-100 z-10 whitespace-nowrap"
      >
      <SkillInfoAndExperience
        name={name}
        description={description}
        yearsOfExperience={yearsOfExperience}
      />
      </div>
    </div>
  );
}

export default SkillTool;
