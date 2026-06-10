import { HeaderSectionLayout } from '@/components/layout/sections/HeaderSectionLayout/HeaderSectionLayout';
import { ContentSectionLayout } from '@/components/layout/sections/ContentSectionLayout/ContentSectionLayout';
import { FaqListContainer } from '@/components/containers/FaqListContainer/FaqListContainer';
import { LinkButton } from '@/components/ui/buttons/LinkButton';

import styles from './page.module.scss';

export default function FaqPage() {
  return (
    <main className={styles.page}>
      <HeaderSectionLayout
        eyebrow='FAQ'
        title='자주 묻는 질문'
        description='제작·가격·운영·계약과 관련된 질문을 카테고리별로 정리했어요. 원하는 답을 찾지 못하면 편하게 문의 주세요.'
      />
      <ContentSectionLayout
        isBgSecondary={false}
        eyebrow='LIST'
        title='자주 묻는 질문들을 모아놓은 곳이에요.'
        description=''
      >
        <FaqListContainer />
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
    </main>
  );
}