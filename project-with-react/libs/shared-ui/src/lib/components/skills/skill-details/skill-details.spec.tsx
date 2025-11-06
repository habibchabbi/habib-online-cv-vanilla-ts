import { render } from '@testing-library/react';

import SkillDetails from './skill-details';

describe('SkillDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SkillDetails
        icon="test-icon"
        name="Test"
        description="Test description"
        yearsOfExperience={1}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
