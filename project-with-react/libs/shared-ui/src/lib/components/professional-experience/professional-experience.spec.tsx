import { render } from '@testing-library/react';

import ProfessionalExperience from './professional-experience';
import type { ProfessionalExperienceType } from '@libs/types';

describe('ProfessionalExperience', () => {
  it('should render successfully', () => {
    const pe: ProfessionalExperienceType = {
      post: '',
      startDate: 2017,
      endDate: 2023,
      employer: 'imbus',
      employerDescription: '',
      projectsList: [],
      employerIcon: 'smals',
      employerLocation: '',
    };
    const { baseElement } = render(
      <ProfessionalExperience professionalExperience={pe} />
    );
    expect(baseElement).toBeTruthy();
  });
});
