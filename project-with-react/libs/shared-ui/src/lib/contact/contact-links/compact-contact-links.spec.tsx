import { fireEvent, render, screen } from '@testing-library/react';

import ContactLinks from './compact-contact-links';
import { CONTACT } from '@libs/data';

describe('ContactLinks', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContactLinks contact={CONTACT} />);
    expect(baseElement).toBeTruthy();
  });

  it('should close dropdown when clicking outside', () => {
    render(<ContactLinks contact={CONTACT} />);
    fireEvent.click(screen.getByLabelText('Email'));
    expect(screen.getByText(CONTACT.email)).toBeTruthy();
    fireEvent.mouseDown(document.body);
    expect(screen.queryByText(CONTACT.email)).toBeNull();
  });
});
