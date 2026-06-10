'use client';

import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { FAQ_TEXT } from '@/data/faqText';

import styles from './FaqListContainer.module.scss';

export const FaqListContainer = () => {
  const [currentFaq, setCurrentFaq] = useState<string | null>(null);

  const handleClick = (title: string) => {
    setCurrentFaq((prev) => (prev === title ? null : title));
  };

  return (
    <div className={styles.faqListContainer}>
      <ul className={styles.faqList}>
        {FAQ_TEXT.map((item) => {
          const isOpen = currentFaq === item.title;
          return (
            <li key={item.title} className={styles.item}>
              <div
                className={`${styles.faq} ${isOpen ? styles.open : ''}`}
                onClick={() => handleClick(item.title)}
              >
                <div className={styles.title}>
                  <span className={styles.text}>{item.title}</span>
                  <IoIosArrowDown
                    className={`${styles.arrowIcon} ${isOpen ? styles.rotated : ''}`}
                  />
                </div>
                <div className={`${styles.content} ${isOpen ? styles.visible : ''}`}>
                  <span className={styles.text}>{item.content}</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
