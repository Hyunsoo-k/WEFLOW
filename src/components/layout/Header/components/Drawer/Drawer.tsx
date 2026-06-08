'use client';

import Link from 'next/link';
import { RxCross2 } from "react-icons/rx";
import { GrHomeRounded } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import { FiTool } from "react-icons/fi";
import { SlDocs } from "react-icons/sl";
import { IoCalendarClearOutline } from "react-icons/io5";

import { useDrawerStore } from '@/stores/useDrawerStore';

import styles from './Drawer.module.scss';

const NAV_ITEMS = [
  { name: '홈', url: '/', icon: GrHomeRounded },
  { name: '서비스', url: '/service', icon: GrServices },
  { name: '제작 플랜 & 가격 안내', url: '/pricing', icon: FiTool },
  { name: '성공 사례', url: '/cases', icon: SlDocs },
  { name: '예약', url: '/reservation', icon: IoCalendarClearOutline }
];

export const Drawer = () => {
  const { isOpen, close } = useDrawerStore();

  return (
    <nav className={`${styles.drawer} ${isOpen ? styles.open : styles.close}`}>
      <header className={styles.header}>
        <h2 className={styles.brand}>WEFLOW</h2>
        <RxCross2 className={styles.icon} onClick={close} />
      </header>
      <div className={styles.body}>
        <ul className={styles.list}>
          {NAV_ITEMS.map((item) => (
            <li key={item.name} className={styles.item}>
              <Link href={item.url} className={styles.link}>
                <item.icon className={styles.icon} />
                <span className={styles.name}>{item.name}</span>
              </Link>
            </li>
          ))
          }
        </ul>
      </div>
    </nav>
  );
};