import { render } from '@testing-library/react';

import Language from './language';
import type { LanguageType } from '@libs/types';

describe('Language', () => {
  it('should render successfully', () => {
    const lang: LanguageType = {
      language: 'English',
      proficiency: 'Fluent',
      certificate: 'IELTS',
      flag: '/flags/gb.svg',
    };
    const { baseElement } = render(<Language language={lang} />);
    expect(baseElement).toBeTruthy();
  });
});
