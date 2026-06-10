import { IoRocketOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";

import type { PricingItem, PlanType } from '@/type/pricing';
import { LinkButton } from '@/shared/buttons/LinkButton/LinkButton';

import styles from './PricingCard.module.scss';

type Props = {
  planType: PlanType;
  item: PricingItem;
};

export const PricingCard = ({ planType, item }: Props) => {
  const getProductionIconConfig = () => {
    if (planType !== 'produce') {
      return { Icon: null, color: '' };
    }

    switch (item.tier) {
      case 'BASIC':
        return { Icon: IoRocketOutline, color: '#EF4444' };
      case 'PRO':
        return { Icon: FaStar, color: '#3B82F6' };
      default:
        return { Icon: GiQueenCrown, color: '#EAB308' };
    }
  };

  const { Icon: ProductionIcon, color: iconColor } = getProductionIconConfig();

  return (
    <div className={`${styles.pricingCard} ${item.tier === 'PRO' ? styles.active : ''}`}>
      <header className={styles.header}>
        <h3 className={styles.title}>
          {ProductionIcon && (
            <ProductionIcon className={styles.icon} color={iconColor} />
          )}
          {item.name}
        </h3>
      </header>
      <div className={styles.body}>
        {item.originalPrice && (
          <span className={styles.originalPrice}>{item.originalPrice}</span>
        )}
        <strong className={styles.price}>
          {item.price}
          <span className={styles.unit}>{item.unit}</span>
        </strong>
        <span className={styles.description}>{item.desc}</span>
        <ul className={styles.list}>
          {item.checklist?.map((check) => (
            <li key={check.item} className={styles.item}>
              <span className={styles.text}>
                <FaCheck className={styles.icon} />{check.item}
              </span>
            </li>
          ))}
          {item.tags?.map((tag, index) => (
            <li key={`${tag}-${index}`} className={styles.item}>
              <span className={styles.text}>
                <FaCheck className={styles.icon} />{tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <footer className={styles.footer}>
        <LinkButton
          isActive={item.tier === 'PRO'}
          text='견적 보기'
          url='/pricing'
          isFullWidth={true}
        />
      </footer>
    </div>
  );
};
