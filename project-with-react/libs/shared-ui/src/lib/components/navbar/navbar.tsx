'use client';

import Link from 'next/link';
import { useTranslation } from '@libs/shared';

export interface ToolbarLink {
  label: string;
  link: string;
  className?: string;
  translationKey?: string;
}

export interface ToolbarProps {
  links: ToolbarLink[];
  activeLink: string;
  setActiveLink: (link: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

export function Navbar({
  links,
  activeLink,
  setActiveLink,
  orientation = 'horizontal',
}: ToolbarProps) {
  const isVertical = orientation === 'vertical';
  const { t } = useTranslation();

  return (
    <nav className={isVertical ? 'flex flex-col space-y-2' : 'flex space-x-2'}>
      {links.map(({ label, link, className, translationKey }) => {
        const translatedLabel = translationKey
          ? t(translationKey, label)
          : label;

        return (
          <Link
            key={link}
            href={link}
            onClick={() => setActiveLink(link)}
            className={`rounded px-1 py-1 transition-colors duration-200 ${
              className ?? 'theme-text-accent hover:opacity-80'
            } ${activeLink === link ? 'border theme-border theme-card' : ''}`}
          >
            {translatedLabel}
          </Link>
        );
      })}
    </nav>
  );
}

export default Navbar;
