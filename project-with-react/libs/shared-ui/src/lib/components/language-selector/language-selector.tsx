
'use client';

import { useEffect, useState } from 'react';
import { LanguageOption } from '@libs/types';


export interface LanguageSelectorProps {
  languages: LanguageOption[];
  selected: LanguageOption;
  onLanguageSelect?: (lang: LanguageOption) => void;
}

export function LanguageSelector({
  languages,
  selected,
  onLanguageSelect,
}: LanguageSelectorProps) {
  const [current, setCurrent] = useState<LanguageOption>(selected);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setCurrent(selected);
  }, [selected]);

  const others = languages.filter((l) => l.code !== current.code);

  const selectLanguage = (lang: LanguageOption) => {
    setCurrent(lang);
    setOpen(false);
    onLanguageSelect?.(lang);
  };


  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen((o) => !o)}
        className="rounded-full border p-0.5 transition-colors duration-200 focus:outline-none theme-border theme-card"
      >
        <img
          src={current.flag}
          alt={`${current.name} flag`}
          className="h-4 w-6 rounded-full"
        />
      </button>
      {open && (
        <ul className="absolute z-10 mt-2 w-20 rounded border p-1 shadow theme-border theme-card">
          {others.map((lang) => (
            <li key={lang.code}>
              <button
                onClick={() => selectLanguage(lang)}
                className="block focus:outline-none"
              >
                <img
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  className="h-4 w-6"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;

