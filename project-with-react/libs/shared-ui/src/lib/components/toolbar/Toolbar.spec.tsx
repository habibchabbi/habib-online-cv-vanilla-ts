import { render, fireEvent, waitFor } from '@testing-library/react';

import Toolbar from './Toolbar';
import { CONTACT, LANGUAGE_OPTIONS } from '@libs/data';
import { THEME_OPTIONS } from '@libs/shared';

describe('Toolbar', () => {
  const renderToolbar = (links: any[] = []) =>
    render(
      <Toolbar
        links={links}
        activeLink=""
        setActiveLink={() => undefined}
        languages={LANGUAGE_OPTIONS}
        selectedLanguage={LANGUAGE_OPTIONS[0]}
        themes={THEME_OPTIONS}
        selectedTheme={THEME_OPTIONS[0]}
      />
    );

  it('should render successfully', () => {
    const links = [{ label: 'About', link: '#about' }];
    const { baseElement } = renderToolbar(links);
    expect(baseElement).toBeTruthy();
  });

  it('should display email dropdown and copy email', async () => {
    Object.assign(navigator, {
      clipboard: { writeText: jest.fn().mockResolvedValue(undefined) },
    });

    const { getByLabelText, queryByText } = renderToolbar();

    fireEvent.click(getByLabelText('Email', { hidden: true }));
    expect(queryByText(CONTACT.email)).toBeInTheDocument();

    fireEvent.click(getByLabelText('Copy email'));

    await waitFor(() =>
      expect(queryByText(/Copied to clipboard!/i)).toBeInTheDocument()
    );
  });

  it('should display phone dropdown and copy phone', async () => {
    Object.assign(navigator, {
      clipboard: { writeText: jest.fn().mockResolvedValue(undefined) },
    });

    const { getByLabelText, queryByText } = renderToolbar();

    fireEvent.click(getByLabelText('Phone', { hidden: true }));
    expect(queryByText(CONTACT.phone)).toBeInTheDocument();

    fireEvent.click(getByLabelText('Copy phone'));

    await waitFor(() =>
      expect(queryByText(/Copied to clipboard!/i)).toBeInTheDocument()
    );
  });

  it('should display whatsapp dropdown and copy number', async () => {
    Object.assign(navigator, {
      clipboard: { writeText: jest.fn().mockResolvedValue(undefined) },
    });

    const { getByLabelText, queryByText } = renderToolbar();

    fireEvent.click(getByLabelText('WhatsApp', { hidden: true }));
    expect(queryByText(CONTACT.phone)).toBeInTheDocument();

    fireEvent.click(getByLabelText('Copy whatsapp'));

    await waitFor(() =>
      expect(queryByText(/Copied to clipboard!/i)).toBeInTheDocument()
    );
  });

  it('should have tooltips on contact icons', () => {
    const { getByLabelText } = renderToolbar();

    expect(getByLabelText('Email', { hidden: true })).toHaveAttribute(
      'title',
      'Click to see email address'
    );
    expect(getByLabelText('Phone', { hidden: true })).toHaveAttribute(
      'title',
      'Click to see phone number'
    );
    expect(getByLabelText('WhatsApp', { hidden: true })).toHaveAttribute(
      'title',
      'Click to see WhatsApp number'
    );
    expect(getByLabelText('LinkedIn', { hidden: true })).toHaveAttribute(
      'title',
      'Click to go to LinkedIn profile'
    );
    expect(getByLabelText('Portfolio', { hidden: true })).toHaveAttribute(
      'title',
      'Click to go to portfolio page'
    );
  });
});
