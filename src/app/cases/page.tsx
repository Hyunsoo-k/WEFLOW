import { PORTFOLIOS } from '@/data/portfolioText';
import { HeaderSectionLayout } from '@/components/layout/sections/HeaderSectionLayout/HeaderSectionLayout';
import { ContentSectionLayout } from '@/components/layout/sections/ContentSectionLayout/ContentSectionLayout';
import { CaseCardBigger } from '@/components/cards/CaseCardBigger/CaseCardBigger';

import styles from './page.module.scss';

export default function CasesPage() {
  return (
    <main className={styles.page}>
      <HeaderSectionLayout
        eyebrow='CASES'
        title={<><strong>WEFLOW</strong>와 함께한 <strong>사례</strong>들을 확인해보세요.</>}
        description='마음에 드시는 작업물이 있다면 참고하여 만들어 드립니다.'
      />
      <ContentSectionLayout
        isBgSecondary={false}
        eyebrow='DETAIL'
        title='홈페이지 제작 사례'
        description='업종과 서비스 성격에 맞춰 첫 화면, 문의 버튼, 상세 설명 흐름을 다듬은 작업입니다.'
      >
        <>
          <ul className={styles.cardList}>
            {PORTFOLIOS.map((item) => (
              <li key={item.title} className={styles.imte}>
                <CaseCardBigger item={item} />
              </li>
            ))}
          </ul>
        </>
      </ContentSectionLayout>
    </main>
  );
};