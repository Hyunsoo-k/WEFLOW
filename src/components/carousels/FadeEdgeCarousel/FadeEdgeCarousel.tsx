'use client';

import { useRef } from 'react';

import type { ReviewItem } from '@/types/reviewItem';
import { ReviewCard } from '@/components/cards/ReviewCard/ReviewCard';

import styles from './FadeEdgeCarousel.module.scss';

type Props = {
  items: ReviewItem[]
};

export const FadeEdgeCarousel = ({ items }: Props) => {
  const trackWrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const itemRef = useRef<HTMLLIElement | null>(null);

  const doubledItems = [...items, ...items];

  const SPEED = 10;
  const duration = items.length * SPEED;

  return (
    <div className={styles.fadeEdgeCarousel}>
      <div ref={trackWrapperRef} className={styles.trackWrapper}>
        <ul
          ref={trackRef}
          className={styles.track}
          style={{ animationDuration: `${duration}s` }}
        >
          {doubledItems.map((item, index) => (
            <li
              key={`review-${index}`}
              ref={index === 0 ? itemRef : null}
              className={styles.item}
            >
              <ReviewCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};