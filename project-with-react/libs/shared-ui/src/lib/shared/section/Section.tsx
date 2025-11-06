'use client';

import { useTranslation } from '@libs/shared';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  classes?: string;
  isActive?: boolean;
  isInViewPort: boolean;
}
export function Section({
  id,
  title,
  children,
  classes,
  isActive,
  isInViewPort,
}: SectionProps) {
  const { t } = useTranslation();

  return (
    <section
      id={id}
      className={`pt-3 ${classes ?? ''} ${isActive ? '' : ''}`}
      data-inviewport={isInViewPort ? 'true' : undefined}
    >
      {title && (
        <h1 className="mb-4 text-center text-2xl font-semibold theme-text-accent">
                    {t(title, title)}

        </h1>
      )}
      {children}
    </section>
  );
}

export default Section;
