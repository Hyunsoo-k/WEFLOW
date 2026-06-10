import { HomeHeroSection } from '@/components/sections/home/HomeHeroSection/HomeHeroSection';
import { HomeCarePlanSection } from '@/components/sections/home/HomeCarePlanSection/HomeCarePlanSection';
import { HomeCasesSection } from '@/components/sections/home/HomeCasesSection/HomeCasesSection';
import { HomeProcessSection } from '@/components/sections/home/HomeProcessSection/HomeProcessSection';
import { HomeReviewsSection } from '@/components/sections/home/HomeReviewsSection/HomeReviewsSection';
import { HomePricingSection } from '@/components/sections/home/HomePricingSection/HomePricingSection';

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
