'use client';

import { useEffect, useState } from 'react';

export function useIsInViewport(id: string, options?: IntersectionObserverInit) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [id, options]);

  return isIntersecting;
}

export default useIsInViewport;
