'use client';

import './styles/global.css';
import './styles/base.css';
import './styles/animations.css';
import { useCallback, useEffect, useState } from 'react';
import { Toolbar } from '@libs/shared-ui';
import {
  ActiveLinkContext,
  DEFAULT_LANGUAGE,
  TranslationProvider,
  THEME_OPTIONS
} from '@libs/shared';
import { LANGUAGE_OPTIONS } from '@libs/data';
import { LanguageOption, ThemeOption } from '@libs/types';

/*
TODO: verify the use of the metadata, otherwise delete it
export const metadata = {
  title: 'Habib Ahmad – Portfolio',
  description: 'Personal website showcasing the projects and skills of Habib Ahmad.',
}
*/

const navLinks = [
  { label: 'About', link: '#about', translationKey: 'navigation.about' },
  { label: 'Softwares', link: '#softwares', translationKey: 'navigation.softwares' },
  {
    label: 'Professional Experience',
    link: '#professionalExperiences',
    translationKey: 'navigation.professionalExperiences',
  },
  { label: 'Projects', link: '#projects', translationKey: 'navigation.projects' },
  { label: 'Education', link: '#educations', translationKey: 'navigation.education' },
  { label: 'Skills', link: '#skills', translationKey: 'navigation.skills' },
  { label: 'Certificates', link: '#certificates', translationKey: 'navigation.certificates' },
  { label: 'Languages', link: '#languages', translationKey: 'navigation.languages' },
  // { label: 'Contact', link: '#contact' },

];

const LANGUAGE_STORAGE_KEY = 'portfolio-preferred-language';
const THEME_STORAGE_KEY = 'portfolio-preferred-theme';

const getLanguageOptionByCode = (
  code: string | null | undefined,
): LanguageOption => {
  if (!code) {
    return LANGUAGE_OPTIONS[0];
  }

  const normalizedCode = code.toLowerCase();

  return (
    LANGUAGE_OPTIONS.find((option) => option.code === normalizedCode) ??
    LANGUAGE_OPTIONS.find((option) =>
      normalizedCode.startsWith(`${option.code}-`),
    ) ??
    LANGUAGE_OPTIONS[0]
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeLink, setActiveLink] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<LanguageOption>(() =>
    getLanguageOptionByCode(DEFAULT_LANGUAGE),
  );
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>(
    THEME_OPTIONS[0],
  );

  const applyThemeSelection = useCallback(
    (theme: ThemeOption, persist = true) => {
      setSelectedTheme(theme);

      if (persist && typeof window !== 'undefined') {
        window.localStorage.setItem(THEME_STORAGE_KEY, theme.theme);
      }
    },
    [],
  );

  const applyLanguageSelection = useCallback(
    (languageCode: string, persist = true) => {
      const language = getLanguageOptionByCode(languageCode);

      setSelectedLanguage(language);

      if (persist && typeof window !== 'undefined') {
        window.localStorage.setItem(
          LANGUAGE_STORAGE_KEY,
          language.code,
        );
      }
    },
    [],
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (storedTheme) {
      const themeOption = THEME_OPTIONS.find(
        (theme) => theme.theme === storedTheme,
      );

      if (themeOption) {
        applyThemeSelection(themeOption, false);
      }
    }
  }, [applyThemeSelection]);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.documentElement.setAttribute(
      'data-theme',
      selectedTheme.theme,
    );
  }, [selectedTheme]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedLanguageCode = window.localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    );

    if (storedLanguageCode) {
      applyLanguageSelection(storedLanguageCode, false);
    }
  }, [applyLanguageSelection]);

  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).IntersectionObserver) {
      return;
    }

    const sections: HTMLElement[] = [];

    navLinks.forEach(({ link }) => {
      if (link.startsWith('#')) {
        const section = document.querySelector(link);
        if (section instanceof HTMLElement) {
          sections.push(section);
        }
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              setActiveLink(`#${id}`);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLanguageSelect = (language: LanguageOption) => {
    applyLanguageSelection(language.code);
  };

  return (
    <html lang={selectedLanguage.code} data-theme={selectedTheme.theme}>
      <body className="pt-16">
        <TranslationProvider
          language={selectedLanguage.code}
          onLanguageChange={applyLanguageSelection}
        >
          <ActiveLinkContext.Provider value={{ activeLink, setActiveLink }}>
            <div className="fixed top-0 left-0 z-50 w-full theme-surface shadow">
              <Toolbar
                links={navLinks}
                activeLink={activeLink}
                setActiveLink={setActiveLink}
                languages={LANGUAGE_OPTIONS}
                selectedLanguage={selectedLanguage}
                onLanguageSelect={handleLanguageSelect}
                themes={THEME_OPTIONS}
                selectedTheme={selectedTheme}
                onThemeSelection={applyThemeSelection}
              />
            </div>
            {children}
          </ActiveLinkContext.Provider>
        </TranslationProvider>
      </body>
    </html>
  );
}
