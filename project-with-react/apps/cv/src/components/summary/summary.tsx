"use client";

import { Photo } from '@libs/shared-ui';
import Candos from '../candos/candos';

export interface SummaryProps {
  quote: string;
  role: string;
  candos: string[];
  showCandos: boolean;
}

export function Summary({ quote, role, candos, showCandos }: SummaryProps) {
  return (
    <div className="m-0 rounded-lg p-3">
      <main className="mx-5 flex gap-5 rounded-xl border-t-2 px-3 opacity-95 transition-opacity
      duration-300 hover:opacity-100 max-sm:flex-col theme-border theme-card theme-card-hover">
        <aside className="mt-3 w-[18%] max-2xl:w-[22%] max-lg:w-[25%] max-sm:mt-0 max-sm:w-full">
          <Photo />
          <p className="w-[calc(100%+0.35rem)] font-['Raleway'] font-bold uppercase tracking-[0.25rem] text-[0.725em] leading-[1.75] theme-text-accent">
            {role}
          </p>
        </aside>

        <div
          className={
            showCandos
              ? 'w-[45%] max-2xl:w-[40%] max-sm:w-full pt-8'
              : 'w-[85%] max-2xl:w-[80%] max-sm:w-full pt-8'
          }
          data-inviewport="true"
        >
          <h2
            className="w-[calc(100%+0.05rem)] pt-8 font-['Anton'] font-normal uppercase tracking-[0.05rem] text-[2em] leading-[1.25] fade-in-place theme-text-primary"
            style={{ animationDelay: '0.2s' }}
          >
            {quote}
          </h2>
        </div>

        {showCandos ? (
          <div className="flex-1 pt-8 max-sm:w-full" data-inviewport="true">
            <Candos thingsICanDo={candos} />
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default Summary;
