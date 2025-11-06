import { useCallback, useEffect, useMemo, useState } from "react";

export interface CarouselImageWithLabel {
  image: string;
  label: string;
}

export interface UseImageCarouselOptions {
  imagesAndLabels: CarouselImageWithLabel[];
  visibleCount: number;
  fallbackVisibleCount: number;
  intervalMs: number;
  navigationMode: "auto" | "manual";
  direction: "horizontal" | "vertical";
}

export interface UseImageCarouselResult {
  sanitizedImages: CarouselImageWithLabel[];
  slides: CarouselImageWithLabel[];
  isVertical: boolean;
  wrapperPaddingClass: string;
  itemSizeStyle: { width?: string; height?: string };
  shouldDisplayArrows: boolean;
  handleManualNext: () => void;
  handleManualPrevious: () => void;
  handleTransitionEnd: () => void;
  trackStyle: { transform: string; transition: string };
  activeIndex: number;
}

export function useImageCarousel({
  imagesAndLabels,
  visibleCount,
  fallbackVisibleCount,
  intervalMs,
  navigationMode,
  direction,
}: UseImageCarouselOptions): UseImageCarouselResult {
  const sanitizedImages = useMemo(
    () =>
      imagesAndLabels.filter(
        (item) =>
          typeof item?.image === "string" &&
          item.image.trim().length > 0 &&
          typeof item?.label === "string"
      ),
    [imagesAndLabels]
  );

  const safeVisibleCount = Math.max(fallbackVisibleCount, Math.floor(visibleCount));
  const effectiveVisibleCount = Math.min(
    safeVisibleCount,
    sanitizedImages.length || safeVisibleCount
  );

  const shouldLoop = sanitizedImages.length > effectiveVisibleCount;

  const { slides, leadingCloneCount } = useMemo(() => {
    if (!shouldLoop) {
      return {
        slides: sanitizedImages,
        leadingCloneCount: 0,
      };
    }

    const leadingClones = sanitizedImages.slice(-effectiveVisibleCount);
    const trailingClones = sanitizedImages.slice(0, effectiveVisibleCount);

    return {
      slides: [...leadingClones, ...sanitizedImages, ...trailingClones],
      leadingCloneCount: effectiveVisibleCount,
    };
  }, [sanitizedImages, effectiveVisibleCount, shouldLoop]);

  const [displayIndex, setDisplayIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  useEffect(() => {
    const initialIndex = leadingCloneCount;

    setIsTransitionEnabled(false);
    setDisplayIndex(initialIndex);
  }, [sanitizedImages, effectiveVisibleCount, leadingCloneCount]);

  useEffect(() => {
    if (navigationMode !== "auto") {
      return;
    }

    if (!shouldLoop) {
      return;
    }

    const timer = window.setInterval(() => {
      setDisplayIndex((previousIndex) => previousIndex + 1);
    }, intervalMs);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    sanitizedImages.length,
    effectiveVisibleCount,
    intervalMs,
    navigationMode,
    shouldLoop,
  ]);

  useEffect(() => {
    if (!isTransitionEnabled) {
      let rafHandle = 0;
      let rafHandle2 = 0;

      rafHandle = window.requestAnimationFrame(() => {
        rafHandle2 = window.requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });

      return () => {
        window.cancelAnimationFrame(rafHandle);
        window.cancelAnimationFrame(rafHandle2);
      };
    }

    return undefined;
  }, [isTransitionEnabled]);

  const handleTransitionEnd = useCallback(() => {
    if (!shouldLoop) {
      return;
    }

    const lastActualIndex = leadingCloneCount + sanitizedImages.length - 1;
    const firstActualIndex = leadingCloneCount;

    if (displayIndex > lastActualIndex) {
      setIsTransitionEnabled(false);
      setDisplayIndex(firstActualIndex);
      return;
    }

    if (displayIndex < firstActualIndex) {
      setIsTransitionEnabled(false);
      setDisplayIndex(lastActualIndex);
    }
  }, [
    shouldLoop,
    displayIndex,
    sanitizedImages.length,
    leadingCloneCount,
  ]);

  const translatePercentage = useMemo(() => {
    if (effectiveVisibleCount === 0) {
      return 0;
    }

    return (100 / effectiveVisibleCount) * displayIndex;
  }, [effectiveVisibleCount, displayIndex]);

  const isVertical = direction === "vertical";
  const wrapperPaddingClass = isVertical ? "px-2 py-2" : "px-2";
  const itemSizeStyle = useMemo(() => {
    if (effectiveVisibleCount === 0) {
      return isVertical ? { height: "100%" } : { width: "100%" };
    }

    return isVertical
      ? { height: `${100 / effectiveVisibleCount}%` }
      : { width: `${100 / effectiveVisibleCount}%` };
  }, [effectiveVisibleCount, isVertical]);

  const trackStyle = useMemo(
    () => ({
      transform: isVertical
        ? `translateY(-${translatePercentage}%)`
        : `translateX(-${translatePercentage}%)`,
      transition: isTransitionEnabled ? "transform 700ms ease-in-out" : "none",
    }),
    [isVertical, translatePercentage, isTransitionEnabled]
  );

  const shouldDisplayArrows =
    navigationMode === "manual" && sanitizedImages.length > effectiveVisibleCount;

  const handleManualNext = useCallback(() => {
    if (!shouldDisplayArrows) {
      return;
    }

    setDisplayIndex((previousIndex) => previousIndex + 1);
  }, [shouldDisplayArrows]);

  const handleManualPrevious = useCallback(() => {
    if (!shouldDisplayArrows) {
      return;
    }

    setDisplayIndex((previousIndex) => previousIndex - 1);
  }, [shouldDisplayArrows]);

  const activeIndex =
    sanitizedImages.length === 0
      ? 0
      : (displayIndex - leadingCloneCount + sanitizedImages.length) %
        sanitizedImages.length;

  return {
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
  };
}
