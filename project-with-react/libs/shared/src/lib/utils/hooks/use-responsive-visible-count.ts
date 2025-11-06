'use client';

import { useEffect, useMemo, useState } from 'react';

const BREAKPOINTS = [
  { maxWidth: 640, count: 1 },
  { maxWidth: 768, count: 2 },
  { maxWidth: 1024, count: 3 },
  { maxWidth: 1280, count: 4 },
];

const DEFAULT_COUNT = 5;

const getVisibleCount = (width: number | null) => {
  if (width === null) {
    return 1;
  }

  const breakpoint = BREAKPOINTS.find(({ maxWidth }) => width < maxWidth);

  return breakpoint ? breakpoint.count : DEFAULT_COUNT;
};

export const useResponsiveVisibleCount = () => {
  const [visibleCount, setVisibleCount] = useState(() =>
    getVisibleCount(typeof window === 'undefined' ? null : window.innerWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount(window.innerWidth));
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return useMemo(() => visibleCount, [visibleCount]);
};
