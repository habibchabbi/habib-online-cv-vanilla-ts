'use client';

import { createContext, useContext } from 'react';

export interface ActiveLinkContextType {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

export const ActiveLinkContext = createContext<ActiveLinkContextType>({
  activeLink: '',
  setActiveLink: () => undefined,
});

export const useActiveLink = () => useContext(ActiveLinkContext);
