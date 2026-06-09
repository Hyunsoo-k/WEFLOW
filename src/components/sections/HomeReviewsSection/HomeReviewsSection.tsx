'use client';

import { useState } from 'react';

import { Tag as TagType} from '@/types/reviewItem';
import { TAGS } from '@/consts/tags';
import { REVIEWS } from '@/data/commonTest';
import { Tag } from '@/components/ui/Tag/Tag';
import { FadeEdgeCarousel } from '@/components/carousels/FadeEdgeCarousel/FadeEdgeCarousel';

import styles from './HomeReviewsSection.module.scss';

export const HomeReviewsSection = () => {
  const [currentTag, setCurrentTag] = useState<TagType | '전체'>('전체');

  const handleTagClick = (value: TagType) => {
    setCurrentTag(value);
  };

  const reviewItems = currentTag === '전체'
    ? REVIEWS
    : REVIEWS.filter(review => review.tag === currentTag);

  return (
    <section className={styles.homeReviewsSection}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>REVIEWS</span>
        <h2 className={styles.title}>
          <strong className={styles.strong}>맡겨본 분</strong>들의 이야기
        </h2>
        <ul className={styles.tagList}>
          {TAGS.map((item: TagType) => (
            <li key={item} className={styles.item}>
              <Tag
                text={item}
                currentTag={currentTag}
                onClick={handleTagClick}
              />
            </li>
          ))}
        </ul>
      </header>
      <div className={styles.body}>
        <FadeEdgeCarousel items={reviewItems} />
      </div>
    </section>
  );
};