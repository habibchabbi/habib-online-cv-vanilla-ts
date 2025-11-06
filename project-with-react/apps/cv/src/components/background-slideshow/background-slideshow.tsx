import Image from 'next/image';
import { useEffect, useState } from 'react';

interface BackgroundSlideshowProps {
  images: string[];
}

export function BackgroundSlideshow({ images }: BackgroundSlideshowProps) {
  const [index, setIndex] = useState(0);
  const [sliding, setSliding] = useState(false);

  useEffect(() => {
    let slideTimeout: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;
    let resetId = 0;

    const startSlide = () => {
      setSliding(true);
      slideTimeout = setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        // wait for the DOM to update before resetting sliding state
        resetId = requestAnimationFrame(() => setSliding(false));
      }, 2000);
    };

    const initialTimeout = setTimeout(() => {
      startSlide();
      intervalId = setInterval(startSlide, 10000);
    }, 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(slideTimeout);
      clearInterval(intervalId);
      cancelAnimationFrame(resetId);
    };
  }, [images.length]);

  const nextIndex = (index + 1) % images.length;

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden">
      <Image
        src={images[index]}
        alt=""
        fill
        className={`absolute inset-0 object-cover
        ${sliding ? 'transition-transform duration-2000 -translate-x-full' : 'translate-x-0'}`}
      />
      <Image
        src={images[nextIndex]}
        alt=""
        fill
        className={`absolute inset-0 object-cover
        ${sliding ? 'transition-transform duration-2000 translate-x-0' : 'translate-x-full'}`}
      />
    </div>
  );
}

export default BackgroundSlideshow;
