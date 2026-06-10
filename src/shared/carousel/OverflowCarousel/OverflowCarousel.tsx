'use client';

import { useRef } from 'react';

import type { CaseItem } from '@/type/caseItem';
import { CaseCard } from '@/shared/card/CaseCard/CaseCard';

import styles from './OverflowCarousel.module.scss';

type Props = {
  items: CaseItem[];
};

export const OverflowCarousel = ({ items }: Props) => {
  const trackWrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const itemRef = useRef<HTMLLIElement | null>(null);

  return (
    <div className={styles.overflowCarousel}>
      <div ref={trackWrapperRef} className={styles.trackWrapper}>
        <ul ref={trackRef} className={styles.track}>
          {items.map((item, index) => (
            <li
              key={item.title}
              ref={index === 0 ? itemRef : null}
              className={styles.item}
            >
              <CaseCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
