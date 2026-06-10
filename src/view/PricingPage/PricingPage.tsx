import { AD_PLANS, CARE_PLANS, PRODUCTION_PLANS } from '@/data/pricingText';
import { HeaderSection } from '@/shared/layout/HeaderSection/HeaderSection';
import { BodySection } from '@/shared/layout/BodySection/BodySection';
import { LinkButton } from '@/shared/buttons/LinkButton/LinkButton';
import { PricingCard } from '@/shared/card/PricingCard/PricingCard';

import styles from './PricingPage.module.scss';

const PRODUCTION_PLAN_ITEMS = PRODUCTION_PLANS.plans;
const CARE_PLAN_ITEMS = CARE_PLANS.plans;
const AD_PLANS_ITEMS = AD_PLANS.plans;

export const PricingPage = () => {
  return (
    <main className={styles.pricingPage}>
       <HeaderSection
        eyebrow='COMPARE ALL'
        title={<>모든 가격을 <strong>한눈에</strong> 비교하세요</>}
        description='제작·케어·광고 등 모든 가격을 한눈에 확인해 보세요.'
      />
      <BodySection
        isBgSecondary={false}
        eyebrow='PRCING'
        title={<>WEFLOW만의 <strong>합리적인</strong> 가격</>}
        description='비즈니스 목적에 맞는 플랜을 선택해 보세요.'
      >
        <div className={styles.listBox}>
          <ul className={styles.cardList}>
            {PRODUCTION_PLAN_ITEMS.map((item, index) => (
              <li key={index} className={styles.item}>
                <PricingCard planType='produce' item={item} />
              </li>
            ))}
          </ul>
          <ul className={styles.cardList}>
            {CARE_PLAN_ITEMS.map((item, index) => (
              <li key={index} className={styles.item}>
                <PricingCard planType='care' item={item} />
              </li>
            ))}
          </ul>
          <ul className={styles.cardList}>
            {AD_PLANS_ITEMS.map((item, index) => (
              <li key={index} className={styles.item}>
                <PricingCard planType='ad' item={item} />
              </li>
            ))}
          </ul>
        </div>
      </BodySection>
      <BodySection
        isBgSecondary={true}
        eyebrow='FREE DIAGNOSIS'
        title='어떤 서비스가 필요한지 함께 정해드려요'
        description='지금 가진 자료만 보내주시면 무엇을 만들 수 있는지, 무엇을 더 준비하면 좋은지 쉽게 정리해드려요.'
      >
        <ul className={styles.linkBtnList}>
          <li className={styles.item}>
            <LinkButton isActive={true} text='편하게 맡기기' url='/contact' />
          </li>
          <li className={styles.item}>
            <LinkButton isActive={false} text='가격 자세히 보기' url='/pricing' />
          </li>
        </ul>
      </BodySection>
      <BodySection
        isBgSecondary={false}
        eyebrow='FAQ'
        title='자주 묻는 질문'
        description='그 밖에 궁금한 점은 연락주시면 친절히 안내해 드리겠습니다.'
      >
        <ul className={styles.linkBtnList}>
          <li className={styles.item}>
            <LinkButton isActive={true} text='궁금한점 해결하러 가기' url='/faq' />
          </li>
        </ul>
      </BodySection>
    </main>
  );
};