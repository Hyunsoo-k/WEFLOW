import { FLOW_TEXT } from '@/data/flowText';
import { HeaderSection } from '@/shared/layout/HeaderSection/HeaderSection';
import { BodySection } from '@/shared/layout/BodySection/BodySection';
import { LinkButton } from '@/shared/buttons/LinkButton/LinkButton';
import { FlowCard } from '@/shared/card/FlowCard/FlowCard';

import styles from './ServicePage.module.scss';

export const ServicePage = () => {
  return (
    <main className={styles.servicePage}>
      <HeaderSection
        eyebrow='SERVICES'
        title={<>고객분들의 <strong className={styles.strong}>고민을 덜기 위해 </strong><br />묶어서 처리해드립니다.</>}
        description={<>홈페이지 제작은 시작일 뿐이에요.<br />문의가 들어오고, 결과를 확인하고, 수정·관리까지 한 흐름으로 처리해드립니다.</>}
      />
      <BodySection
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
      </BodySection>
      <BodySection
        isBgSecondary={true}
        eyebrow='FREE DIAGNOSIS'
        title='어떤 서비스가 필요한지 함께 정해드려요'
        description='지금 가진 자료만 보내주시면 무엇을 만들 수 있는지, 무엇을 더 준비하면 좋은지 쉽게 정리해드려요.'
      >
        <ul className={styles.linkBtnList}>
          <li className={styles.item}>
            <LinkButton isActive={true} text='편하게 맡기기' url='/contact' />
          </li>
          <li className={styles.item}>
            <LinkButton isActive={false} text='가격 자세히 보기' url='/pricing' />
          </li>
        </ul>
      </BodySection>
      <BodySection
        isBgSecondary={false}
        eyebrow='FAQ'
        title='자주 묻는 질문'
        description='그 밖의 궁금하신 점은 연락주시면 친절히 안내해 드리겠습니다.'
      >
        <ul className={styles.linkBtnList}>
          <li className={styles.item}>
            <LinkButton isActive={true} text='궁금한점 해결하러 가기' url='/faq' />
          </li>
        </ul>
      </BodySection>
    </main>
  );
};