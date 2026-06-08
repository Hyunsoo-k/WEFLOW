import { HomeHeroSection } from '@/components/sections/HomeHeroSection/HomeHeroSection';

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HomeHeroSection />
      </main>
    </div>
  );
}
