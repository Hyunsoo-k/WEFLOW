import type { CaseItem } from '@/types/caseItem';
import { CASES_PAGE } from '@/data/casesText';
import { LinkButton } from '@/components/ui/buttons/LinkButton';
import { OverflowCarousel } from '@/components/carousels/OverflowCarousel/OverflowCarousel';

import styles from './HomeCasesSection.module.scss';

const CASESE: CaseItem[] = CASES_PAGE.cases.slice(0, 12);

export const HomeCasesSection = () => {
  return (
    <section className={styles.homeCasesSection}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>OUR CASES</span>
        <h2 className={styles.title}>
          다양한 업종의 <br className={styles.br} />
          <strong className={styles.strong}>성공 사례</strong>를 확인하세요.
        </h2>
        <small className={styles.description}>
          어디에서도 볼 수 없는 <br className={styles.br} />업종별 전환 최적화 사례를 직접 학인하세요.
        </small>
        {/* <LinkButton isActive={true} text='살펴보기' url='/reservation' /> */}
      </header>
      <div className={styles.body}>
        <OverflowCarousel items={CASESE} />
      </div>
    </section>
  );
};