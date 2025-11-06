import { render } from '@testing-library/react';

import CandosCarousel from './candos-carousel';

describe('CandosCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CandosCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
