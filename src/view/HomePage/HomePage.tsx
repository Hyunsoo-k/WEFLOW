import { HomeHeroSection } from '@/shared/layout/HomeHeroSection/HomeHeroSection';
import { HomeCarePlanSection } from '@/shared/layout/HomeCarePlanSection/HomeCarePlanSection';
import { HomeCasesSection } from '@/shared/layout/HomeCasesSection/HomeCasesSection';
import { HomeProcessSection } from '@/shared/layout/HomeProcessSection/HomeProcessSection';
import { HomeReviewsSection } from '@/shared/layout/HomeReviewsSection/HomeReviewsSection';
import { HomePricingSection } from '@/shared/layout/HomePricingSection/HomePricingSection';

import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <main className={styles.homePage}>
      <HomeHeroSection />
      <HomeCarePlanSection />
      <HomeCasesSection />
      <HomeProcessSection />
      <HomeReviewsSection />
      <HomePricingSection />
    </main>
  )
}// git force sync
