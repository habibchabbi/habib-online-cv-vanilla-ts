'use client';

import { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';

import {
  DEFAULT_LANGUAGE,
  TranslationDictionary,
  translationResources,
  type SupportedLanguage,
  isSupportedLanguage,
} from './translations';

interface TranslationContextValue {
  language: SupportedLanguage;
  translate: (key: string, fallback?: string) => string;
  resources: TranslationDictionary;
  setLanguage: (code: string) => void;
}

const TranslationContext = createContext<TranslationContextValue>({
  language: DEFAULT_LANGUAGE,
  translate: (key: string, fallback?: string) => fallback ?? key,
  resources: translationResources[DEFAULT_LANGUAGE],
  setLanguage: () => undefined,
});

const resolveTranslation = (
  dictionary: TranslationDictionary,
  key: string,
): string | undefined => {
  const segments = key.split('.');
  let current: TranslationDictionary | string | undefined = dictionary;

  for (const segment of segments) {
    if (typeof current === 'string') {
      return current;
    }

    current = current?.[segment];

    if (current === undefined) {
      return undefined;
    }
  }

  return typeof current === 'string' ? current : undefined;
};

interface TranslationProviderProps {
  language: string;
  children: ReactNode;
  onLanguageChange?: (language: string) => void;
}

export const TranslationProvider = ({
  language,
  children,
  onLanguageChange,
}: TranslationProviderProps) => {
  const value = useMemo(() => {
    const resolvedLanguage: SupportedLanguage = isSupportedLanguage(language)
      ? language
      : DEFAULT_LANGUAGE;

    const activeResources = translationResources[resolvedLanguage];

    return {
      language: resolvedLanguage,
      translate: (key: string, fallback?: string) => {
        const translated = resolveTranslation(activeResources, key);

        if (translated) {
          return translated;
        }

        const fallbackTranslation = resolveTranslation(
          translationResources[DEFAULT_LANGUAGE],
          key,
        );

        if (fallbackTranslation) {
          return fallbackTranslation;
        }

        return fallback ?? key;
      },
      resources: activeResources,
      setLanguage: onLanguageChange ?? (() => undefined),
    } satisfies TranslationContextValue;
  }, [language, onLanguageChange]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => useContext(TranslationContext);
