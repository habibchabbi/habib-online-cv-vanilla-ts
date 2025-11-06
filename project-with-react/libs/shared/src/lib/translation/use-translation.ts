'use client';

import { useTranslationContext } from './translation-provider';

export const useTranslation = () => {
  const { translate, language, resources, setLanguage } =
    useTranslationContext();

  return {
    t: translate,
    language,
    resources,
    setLanguage,
  } as const;
};
