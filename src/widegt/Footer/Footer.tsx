import Link from 'next/link';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { FaSquareInstagram } from 'react-icons/fa6';
import { IoLogoFacebook } from 'react-icons/io';
import { SiNaver } from 'react-icons/si';

import styles from './Footer.module.scss';

const ICONS = [
  { icon: RiKakaoTalkFill, color: '#FFE812', url: 'https://pf.kakao.com/_xntCbX' },
  { icon: FaSquareInstagram, color: '#FF1D6C', url: 'https://www.instagram.com/weflowlab.kr' },
  { icon: IoLogoFacebook, color: '#217CF4', url: 'https://www.facebook.com/people/Weflow-%EC%9C%84%ED%94%8C%EB%A1%9C%EC%9A%B0/61590187124682/' },
  { icon: SiNaver, color: '#0CE46B', url: 'https://m.blog.naver.com/weflowlab' },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.banner}>
            <Link href='/' className={styles.bannerLink}>WEFLOW</Link>
          </h2>
          <span className={styles.description}>
            제작부터 관리까지<br />
            비즈니스 성장을 함께 합니다.
          </span>
          <ul className={styles.iconList}>
            {ICONS.map((item) => (
              <li key={item.url} className={styles.item}>
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.iconLink}
                >
                  <item.icon color={item.color} className={styles.icon} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.businessInfo}>
          <span className={styles.title}>사업자 정보</span>
          <ul className={styles.infoList}>
            <li className={styles.item}><span className={styles.text}>대표 : 신서준</span></li>
            <li className={styles.item}><span className={styles.text}>사업자등록번호 : 884-07-03480</span></li>
            <li className={styles.item}><span className={styles.text}>이메일 : contact@weflowlab.kr</span></li>
            <li className={styles.item}><span className={styles.text}>운영시간  : 연중무휴 24시간 상담가능</span></li>
          </ul>
        </div>
        <div className={styles.lawInfo}>
          <span className={styles.title}>법무</span>
          <ul className={styles.infoList}>
            <li className={styles.item}><Link href='/' className={styles.lawLink}>개인정보 처리방침</Link></li>
            <li className={styles.item}><Link href='/' className={styles.lawLink}>이용약관</Link></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.copyright}>© 2026 WEFLOW. All rights reserved.</span>
      </div>
    </footer>
  );
};
