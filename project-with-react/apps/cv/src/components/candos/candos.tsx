"use client";

import { CanDo } from '@libs/shared-ui';

export interface CandosProps {
  thingsICanDo: string[];
}

export function Candos({ thingsICanDo }: CandosProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {thingsICanDo.map((thing, i) => (
        <div
          key={i}
          className="flex-initial fade-in"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          <CanDo thing={thing} />
        </div>
      ))}
    </div>
  );
}

export default Candos;
