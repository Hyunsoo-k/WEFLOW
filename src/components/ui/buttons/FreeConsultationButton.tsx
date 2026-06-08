import Link from 'next/link';

import styles from './FreeConsultationButton.module.scss';

export const FreeConsultationButton = () => {
  return (
    <Link href='contact' className={styles.freeConsultationButton}>무료진단 받기</Link>
  );
};