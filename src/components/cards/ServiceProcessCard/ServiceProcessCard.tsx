import { HiOutlineCog6Tooth } from "react-icons/hi2";

import type { ServiceProcessItem } from '@/types/serviceProcessItem';

import styles from './ServiceProcessCard.module.scss';

type Props = {
  item: ServiceProcessItem;
};

export const ServiceProcessCard = ({ item }: Props) => {
  return (
    <div className={styles.serviceProcessCard}>
      <HiOutlineCog6Tooth className={styles.backgroundIcon} />
      <header className={styles.header}>
        <span className={styles.number}>{item.number}</span>
        <h3 className={styles.title}>{item.title}</h3>
      </header>
      <div className={styles.body}>
        <p className={styles.content}>{item.desc}</p>
      </div>
    </div>
  );
};