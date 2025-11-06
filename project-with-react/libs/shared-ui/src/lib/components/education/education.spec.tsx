import { render } from '@testing-library/react';

import Education from './education';
import type { EducationType } from '@libs/types';

describe('Education', () => {
  it('should render successfully', () => {
    const education: EducationType = {
      title: 'Uni',
      diploma: 'CS',
      startYear: 2016,
      endYear: 2020,
      schoolIcon: 'uni.png',
      schoolName: 'Uni',
    };
    const { baseElement } = render(<Education education={education} />);
    expect(baseElement).toBeTruthy();
  });
});
