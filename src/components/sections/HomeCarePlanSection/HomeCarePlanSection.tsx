'use client';

import { useRef, useState, useEffect, UIEvent, MouseEvent } from 'react';
import { FiMessageSquare } from "react-icons/fi";
import { IoRocketOutline } from "react-icons/io5";
import { LiaWonSignSolid } from "react-icons/lia";
import { FiPhoneCall } from "react-icons/fi";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { LuCircleCheckBig } from "react-icons/lu";

import styles from './HomeCarePlanSection.module.scss';

const CARE_PLAN_ITEMS = [
  { title: 'WEFLOW 케어플랜', content: '제작+운영+광고+관리 원터치', icon: FiMessageSquare },
  { title: '빠른 제작', content: '3일~7일 로켓배송', icon: IoRocketOutline },
  { title: '합리적인 가성비', content: '퀄리티는 높게, 비용은 합리적으로', icon: LiaWonSignSolid },
  { title: '24시간 상담 대기', content: '빠른 상담 및 피드백', icon: FiPhoneCall },
  { title: '운영·광고 지원', content: '사후 관리 서비스', icon: HiArrowTrendingUp },
  { title: '문의 구조 설계', content: '업종별 맞춤 문의 동선 구성', icon: LuCircleCheckBig },
];

export const HomeCarePlanSection = () => {
  const listRef = useRef<HTMLUListElement>(null);
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [isScrollable, setIsScrollable] = useState<boolean>(false);
  const [isDown, setIsDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  const checkScrollable = () => {
    if (listRef.current) {
      const { scrollWidth, clientWidth } = listRef.current;
      setIsScrollable(scrollWidth > clientWidth);
    }
  };

  useEffect(() => {
    checkScrollable();
    window.addEventListener('resize', checkScrollable);
    return () => window.removeEventListener('resize', checkScrollable);
  }, []);

  const handleScroll = (e: UIEvent<HTMLUListElement>) => {
    const target = e.currentTarget;
    const maxScrollLeft = target.scrollWidth - target.clientWidth;
    
    if (maxScrollLeft <= 0) {
      return;
    }

    const currentPercent = (target.scrollLeft / maxScrollLeft) * 100;
    setScrollPercent(currentPercent);
  };

  const handleMouseDown = (e: MouseEvent<HTMLUListElement>) => {
    if (!isScrollable) {
      return;
    }

    setIsDown(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLUListElement>) => {
    if (!isDown || !isScrollable) {
      return;
    }

    e.preventDefault();
    
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 1.5; 
    
    if (listRef.current) {
      listRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const barWidthPercent = (1 / CARE_PLAN_ITEMS.length) * 100;

  return (
    <section className={styles.homeCarePlanSection}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>CARE PLAN</span>
        <h2 className={styles.title}>
          <strong className={styles.strong}>WEFLOW</strong> 만의 케어 플랜 혜택
        </h2>
        <span className={styles.description}>
          고객만을 위한 차별화된 케어를 확인해 보세요.
        </span>
      </header>
      <div className={styles.body}>
        <ul 
          ref={listRef} 
          className={`${styles.list} ${!isScrollable ? styles.center : ''} ${isDown ? styles.active : ''}`} 
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {CARE_PLAN_ITEMS.map((item, index) => (
            <li key={item.title} className={styles.item}>
              <div className={styles.carePlan}>
                <div className={styles.iconWrapper}>
                  {item.icon({ className: styles.icon })}
                </div>
                <div className={styles.textArea}>
                  <p className={styles.title}>{index + 1}. {item.title}</p>
                  <span className={styles.content}>{item.content}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {isScrollable && (
          <div className={styles.indicatorTrack}>
            <div 
              className={styles.indicatorBar} 
              style={{ 
                width: `${barWidthPercent}%`,
                transform: `translateX(${(scrollPercent / 100) * (100 - barWidthPercent) * (100 / barWidthPercent)}%)`
              }} 
            />
          </div>
        )}
      </div>
    </section>
  );
};