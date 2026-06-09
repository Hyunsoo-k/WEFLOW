import { PRODUCTION_PLANS } from '@/data/pricingText';
import { PricingCard } from '@/components/cards/PricingCard/PricingCard';

import styles from './HomePricingSection.module.scss';

export const HomePricingSection = () => {
  const items = PRODUCTION_PLANS.plans;

  return (
    <section className={styles.homePricingSection}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>PRICING</span>
        <h2 className={styles.title}>
          <strong className={styles.strong}>투명한</strong> 가격 안내
        </h2>
        <span className={styles.description}>비즈니스 목적에 맞는 플랜을 선택해 보세요.</span>
      </header>
      <div className={styles.body}>
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.name} className={styles.item}>
              <PricingCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};