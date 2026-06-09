import { SERVICE_PROCESS } from '@/data/serviceProcess';
import { ServiceProcessCard } from '@/components/cards/ServiceProcessCard/ServiceProcessCard';

import styles from './HomeProcessSection.module.scss';

export const HomeProcessSection = () => {
  return (
    <section className={styles.homeProcessSection}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          <strong className={styles.strong}>WEFLOW</strong> 만의 제작 프로세스
        </h2>
      </header>
      <div className={styles.body}>
        <ul className={styles.list}>
          {SERVICE_PROCESS.steps.map((item) => (
            <li key={item.number} className={styles.item}>
              <ServiceProcessCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};