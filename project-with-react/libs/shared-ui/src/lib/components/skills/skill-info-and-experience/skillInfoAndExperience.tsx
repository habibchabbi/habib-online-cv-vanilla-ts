"use client";

export interface TooltipProps {
  name: string;
  description: string;
  yearsOfExperience: number;
}

export function SkillInfoAndExperience({ name, description, yearsOfExperience }: TooltipProps) {
  return (
    <div
    >
      <strong>{name}</strong>
      <div>{description}</div>
      <div>{yearsOfExperience} yrs of experience</div>
    </div>
  );
}

export default SkillInfoAndExperience;
