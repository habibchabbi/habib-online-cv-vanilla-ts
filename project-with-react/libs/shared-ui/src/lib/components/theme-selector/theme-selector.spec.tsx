import { fireEvent, render, screen } from '@testing-library/react';

import ThemeSelector from './theme-selector';
import { ThemeOption } from '@libs/types';

describe('ThemeSelector', () => {
  const THEMES: ThemeOption[] = [
    { theme: 'bright', icon: '/themes/bright.svg' },
    { theme: 'dark', icon: '/themes/dark.svg' },
    { theme: 'pink', icon: '/themes/pink.svg' },
  ];

  it('emits and switches icon when a different theme is selected', () => {
    const handleSelect = jest.fn();
    render(
      <ThemeSelector
        themes={THEMES}
        selected={THEMES[0]}
        onThemeSelect={handleSelect}
      />
    );

    fireEvent.click(screen.getByAltText('bright icon'));
    fireEvent.click(screen.getByAltText('dark icon'));

    expect(handleSelect).toHaveBeenCalledWith(THEMES[1]);
    expect(screen.getByAltText('dark icon')).toBeTruthy();
  });
});

