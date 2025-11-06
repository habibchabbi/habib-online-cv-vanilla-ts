import { render } from '@testing-library/react';
import SkillsSet from './skills-set';
import { skills } from '@libs/data';

describe('SkillsSet', () => {
  it('should render successfully', () => {
    const filtered = skills.filter((s) => s.class === 'SPA');
    const { baseElement } = render(<SkillsSet skills={filtered} />);
    expect(baseElement).toBeTruthy();
  });
});
