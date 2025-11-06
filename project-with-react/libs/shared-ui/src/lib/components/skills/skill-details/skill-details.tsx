"use client";

import SkillInfoAndExperience from '../skill-info-and-experience/skillInfoAndExperience';

export interface SkillDetailsProps {
  /**
   * Icon name used to build the image source.
   */
  icon: string;
  /**
   * Display name of the skill.
   */
  name: string;
  /**
   * Short description shown in the tooltip.
   */
  description: string;
  /**
   * Years of experience with the skill.
   */
  yearsOfExperience: number;
  /**
   * Size of the icon to render (in pixels). Defaults to 24.
   */
  size?: number;
}

export function SkillDetails({
  icon,
  name,
  description,
  yearsOfExperience,
  size = 24,
}: SkillDetailsProps) {
  return (
    <div className="flex items-center gap-2">
      <img
        src={`/skill-tools/${icon}.svg`}
        alt={name}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        className="block"
      />
      <SkillInfoAndExperience
        name={name}
        description={description}
        yearsOfExperience={yearsOfExperience}
      />
    </div>
  );
}

export default SkillDetails;

