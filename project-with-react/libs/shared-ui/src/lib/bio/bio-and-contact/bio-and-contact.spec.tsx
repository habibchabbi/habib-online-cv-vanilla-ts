import { render } from '@testing-library/react';

import BioAndContact from './bio-and-contact';

describe('BioAndContact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BioAndContact />);
    expect(baseElement).toBeTruthy();
  });
});
