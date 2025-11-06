import { render } from '@testing-library/react';

import Skill from './skill';
describe('Skill', () => {
  it('should render successfully', () => {
    const skill = {
      name: 'Test',
      yearsOfExperience: 1,
      class: 'Test',
      isTechnical: true,
    };
    const { baseElement } = render(<Skill skill={skill} />);
    expect(baseElement).toBeTruthy();
  });
});
