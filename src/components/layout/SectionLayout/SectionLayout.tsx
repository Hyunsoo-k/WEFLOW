import type { ReactNode } from 'react';

import styles from './SectionLayout.module.scss';

type Props = {
  isBgSecondary: boolean;
  eyebrow: string | ReactNode;
  title: string | ReactNode;
  description: string | ReactNode;
  children: ReactNode;
};

export const SectionLayout = ({ isBgSecondary, eyebrow, title, description, children }: Props) => {
  return (
    <section className={`${styles.sectionLayout} ${isBgSecondary ? styles.bgSecondary : ''}`}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.description}>
          {description}
        </span>
      </header>
      <div className={styles.body}>
        {children}
      </div>
    </section>
  );
};