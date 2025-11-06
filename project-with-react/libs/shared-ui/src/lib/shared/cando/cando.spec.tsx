import { render } from '@testing-library/react';

import Cando from './cando';

describe('Cando', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Cando />);
    expect(baseElement).toBeTruthy();
  });
});
