"use client";

import { useMemo } from 'react';

import {CircularImageCarousel, ImageCarousel}   from '@libs/shared-ui';
import { getThingsICanDoObjectsByLanguage } from '@libs/data';
import {
  useResponsiveHRatio,
  useResponsiveVisibleCount,
  useTranslation,
} from '@libs/shared';

export function CandosCarousel() {
  const { language } = useTranslation();

  const thingsICanDo = useMemo(
    () => getThingsICanDoObjectsByLanguage(language),
    [language],
  );
  const hRatio = useResponsiveHRatio();
  const visibleCount = useResponsiveVisibleCount();
  const circular = Math.random() < 0.2;

  return (
    <div className={'mt-8 justify-self-center p-2 w-[80%] h-[80%]'}>
      {circular
        ? <CircularImageCarousel

        imagesAndLabels={thingsICanDo}
        vRatio={hRatio}
        hRatio={1}
      />

      : <ImageCarousel
        imagesAndLabels={thingsICanDo}
        visibleCount={visibleCount}
        direction={'horizontal'}
        navigationMode={'auto'}
      />}
    </div>
  );
}

export default CandosCarousel;
