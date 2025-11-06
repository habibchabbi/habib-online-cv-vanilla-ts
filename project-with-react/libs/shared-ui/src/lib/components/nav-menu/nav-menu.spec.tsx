import { fireEvent, render } from '@testing-library/react';

import NavMenu from './nav-menu';

describe('NavMenu', () => {
  const links = [{ label: 'Home', link: '/' }];
  const setActiveLink = jest.fn();

  it('should render successfully', () => {
    const { baseElement } = render(
      <NavMenu links={links} activeLink="/" setActiveLink={setActiveLink} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should toggle menu and close on link click', () => {
    const { getByRole, getByText, queryByText } = render(
      <NavMenu links={links} activeLink="/" setActiveLink={setActiveLink} />
    );

    const button = getByRole('button', { name: /menu/i });

    expect(queryByText('Home')).toBeNull();

    fireEvent.click(button);
    expect(getByText('Home')).toBeInTheDocument();

    fireEvent.click(getByText('Home'));
    expect(setActiveLink).toHaveBeenCalledWith('/');
    expect(queryByText('Home')).toBeNull();
  });

  it('should close when clicking outside', () => {
    const { getByRole, queryByText } = render(
      <NavMenu links={links} activeLink="/" setActiveLink={setActiveLink} />
    );

    const button = getByRole('button', { name: /menu/i });

    fireEvent.click(button);
    expect(queryByText('Home')).toBeInTheDocument();

    fireEvent.mouseDown(document.body);
    expect(queryByText('Home')).toBeNull();
  });
});

