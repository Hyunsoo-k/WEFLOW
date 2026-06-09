import { HomeHeroSection } from '@/components/sections/HomeHeroSection/HomeHeroSection';
import { HomeCarePlanSection } from '@/components/sections/HomeCarePlanSection/HomeCarePlanSection';
import { HomeCasesSection } from '@/components/sections/HomeCasesSection/HomeCasesSection';
import { HomeProcessSection } from '@/components/sections/HomeProcessSection/HomeProcessSection';

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHeroSection />
        <HomeCarePlanSection />
        <HomeCasesSection />
        <HomeProcessSection />
      </main>
    </div>
  );
}
