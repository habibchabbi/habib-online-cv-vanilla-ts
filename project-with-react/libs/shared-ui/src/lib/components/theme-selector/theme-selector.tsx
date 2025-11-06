'use client';

import { useEffect, useState } from 'react';
import { ThemeOption } from '@libs/types';

export interface ThemeSelectorProps {
  themes: ThemeOption[];
  selected: ThemeOption;
  onThemeSelect?: (theme: ThemeOption) => void;
}

export function ThemeSelector({
  themes,
  selected,
  onThemeSelect,
}: ThemeSelectorProps) {
  const [current, setCurrent] = useState<ThemeOption>(selected);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCurrent(selected);
  }, [selected]);

  const others = themes.filter((t) => t.theme !== current.theme);

  const selectTheme = (theme: ThemeOption) => {
    setCurrent(theme);
    setOpen(false);
    onThemeSelect?.(theme);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded-full border p-0.5 transition-colors duration-200 focus:outline-none theme-border theme-card"
      >
        <img
          src={current.icon}
          alt={`${current.theme} icon`}
          className="h-6 w-6 rounded-full"
        />
      </button>
      {open && (
        <ul className="absolute z-10 mt-2 w-10 rounded border p-1 shadow theme-border theme-card">
          {others.map((theme) => (
            <li key={theme.theme}>
              <button
                onClick={() => selectTheme(theme)}
                className="block focus:outline-none"
              >
                <img
                  src={theme.icon}
                  alt={`${theme.theme} icon`}
                  className="h-6 w-6"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ThemeSelector;

