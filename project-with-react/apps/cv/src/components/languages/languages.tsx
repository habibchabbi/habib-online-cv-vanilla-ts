"use client";

import { Language } from '@libs/shared-ui';
import { LANGUAGES } from '@libs/data';

export function Languages() {
  return (
    <ul className="flex flex-wrap gap-4">
      {LANGUAGES.map((lang, i) => (
        <div
          key={lang.language}
          className="fade-in rounded-lg p-2 transition-colors duration-300 theme-card theme-card-hover"
          style={{ animationDelay: `${i * 0.25}s` }}
        >
          <Language key={lang.language} language={lang} />
        </div>
      ))}
    </ul>
  );
}

export default Languages;
