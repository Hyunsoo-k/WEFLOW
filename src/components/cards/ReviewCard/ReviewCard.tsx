import { FaStar } from "react-icons/fa";
import { TfiArrowRight } from "react-icons/tfi";

import type { ReviewItem } from '@/types/reviewItem';

import styles from './ReviewCard.module.scss';

type Props = {
  item: ReviewItem;
};

export const ReviewCard = ({ item }: Props) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.rating}>
        {Array.from({ length: item.stars }).map((_, index) => (
          <FaStar key={index} className={styles.starIcon} />
        ))}
      </div>
      <div className={styles.info}>
        <div className={styles.body}>
          <p className={styles.content}>{item.text}</p>
        </div>
        <footer className={styles.footer}>
          <div className={styles.profile}>{item.author.slice(0, 1)}</div>
          <span className={styles.author}>{item.author}</span>
          <span className={styles.bizName}>{item.bizName}</span>
          <TfiArrowRight className={styles.arrowIcon} />
        </footer>
      </div>
    </div>
  );
};