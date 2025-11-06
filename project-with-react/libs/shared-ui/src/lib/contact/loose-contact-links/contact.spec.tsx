import { render } from '@testing-library/react';

import LooseContactLinks from './looseContactLinks';

const mockContact = {
  email: 'test@example.com',
  phone: '+1234567890',
  whatsapp: '+1234567890',
  linkedin: 'https://linkedin.com/in/test',
  github: 'https://github.com/test',
  portfolio: 'https://test.com',
  address: '123 Test St, Test City',
  addressMap: 'https://www.google.com/maps/place/123+Test+St',
};

describe('Contact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LooseContactLinks contact={mockContact} />);
    expect(baseElement).toBeTruthy();
  });
});
