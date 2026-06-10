import { IoRocketOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";

import type { ProductionPlanItem, CarePlanItem, AdPlanItem, PlanType } from '@/types/pricing';
import { LinkButton } from '@/components/ui/buttons/LinkButton';

import styles from './PricingCard.module.scss';

type Props = {
  planType: PlanType;
  item: ProductionPlanItem | CarePlanItem | AdPlanItem;
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
        <span className={styles.originalPrice}>{item.originalPrice}</span>
        <strong className={styles.price}>
          {item.price}
          <span className={styles.unit}>{item.unit}</span>
        </strong>
        <span className={styles.description}>{item.desc}</span>
        <ul className={styles.list}>
          {item.checklist?.map((item) => (
            <li key={item.item} className={styles.item}>
              <span className={styles.text}>
                <FaCheck className={styles.icon} />{item.item}
              </span>
            </li>
          ))}
          {item.tags?.map((item) => (
            <li key={item.item} className={styles.item}>
              <span className={styles.text}>
                <FaCheck className={styles.icon} />{item}
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