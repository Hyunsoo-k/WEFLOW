'use client';

import type { RefObject } from 'react';
import { TfiArrowLeft } from "react-icons/tfi";
import { TfiArrowRight } from "react-icons/tfi";

import styles from './CarouselControls.module.scss';

type Props = {
  trackWrapperRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLUListElement | null>;
  itemRef: RefObject<HTMLLIElement | null>;
};

export const CarouselControls = ({ trackWrapperRef, trackRef, itemRef }: Props) => {
  const handleScroll = (direction: 'left' | 'right') => {
    const trackWrapper = trackWrapperRef.current;
    const track = trackRef.current;
    const item = itemRef.current;

    if (!trackWrapper || !track || !item) {
      return;
    }

    const gap = parseFloat(getComputedStyle(track).columnGap);
    const itemWidth = Number(item.getBoundingClientRect().width) + gap;
    const moveDistance = direction === 'left' ? -itemWidth : itemWidth;

    trackWrapper.scrollBy({ left: moveDistance });
  };

  return (
    <div className={styles.carouselControls}>
      <button
        type='button'
        onClick={() => handleScroll('left')}
        className={styles.arrowWrapper}
      >
        <TfiArrowLeft className={styles.arrowIcon} />
      </button>
      <button
        type='button'
        onClick={() => handleScroll('right')}
        className={styles.arrowWrapper}
      >
        <TfiArrowRight className={styles.arrowIcon} />
      </button>
    </div>
  );
};