import type { ReactNode } from 'react';

import styles from './HeaderSection.module.scss'

type Props = {
  eyebrow: string;
  title: string | ReactNode;
  description: string | ReactNode;
};

export const HeaderSection = ({ eyebrow, title, description }: Props) => {
  return (
    <section className={styles.headerSection}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.description}>{description}</span>
    </section>
  );
};
