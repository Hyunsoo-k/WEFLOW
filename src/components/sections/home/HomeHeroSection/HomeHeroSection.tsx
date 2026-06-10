import Image from 'next/image';

import { LinkButton } from '@/components/ui/buttons/LinkButton';

import styles from './HomeHeroSection.module.scss';

const STRENGTH_ITEMS = [
  { title: '케어 플랜', description: '제작·광고·운영' },
  { title: '빠른 제작', description: '3일 ~ 7일' },
  { title: '합리적 비용', description: '가성비 + 퀄리티' },
  { title: '24시간 상담', description: '신속한 피드백' }
];

export const HomeHeroSection = () => {
  return (
    <section className={styles.homeHeroSection}>
      <Image
        src='https://spinnaker.io/images/hero-background.jpg'
        alt='문의로 이어지는 홈페이지를 만듭니다.'
        fill
        className={styles.img}
      />
      <div className={styles.inner}>
        <h1 className={styles.title}>
          문의로 <strong className={styles.strong}>이어지는</strong><br />
          홈페이지를 만듭니다.
        </h1>
        <p className={styles.description}>
          홈페이지 제작부터 광고 연동·운영 관리까지<br />
          단순 제작이 아닌 문의 구조까지 설계합니다.
        </p>
        <ul className={styles.btnList}>
          <li className={styles.item}>
            <LinkButton isActive={true} text='무료진단 받기' url='/contact' />
          </li>
          <li className={styles.item}>
            <LinkButton isActive={false} text='성공사례 보기' url='/cases' />
          </li>
          <li className={styles.item}>
            <LinkButton isActive={false} text='WEFLOW 랜딩 페이지' url='landing' />
          </li>
        </ul>
        <ul className={styles.strengthList}>
          {STRENGTH_ITEMS.map((item) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.strength}>
                <strong className={styles.title}>{item.title}</strong>
                <span className={styles.description}>{item.description}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};