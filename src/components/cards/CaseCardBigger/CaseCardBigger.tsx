import Image from 'next/image';
import Link from 'next/link';

import type { PortfolioItem } from '@/types/portfolioItem';

import styles from './CaseCardBigger.module.scss';

type Props = {
  item: PortfolioItem;
};

export const CaseCardBigger = ({ item }: Props) => {
  return (
    <Link href={`/cases/${item.name}`} className={styles.caseCardBigger}>
      <Image src={item.img} alt={item.title} fill className={styles.img} />
      <div className={styles.info}>
        <span className={styles.tag}>{item.tag}</span>
        <h3 className={styles.title}>{item.title}</h3>
      </div>
    </Link>
  );
};