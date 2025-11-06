import { render } from '@testing-library/react';
import { quote } from '@libs/data';

import Summary from './summary';

describe('Summary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Summary showCandos={false} quote={quote} />);
    expect(baseElement).toBeTruthy();
  });
});
