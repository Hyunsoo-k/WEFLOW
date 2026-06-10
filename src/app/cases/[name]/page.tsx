import Image from 'next/image';

import { PORTFOLIOS } from '@/data/portfolioText';

import styles from './page.module.scss';

type Props = {
  params: { name: string }
}

export default async function DetailPage({ params }: Props) {
  const { name } = await params;

  const item = PORTFOLIOS.find((item) => item.name === name);

  if (!item) {
    return null;  
  }

  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <Image src={item.img} alt={item.title} fill className={styles.heroImg} />
        <div className={styles.info}>
          <span className={styles.tag}>{item.tag}</span>
          <h2 className={styles.title}>{item.title}</h2>
          <div className={styles.scrollIndicator}>
            <div className={styles.dot} />
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.inner}>
          <div className={styles.main}>
            <h3 className={styles.title}>SUMMARY</h3>
            <span className={styles.desc}>{item.desc}</span>
            <div className={styles.tagList}>
              <span className={styles.tag}>{item.tag}</span>
              <span className={styles.tag}>{item.project}</span>
            </div>
          </div>
          <div className={styles.sub}>
            <div className={styles.imgWrapper}>
              <Image src={item.img} alt={item.title} fill />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.contentSection} ${styles.bgSecondary}`}>
        <div className={styles.inner}>
          <div className={styles.main}>
            <h3 className={styles.title}>PROCESS</h3>
            <span className={styles.desc}>{item.desc}</span>
          </div>
          <div className={styles.sub}>
            <ul className={styles.processList}>
              {item.process.map((item) => (
                <li key={item.desc} className={styles.item}>
                  <div className={styles.processBox}>
                    <span className={styles.step}>{item.step}</span>
                    <span className={styles.name}>{item.name}</span>
                    <span className={styles.desc}>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <div className={styles.inner}>
          <div className={styles.main}>
            <h3 className={styles.title}>OUTPUT</h3>
            <div className={styles.tagList}>
              {item.output.map((item, index) => (
                <span key={`${item} ${index}`} className={styles.tag}>{item}</span>
              ))}
            </div>
          </div>
          <div className={styles.sub}>
            <div className={styles.imgWrapper}>
              <Image src={item.img} alt={item.title} fill />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};