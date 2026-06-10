'use client';

import { useState } from 'react';

import { Tag as TagType} from '@/features/home/types/reviewItem';
import { TAGS } from '@/shared/consts/tags';
import { REVIEWS } from '@/features/home/data/commonTest';
import { ContentSectionLayout } from '@/shared/layout/sections/ContentSectionLayout';
import { Tag } from '@/shared/ui/Tag/Tag';
import { FadeEdgeCarousel } from '@/shared/carousels/FadeEdgeCarousel/FadeEdgeCarousel';

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
    <ContentSectionLayout
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
    </ContentSectionLayout>
  );
};
