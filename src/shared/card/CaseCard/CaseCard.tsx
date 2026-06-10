import Image from 'next/image';
import { IoArrowForward } from "react-icons/io5";

import type { CaseItem } from '@/type/caseItem';

import styles from './CaseCard.module.scss';

type Props = {
  item: CaseItem;
};

export const CaseCard = ({ item }: Props) => {
  return (
    <div className={styles.caseCard}>
      <div className={styles.thumbnailWrapper}>
        <Image src={item.img} alt={item.title} fill className={styles.thumbnail} />
      </div>
      <div className={styles.info}>
        <header className={styles.header}>
          <h3 className={styles.title}>{item.title}</h3>
        </header>
        <div className={styles.body}>
          <p className={styles.content}>{item.content}</p>
        </div>
      </div>
      <footer className={styles.footer}>
        <span className={styles.category}>{item.category}</span>
        <IoArrowForward className={styles.icon} />
      </footer>
    </div>
  );
};