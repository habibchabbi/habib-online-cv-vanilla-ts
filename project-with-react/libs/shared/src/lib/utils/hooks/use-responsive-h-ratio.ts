'use client';

import { useEffect, useMemo, useState } from 'react';

const BREAKPOINTS = [
  { maxWidth: 640, count: 0.45 },
  { maxWidth: 768, count: 0.7 },
  { maxWidth: 1024, count: 0.75 },
  { maxWidth: 1280, count: 0.90 },
];

const DEFAULT_RATIO = 0.9;

const getHRatio = (width: number | null) => {
  if (width === null) {
    return 0.9;
  }

  const breakpoint = BREAKPOINTS.find(({ maxWidth }) => width < maxWidth);

  return breakpoint ? breakpoint.count : DEFAULT_RATIO;
};

export const useResponsiveHRatio = () => {
  const [hRatio, setHRatio] = useState(() =>
    getHRatio(typeof window === 'undefined' ? null : window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setHRatio(getHRatio(window.innerWidth));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return useMemo(() => hRatio, [hRatio]);
};
