"use client";

import {
  useImageCarousel,
  type CarouselImageWithLabel,
} from "./use-image-carousel";

export interface ImageCarouselProps {
  imagesAndLabels: CarouselImageWithLabel[];
  /**
   * Number of images visible at the same time.
   * Values lower than 1 are treated as 1. If the provided value is greater than
   * the amount of items it will fallback to the carousel length.
  */
  visibleCount?: number;
  /**
   * Time in milliseconds between each slide animation.
   */
  intervalMs?: number;
  /**
   * Extra classes applied to the root container.
   */
  className?: string;
  /**
   * Tailwind classes used to control the image wrapper height/aspect ratio.
   */
  imageWrapperClassName?: string;
  /**
   * Direction of the carousel sliding animation.
   */
  direction?: "horizontal" | "vertical";
  /**
   * Determines how the carousel navigation behaves. When set to "auto" the
   * carousel keeps sliding automatically. When set to "manual", navigation
   * arrows are displayed and the automatic sliding is disabled.
   */
  navigationMode?: "auto" | "manual";
  /**
   * Fired when an image is clicked. Receives the index of the clicked item.
  */
  onImageClick?: (index: number) => void;
}

const DEFAULT_INTERVAL_MS = 3000;
const FALLBACK_VISIBLE_COUNT = 1;

export function ImageCarousel({
  imagesAndLabels,
  visibleCount = FALLBACK_VISIBLE_COUNT,
  intervalMs = DEFAULT_INTERVAL_MS,
  className = "",
  imageWrapperClassName = "aspect-[3/4]",
  direction = "horizontal",
  navigationMode = "auto",
  onImageClick,
}: ImageCarouselProps) {
  const {
    sanitizedImages,
    slides,
    isVertical,
    wrapperPaddingClass,
    itemSizeStyle,
    shouldDisplayArrows,
    handleManualNext,
    handleManualPrevious,
    handleTransitionEnd,
    trackStyle,
    activeIndex,
  } = useImageCarousel({
    imagesAndLabels,
    visibleCount,
    fallbackVisibleCount: FALLBACK_VISIBLE_COUNT,
    intervalMs,
    navigationMode,
    direction,
  });

  if (sanitizedImages.length === 0) {
    return null;
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="relative overflow-hidden rounded-3xl theme-surface">
        {shouldDisplayArrows && (
          <>
            <button
              type="button"
              aria-label="Previous images"
              onClick={handleManualPrevious}
              className={`absolute z-10 flex items-center justify-center text-white transition hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent ${
                isVertical
                  ? "left-0 right-0 top-0 h-16 bg-gradient-to-b from-neutral-900/50 to-transparent"
                  : "inset-y-0 left-0 w-16 bg-gradient-to-r from-neutral-900/50 to-transparent"
              }`}
            >
              <ArrowIcon orientation={isVertical ? "vertical" : "horizontal"} direction="previous" />
            </button>
            <button
              type="button"
              aria-label="Next images"
              onClick={handleManualNext}
              className={`absolute z-10 flex items-center justify-center text-white transition hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-transparent ${
                isVertical
                  ? "bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-neutral-900/50 to-transparent"
                  : "inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-900/50 to-transparent"
              }`}
            >
              <ArrowIcon orientation={isVertical ? "vertical" : "horizontal"} direction="next" />
            </button>
          </>
        )}
        <div
          className={`flex ${isVertical ? "flex-col" : "flex-row"} items-stretch`}
          onTransitionEnd={handleTransitionEnd}
          style={trackStyle}
        >
          {slides.map(({ image, label }, index) => {
            const imageIndex = index % sanitizedImages.length;

            return (
              <div
                key={`image-carousel-${index}`}
                className={`flex-shrink-0 ${wrapperPaddingClass}`}
                style={itemSizeStyle}
              >
                <div
                  className={`relative w-full overflow-hidden-1 rounded-2xl theme-card ${imageWrapperClassName} ${
                    onImageClick ? "cursor-pointer" : ""
                  }`}
                  role={onImageClick ? "button" : undefined}
                  tabIndex={onImageClick ? 0 : undefined}
                  onClick={() => {
                    onImageClick?.(imageIndex);
                  }}
                  onKeyDown={(event) => {
                    if (!onImageClick) {
                      return;
                    }

                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onImageClick(imageIndex);
                    }
                  }}
                  aria-label={
                    onImageClick
                      ? `View ${label || `image ${imageIndex + 1}`}`
                      : undefined
                  }
                >
                  <div className="flex h-full min-h-[max-content] w-full flex-col items-center justify-between gap-4 p-2">
                    <img
                      alt={label || `Carousel image ${imageIndex + 1}`}
                      src={image}
                      className="w-full rounded-xl object-cover sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%]"
                      loading="lazy"
                    />
                    <p
                      className="w-full text-center font-semibold theme-text-primary sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] sm:text-left"
                    >
                      {label}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {sanitizedImages.map((_, index) => (
          <span
            key={`image-carousel-indicator-${index}`}
            aria-hidden="true"
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${
              index === activeIndex
                ? "theme-carousel-indicator-active"
                : "theme-carousel-indicator-inactive"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;

interface ArrowIconProps {
  orientation: "horizontal" | "vertical";
  direction: "previous" | "next";
}

function ArrowIcon({ orientation, direction }: ArrowIconProps) {
  if (orientation === "vertical") {
    const isPrevious = direction === "previous";

    return (
      <svg
        aria-hidden="true"
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {isPrevious ? (
          <path d="M6 15l6-6 6 6" />
        ) : (
          <path d="M6 9l6 6 6-6" />
        )}
      </svg>
    );
  }

  const isPrevious = direction === "previous";

  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {isPrevious ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}
