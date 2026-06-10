import { FaCheck } from "react-icons/fa6";

import type { FlowItem } from '@/types/flowItem';

import styles from './FlowCard.module.scss';

type Props = {
  item: FlowItem;
};

export const FlowCard = ({ item }: Props) => {
  return (
    <div className={styles.flowCard}>
      <header className={styles.header}>
        <span className={styles.step}>{item.step}</span>
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.description}>{item.description}</span>
        <div className={styles.infoBox}>
          <div className={styles.info}>
            <span className={styles.top}>기간</span>
            <span className={styles.bottom}>{item.period}</span>
          </div>
          <div className={styles.info}>
            <span className={styles.top}>비용</span>
            <span className={styles.bottom}>{item.price}</span>
          </div>
        </div>
      </header>
      <div className={styles.body}>
        <ul className={styles.list}>
          {item.checkList.map((item) => (
            <li key={item} className={styles.item}>
              <div className={styles.checkItem}>
                <FaCheck className={styles.checkIcon} />
                <span className={styles.text}>{item}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};