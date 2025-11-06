"use client";

import { useEffect, useMemo, useState } from "react";

import {
  buildCircularCarouselItems,
  type CarouselItemConfig,
} from "./circular-image-carousel-helpers";

export interface CircularImageCarouselProps {
  /**
   * List of image sources displayed in the carousel.
   */
  imagesAndLabels: {image: string; label: string; }[];
  /**
   * Time in milliseconds the carousel idles before rotating to the next image.
   * Defaults to 5 seconds.
   */
  intervalMs?: number;
  /**
   * Extra classes applied to the outermost container.
   */
  className?: string;
  /**
   * Extra classes applied to the image wrapper. This is useful to tweak the
   * default width/height of the images before the scaling transform is applied.
   */
  imageWrapperClassName?: string;
  /**
   * Controls how much the carousel spreads horizontally. Values are clamped
   * between 0 and 1, where 0 keeps every image centered and 1 preserves the
   * default spacing.
   */
  hRatio?: number;
  /**
   * Controls the vertical offset applied to each image. Values are clamped
   * between 0 and 1, where 0 keeps items aligned and 1 preserves the default
   * elevation effect.
   */
  vRatio?: number;
}

const DEFAULT_INTERVAL_MS = 3000;
export function CircularImageCarousel({
  imagesAndLabels,
  intervalMs = DEFAULT_INTERVAL_MS,
  className = "",
  imageWrapperClassName = "h-48 w-64 sm:h-64 sm:w-[26rem]",
                                        hRatio,
                                        vRatio,
}: CircularImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (imagesAndLabels.length <= 1) {
      return undefined;
    }

    const id = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % imagesAndLabels.length);
    }, Math.max(intervalMs, 0));

    return () => window.clearInterval(id);
  }, [imagesAndLabels.length, intervalMs]);

  useEffect(() => {
    setActiveIndex(0);
  }, [imagesAndLabels.length]);

  const carouselItems: CarouselItemConfig[] = useMemo(
    () => {

      if (hRatio === undefined && vRatio === undefined) {
        return buildCircularCarouselItems(imagesAndLabels, activeIndex);
      }

      const normalizedHorizontal =
        hRatio === undefined ? undefined : Math.min(Math.max(hRatio, 0), 1);
      const normalizedVertical =
        vRatio === undefined ? undefined : Math.min(Math.max(vRatio, 0), 1);

      return buildCircularCarouselItems(imagesAndLabels, activeIndex, {
        horizontal: normalizedHorizontal,
        vertical: normalizedVertical,
      });

      //return  buildCircularCarouselItems(imagesAndLabels, activeIndex);

    } ,
    [imagesAndLabels, activeIndex, hRatio, vRatio]
  );

  if (imagesAndLabels.length === 0) {
    return null;
  }

  if (imagesAndLabels.length === 1) {
    return (
      <div className={`w-full ${className}`}>
        <div className="relative flex w-full items-center justify-center">
          <div className={`overflow-hidden rounded-3xl shadow-xl ${imageWrapperClassName}`}>
           <div className='flex start justify-center h-full w-full object-cover'
                style={{ objectPosition: "center 66%" }}
           >

            <img

              src={imagesAndLabels[0].image}
              alt="Carousel image"

            />
            <span>{ imagesAndLabels[0].label }</span>
           </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div
        className="relative mx-auto flex h-[25rem] w-full max-w-5xl items-center justify-center"
        style={{ perspective: "1600px" }}
        role="list"
        aria-label="Circular image carousel"
      >
        <div className="relative h-full w-full">
          {carouselItems.map(({
            src,
            label,
            containerStyle,
            wrapperStyle,
            imageStyle,
          }, index) => (
            <div
              key={`circular-image-carousel-${index}`}
              role="listitem"
              className="absolute left-1/2 top-1/2 transition-all duration-700 ease-out"
              style={containerStyle}
            >

              <div
                className={`overflow-hidden rounded-3xl border
                 border-white/40  theme-surface backdrop-blur-sm ${imageWrapperClassName}`}
                style={wrapperStyle}
              >
                <div className='flex flex-row md:flex-row items-center align h-full w-full object-cover'
                     style={imageStyle}
                >
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className="w-[50%] h-full"
                    loading="lazy"
                  />
                  <p className='w-[50%] ps-2  text-2xl bold '>
                    {label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CircularImageCarousel;
