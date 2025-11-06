import type { CSSProperties } from "react";

const BASE_ELEVATION = 24;

export interface CarouselItemConfig {
  src: string;
  label: string;
  containerStyle: CSSProperties;
  wrapperStyle: CSSProperties;
  imageStyle: CSSProperties;
}

export interface CarouselOffsetRatios {
  /**
   * Scales the horizontal spread of the carousel.
   * "0" keeps every image centered while "1" preserves the default spacing.
   */
  horizontal?: number;
  /**
   * Scales the vertical offset applied to each image.
   * "0" keeps items aligned while "1" preserves the default elevation effect.
   */
  vertical?: number;
}

const clampRatio = (value?: number) =>
  value === undefined ? undefined : Math.min(Math.max(value, 0), 1);

/**
 * Calculates the carousel items metadata for rendering.
 */
export function buildCircularCarouselItems(
  images: {image: string; label: string; }[],
  activeIndex: number,
  ratios?: CarouselOffsetRatios
): CarouselItemConfig[] {
  if (images.length === 0) {
    return [];
  }

  const step = (2 * Math.PI) / images.length;
  const horizontalFactor = clampRatio(ratios?.horizontal) ?? 1;

  return images.map((src, index) => {
    const relativeIndex = index - activeIndex;
    const angle = relativeIndex * step;
    const depth = (Math.cos(angle) + 1) / 2; // 0 (furthest) -> 1 (closest)

    const sinAngle = Math.sin(angle);
    const translateX =
      sinAngle * 75 * horizontalFactor; // percentage of the container width
    //const translateY = (1 - depth) * -6 + depth * 12; // small elevation effect
    const translateY =  depth * 100; // elevation relative to depth
    const scale = 0.5 * (0.65 + depth * 0.55);
    const opacity = 0.35 + depth * 0.65;
    const rotateY = -sinAngle * 18 * horizontalFactor;
    const zIndex = Math.round(depth * 100);
    const blur = (1 - depth) * 1.5;
    const shadowStrength = BASE_ELEVATION + depth * 16;
    const shadowOpacity = 0.35 + depth * 0.35;
    const imageFocusOffset = 56 + depth * 10;
    const baseTop = 50;
    const imageTopOffset = 0;
    //const topOffset =0 * depth * (100 * verticalFactor);

    const containerStyle: CSSProperties = {
      transform: `translate(-50%, -50%) translate3d(${translateX.toFixed(3)}%, ${translateY.toFixed(
        3
      )}%, 0) rotateY(${rotateY.toFixed(3)}deg) scale(${scale.toFixed(3)})`,
      opacity,
      zIndex,
      transformOrigin: "center center",
      top: `${baseTop + imageTopOffset}px`,
    };

    const wrapperStyle: CSSProperties = {
      transform: "translateZ(0)",
      boxShadow: `0 ${Math.round(shadowStrength / 2)}px ${Math.round(
        shadowStrength
      )}px -${Math.round(shadowStrength / 2)}px rgba(17, 24, 39, ${shadowOpacity.toFixed(2)})`,
      filter: `blur(${blur.toFixed(2)}px)`,
      zIndex,
    };

    const imageStyle: CSSProperties = {
      objectPosition: `center ${imageFocusOffset.toFixed(2)}%`,
    };

    return {
      src: src.image,
      label: src.label,
      containerStyle,
      wrapperStyle,
      imageStyle,
    };
  });
}

