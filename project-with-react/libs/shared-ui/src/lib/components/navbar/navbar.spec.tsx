import { render } from '@testing-library/react';

import Navbar from './navbar';

describe('Navbar', () => {
  const links = [{ label: 'Home', link: '/' }];
  const setActiveLink = jest.fn();

  it('should render successfully', () => {
    const { baseElement } = render(
      <Navbar links={links} activeLink="/" setActiveLink={setActiveLink} />
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render vertically when orientation is vertical', () => {
    const { container } = render(
      <Navbar
        links={links}
        activeLink="/"
        setActiveLink={setActiveLink}
        orientation="vertical"
      />
    );
    expect(container.querySelector('nav')?.className).toMatch(/flex-col/);
  });
});

