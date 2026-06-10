'use client';

import { useState } from 'react';

import { Tag as TagType } from '@/type/reviewItem';
import { TAGS } from '@/shared/constant/tags';
import { REVIEWS } from '@/data/commonTest';
import { BodySection } from '@/shared/layout/BodySection/BodySection';
import { Tag } from '@/shared/Tag/Tag';
import { FadeEdgeCarousel } from '@/shared/carousel/FadeEdgeCarousel/FadeEdgeCarousel';

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
    <BodySection
      isBgSecondary={true}
      eyebrow='REVIEWS'
      title={<><strong>맡겨본 분</strong>들의 이야기</>}
      description='WEFLOW와 함께한 사례들을 확인해 보세요.'
    >
      <>
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
        <FadeEdgeCarousel items={reviewItems} />
      </>
    </BodySection>
  );
};
