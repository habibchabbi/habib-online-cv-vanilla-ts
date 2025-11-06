import { render } from '@testing-library/react';

import CandoCard from './cando-card';

describe('CandoCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CandoCard />);
    expect(baseElement).toBeTruthy();
  });
});
