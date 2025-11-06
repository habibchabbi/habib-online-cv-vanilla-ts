import { render } from '@testing-library/react';

import SkillsToolMozaique from './skills-tools-mozaiq';
import { skillTools } from '@libs/data';

describe('SkillsToolMozaique', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <SkillsToolMozaique icons={skillTools} />
    );
    expect(baseElement).toBeTruthy();
  });
});
