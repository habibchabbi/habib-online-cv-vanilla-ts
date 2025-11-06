'use client';

import { useEffect, useRef, useState } from 'react';
import LooseContactLinks from '../loose-contact-links/looseContactLinks';
import { ContactLinksProps } from '../contact-links/compact-contact-links';

export function ContactMenu({ contact }: ContactLinksProps) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setOpen((prev) => !prev);

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

  const handleItemClick = () => setOpen(false);

  return (
    <div className="relative" ref={menuRef}>
      <button
        aria-label="contact menu"
        onClick={toggleMenu}
        className="flex items-center justify-center gap-1 rounded border px-1 py-2 transition-colors duration-200 theme-border theme-card"
      >
        <span className="h-5 w-5">
                  <img src="./contact.svg" alt="Contact"
                  color="green"
                       className="gree"
                  />
        </span>

      </button>
      {open && (
        <div
          className="absolute right-0 mt-2 rounded border shadow theme-border theme-card"
          onClick={handleItemClick}
        >
          <LooseContactLinks contact={contact} orientation="vertical" />
        </div>
      )}
    </div>
  );
}

export default ContactMenu;

