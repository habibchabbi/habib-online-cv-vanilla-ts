"use client";

import { SkillTool } from '@libs/shared-ui';
import type { SkillType } from '@libs/types';

export interface SkillsToolMozaiqueProps {
  icons: SkillType[];
}

export function SkillsToolMozaique({ icons }: SkillsToolMozaiqueProps) {
  return (
    <div className="p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 flex flex-wrap justify-center content-center gap-8">
      {icons
        .sort((a, b) => b.level - a.level)
        .map((icon, i) => (
          <div key={i}
               className="flex-initial fade-in"
               style={{ animationDelay: `${i * 0.1}s` }}
          >
            <SkillTool  {...icon} />
          </div>
        ))}
    </div>
  );
}

export default SkillsToolMozaique;
