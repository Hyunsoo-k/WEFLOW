import type { CaseItem } from '@/types/caseItem';
import { CASES_PAGE } from '@/data/casesText';
import { OverflowCarousel } from '@/components/carousels/OverflowCarousel/OverflowCarousel';
import { ContentSectionLayout } from '@/components/layout/sections/ContentSectionLayout/ContentSectionLayout';

import styles from './HomeCasesSection.module.scss';

const CASESE: CaseItem[] = CASES_PAGE.cases.slice(0, 12);

export const HomeCasesSection = () => {
  return (
    <ContentSectionLayout
      isBgSecondary={true}
      eyebrow='OUR CASES'
      title={<>다양한 업종의 <br /><strong>성공 사례</strong>를 확인하세요.</>}
      description={<>어디에서도 볼 수 없는 <br />업종별 전환 최적화 사례를 직접 학인하세요.</>}
    >
      <OverflowCarousel items={CASESE} />
    </ContentSectionLayout>
  );
};