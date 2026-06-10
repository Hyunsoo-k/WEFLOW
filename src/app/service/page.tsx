import { FLOW_TEXT } from '@/data/flowText';
import { ContentSectionLayout } from '@/components/layout/sections/ContentSectionLayout/ContentSectionLayout';
import { FlowCard } from '@/components/cards/FlowCard/FlowCard';
import { LinkButton } from '@/components/ui/buttons/LinkButton';

import styles from './page.module.scss';
import { HeaderSectionLayout } from '@/components/layout/sections/HeaderSectionLayout/HeaderSectionLayout';

export default function ServicePage() {
  return (
    <main className={styles.page}>
      <HeaderSectionLayout
        eyebrow='SERVICES'
        title={<>고객분들의 <strong className={styles.strong}>고민을 덜기 위해 </strong><br />묶어서 처리해드립니다.</>}
        description={<>홈페이지 제작은 시작일 뿐이에요.<br />문의가 들어오고, 결과를 확인하고, 수정·관리까지 한 흐름으로 처리해드립니다.</>}
      />
      <ContentSectionLayout
        isBgSecondary={false}
        eyebrow='FLOW'
        title='한줄로 이어지는 작업 흐름'
        description='작업 흐름을 한눈에 볼수 있어요.'
      >
        <ul className={styles.flowList}>
          {FLOW_TEXT.map((item) => (
            <li key={item.step} className={styles.item}>
              <FlowCard item={item} />
            </li>
          ))}
        </ul>
      </ContentSectionLayout>
      <ContentSectionLayout
        isBgSecondary={true}
        eyebrow='FREEE DIAGNOSIS'
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
        eyebrow='FREEE DIAGNOSIS'
        title='자주 묻는 질문'
        description='궁금하신 사항이 있으시면 편하게 문의주세요.'
      >
        <>
        </>
      </ContentSectionLayout>
    </main>
  );
}