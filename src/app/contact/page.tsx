import { HeaderSectionLayout } from '@/components/layout/sections/HeaderSectionLayout/HeaderSectionLayout';
import { ContentSectionLayout } from '@/components/layout/sections/ContentSectionLayout/ContentSectionLayout';
import { ContactFormContainer } from '@/components/containers/ContactFormContainer/ContactFormContainer';

import styles from './page.module.scss';

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <HeaderSectionLayout
        eyebrow='FREE DIAGNOSIS'
        title='무료 진단 신청'
        description='가진 자료만 보내주시면 무엇을 만들 수 있는지, 무엇을 더 준비하면 좋은지 30분 안에 정리해드려요.'
      />
      <ContentSectionLayout
        isBgSecondary={false}
        eyebrow='CONTACT'
        title='간단하게 끝나는 문의 신청'
        description='접수 후 최대한 빠른 시일안에 연락 드려요.'
      >
        <ContactFormContainer />
      </ContentSectionLayout>
    </main>
  );
}