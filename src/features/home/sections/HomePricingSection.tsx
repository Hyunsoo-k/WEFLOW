import { PRODUCTION_PLANS } from '../data/pricingText';
import { ContentSectionLayout } from '@/shared/layout/sections/ContentSectionLayout';

import { PricingCard } from '@/features/pricing/components/PricingCard';

import styles from './HomePricingSection.module.scss';

export const HomePricingSection = () => {
  const items = PRODUCTION_PLANS.plans.slice(0, 3);

  return (
    <ContentSectionLayout
      isBgSecondary={false}
      eyebrow='PRICING'
      title={<><strong>투명한</strong> 가격 안내</>}
      description='비즈니스 목적에 맞는 플랜을 선택해 보세요.'
    >
      <ul className={styles.cardList}>
        {items.map((item) => (
          <li key={item.name} className={styles.item}>
            <PricingCard planType='produce' item={item} />
          </li>
        ))}
      </ul>
    </ContentSectionLayout>
  );
};
