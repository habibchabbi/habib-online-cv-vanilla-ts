import { render } from '@testing-library/react';

import Educations from './educations';

describe('Educations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Educations />);
    expect(baseElement).toBeTruthy();
  });
});
