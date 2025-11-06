import { fireEvent, render, screen } from '@testing-library/react';

import LanguageSelector, {
  type LanguageOption,
} from './language-selector';

describe('LanguageSelector', () => {
  const LANGUAGES: LanguageOption[] = [
    { code: 'en', name: 'English', flag: '/flags/gb.svg' },
    { code: 'de', name: 'German', flag: '/flags/de.svg' },
    { code: 'fr', name: 'French', flag: '/flags/fr.svg' },
  ];

  it('emits and switches flag when a different one is selected', () => {
    const handleSelect = jest.fn();
    render(
      <LanguageSelector
        languages={LANGUAGES}
        selected={LANGUAGES[0]}
        onLanguageSelect={handleSelect}
      />
    );

    fireEvent.click(screen.getByAltText('English flag'));
    fireEvent.click(screen.getByAltText('German flag'));

    expect(handleSelect).toHaveBeenCalledWith(LANGUAGES[1]);
    expect(screen.getByAltText('German flag')).toBeTruthy();
  });
});
