'use client';

import { useEffect, useRef, useState } from 'react';

import { Navbar, type ToolbarProps as NavbarProps } from '../navbar/navbar';

export function NavMenu({ links, activeLink, setActiveLink }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen((prev) => !prev);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        aria-label="menu"
        onClick={toggleMenu}
        className="rounded border p-2 transition-colors duration-200 theme-border theme-card"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 rounded border shadow theme-border theme-card">
          <Navbar
            links={links}
            activeLink={activeLink}
            setActiveLink={handleLinkClick}
            orientation="vertical"
          />
        </div>
      )}
    </div>
  );
}

export default NavMenu;

