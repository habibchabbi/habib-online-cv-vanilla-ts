import { fireEvent, render } from '@testing-library/react';

import Project from './project';
import type { ProjectType } from '@libs/types';
import { PROJECT_THUMBNAILS } from '@libs/data';

describe('Project', () => {
  it('should render thumbnail and dates', () => {
    const project: ProjectType = {
      name: 'Test',
      description: 'Desc',
      thumbnail: 'portfolio',
      startDate: 2020,
      endDate: 2021,
      subProjects: [],
      clients: [],
      roleInTheProject: 'developer',
      achievements: [],
    };
    const { getByAltText, getByText } = render(<Project project={project} />);
    expect(getByAltText('Test thumbnail')).toHaveAttribute(
      'src',
      PROJECT_THUMBNAILS.portfolio
    );
    expect(getByText('2020 - 2021')).toBeTruthy();
  });

  it('should show achievements in modal when thumbnail is clicked', () => {
    const project: ProjectType = {
      name: 'Test',
      description: 'Desc',
      thumbnail: 'portfolio',
      subProjects: [],
      clients: [],
      roleInTheProject: 'developer',
      achievements: [
        {
          description: 'Did something great',
          importance: 1,
          type: 'technical',
        },
      ],
    };
    const { getByAltText, getByText } = render(<Project project={project} />);
    fireEvent.click(getByAltText('Test thumbnail'));
    expect(getByText('Did something great')).toBeTruthy();
  });

  it('should close modal when close button is clicked', () => {
    const project: ProjectType = {
      name: 'Test',
      description: 'Desc',
      thumbnail: 'portfolio',
      subProjects: [],
      clients: [],
      roleInTheProject: 'developer',
      achievements: [
        {
          description: 'Did something great',
          importance: 1,
          type: 'technical',
        },
      ],
    };
    const { getByAltText, getByText, queryByText } = render(
      <Project project={project} />
    );
    fireEvent.click(getByAltText('Test thumbnail'));
    fireEvent.click(getByText('Close'));
    expect(queryByText('Did something great')).toBeNull();
  });
});
