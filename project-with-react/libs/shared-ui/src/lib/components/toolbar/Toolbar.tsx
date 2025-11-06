'use client';

import ContactLinks from '../../contact/contact-links/compact-contact-links';
import ContactMenu from '../../contact/contact-menu/contact-menu';
import { CONTACT } from '@libs/data';
import LanguageSelector from '../language-selector/language-selector';
import ThemeSelector from '../theme-selector/theme-selector';
import { LanguageOption, ThemeOption } from '@libs/types';
import { Navbar, ToolbarProps as NavbarProps } from '../navbar/navbar';
import { NavMenu } from '../nav-menu/nav-menu';

export interface ToolbarProps extends NavbarProps {
  languages: LanguageOption[];
  selectedLanguage: LanguageOption;
  onLanguageSelect?: (lang: LanguageOption) => void;
  themes?: ThemeOption[];
  selectedTheme?: ThemeOption;
  onThemeSelection?: (theme: ThemeOption) => void;
}

export function Toolbar({
  links,
  activeLink,
  setActiveLink,
  languages,
  selectedLanguage,
  onLanguageSelect,
  themes,
  selectedTheme,
  onThemeSelection,
}: ToolbarProps) {
  return (
    <header className="flex items-center justify-between p-4 shadow theme-surface">
      <div className="flex items-center gap-4">
        {themes && selectedTheme ? (
          <div className="">
            <ThemeSelector
              themes={themes}
              selected={selectedTheme}
              onThemeSelect={onThemeSelection}
            />
          </div>
        ) : null}
        <div>
          <LanguageSelector
            languages={languages}
            selected={selectedLanguage}
            onLanguageSelect={onLanguageSelect}
          />
        </div>
      </div>
      <div className="">
        <div className="md:hidden">
          <NavMenu
            links={links}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
        <div className="hidden md:block">
          <Navbar
            links={links}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
          />
        </div>
      </div>

      <div className="lg:hidden">
        <ContactMenu contact={CONTACT} />
      </div>
      <div className="hidden lg:block">
        <ContactLinks contact={CONTACT} />
      </div>

    </header>
  );
}

export default Toolbar;
