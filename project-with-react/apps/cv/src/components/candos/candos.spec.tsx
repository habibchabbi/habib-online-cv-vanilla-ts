import { render } from '@testing-library/react';

import Candos from './candos';

describe('Candos', () => {
  it('should render successfully', () => {
    const things = ['Example task'];
    const { baseElement } = render(<Candos thingsICanDo={things} />);
    expect(baseElement).toBeTruthy();
  });
});
