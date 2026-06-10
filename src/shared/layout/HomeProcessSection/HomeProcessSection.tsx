import { SERVICE_PROCESS } from '@/data/serviceProcess';
import { BodySection } from '@/shared/layout/BodySection/BodySection';
import { ServiceProcessCard } from '@/shared/card/ServiceProcessCard/ServiceProcessCard';

import styles from './HomeProcessSection.module.scss';

export const HomeProcessSection = () => {
  return (
    <BodySection
      isBgSecondary={false}
      eyebrow='OUR PROCESS'
      title={<><strong>WEFLOW</strong> 만의 제작 프로세스</>}
      description='WEFLOW만의 체계적이고 신속한 프로세스를 확인해 보세요.'
    >
      <ul className={styles.cardList}>
        {SERVICE_PROCESS.steps.map((item) => (
          <li key={item.number} className={styles.item}>
            <ServiceProcessCard item={item} />
          </li>
        ))}
      </ul>
    </BodySection>
  );
};
