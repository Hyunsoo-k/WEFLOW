import { IoRocketOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";

import type { PricingItem } from '@/types/pricingItem';

import styles from './PricingCard.module.scss';
import { LinkButton } from '@/components/ui/buttons/LinkButton';

type Props = {
  item: PricingItem;
};

export const PricingCard = ({ item }: Props) => {
  const Icon =
    item.tier === 'BASIC' ? IoRocketOutline :
    item.tier === 'PRO' ? FaStar : GiQueenCrown;

  const iconColor =
    item.tier === 'BASIC' ? '#EF4444' :
    item.tier === 'PRO' ? '#3B82F6' : '#EAB308';

  return (
    <div className={`${styles.pricingCard} ${item.tier === 'PRO' ? styles.active : ''}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>
          <Icon className={styles.icon} style={{ color: iconColor }} />
          {item.name}
        </h3>
      </header>
      <div className={styles.body}>
        <span className={styles.originalPrice}>{item.originalPrice}</span>
        <strong className={styles.price}>
          {item.price}
          <span className={styles.unit}>{item.unit}</span>
        </strong>
        <span className={styles.description}>{item.description}</span>
        <ul className={styles.list}>
          {item.checklist.map((item) => (
            <li key={item.item} className={styles.item}>
              <span className={styles.text}>
                <FaCheck className={styles.icon} />{item.item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles.footer}>
        <LinkButton
          isActive={item.tier === 'PRO' ? true : false}
          text='견적 보기'
          url='/'
          isFullWidth={true}
        />
      </footer>
    </div>
  );
};