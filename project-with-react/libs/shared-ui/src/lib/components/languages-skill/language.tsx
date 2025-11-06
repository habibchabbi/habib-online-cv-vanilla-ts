"use client";

import type { LanguageType } from '@libs/types';

export interface LanguageProps {
  language: LanguageType;
}

export function Language({ language }: LanguageProps) {
  const { language: name, proficiency, certificate, flag } = language;
  return (
    <li className="flex items-center">
      <img
        src={flag}
        alt={`${name} flag`}
        className="mr-2 inline-block h-4 w-6"
      />
      <div className="ms-3">
        <span className="font-bold">{name}</span> - {proficiency}
      {certificate ? ` (${certificate})` : ''}
      </div>

    </li>
  );
}

export default Language;
