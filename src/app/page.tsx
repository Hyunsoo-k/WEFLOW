import { HomeHeroSection } from '@/components/sections/HomeHeroSection/HomeHeroSection';
import { HomeCarePlanSection } from '@/components/sections/HomeCarePlanSection/HomeCarePlanSection';
import { HomeCasesSection } from '@/components/sections/HomeCasesSection/HomeCasesSection';
import { HomeProcessSection } from '@/components/sections/HomeProcessSection/HomeProcessSection';
import { HomeReviewsSection } from '@/components/sections/HomeReviewsSection/HomeReviewsSection';
import { HomePricingSection } from '@/components/sections/HomePricingSection/HomePricingSection';

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHeroSection />
        <HomeCarePlanSection />
        <HomeCasesSection />
        <HomeProcessSection />
        <HomeReviewsSection />
        <HomePricingSection />
      </main>
    </div>
  );
}
