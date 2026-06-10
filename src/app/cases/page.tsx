import { PORTFOLIOS } from '@/data/portfolioText';
import { HeaderSectionLayout } from '@/components/layout/sections/HeaderSectionLayout/HeaderSectionLayout';
import { ContentSectionLayout } from '@/components/layout/sections/ContentSectionLayout/ContentSectionLayout';
import { CaseCardBigger } from '@/components/cards/CaseCardBigger/CaseCardBigger';
import { LinkButton } from '@/components/ui/buttons/LinkButton';

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
      <ContentSectionLayout
        isBgSecondary={true}
        eyebrow='FREE DIAGNOSIS'
        title='어떤 서비스가 필요한지 함께 정해드려요'
        description='지금 가진 자료만 보내주시면 무엇을 만들 수 있는지, 무엇을 더 준비하면 좋은지 쉽게 정리해드려요.'
      >
        <ul className={styles.linkBtnList}>
          <li className={styles.item}>
            <LinkButton isActive={true} text='편하게 맡기기' url='' />
          </li>
          <li className={styles.item}>
            <LinkButton isActive={false} text='가격 자세히 보기' url='' />
          </li>
        </ul>
      </ContentSectionLayout>
      <ContentSectionLayout
        isBgSecondary={false}
        eyebrow='FAQ'
        title='자주 묻는 질문'
        description='그 밖에 궁금한 점은 연락주시면 친절히 안내해 드리겠습니다.'
      >
        <></>
      </ContentSectionLayout>
    </main>
  );
};