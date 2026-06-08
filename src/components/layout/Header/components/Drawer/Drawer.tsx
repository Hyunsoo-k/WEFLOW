'use client';

import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';

import { NAV_ITEMS } from '@/consts/navItems';
import { useDrawerStore } from '@/stores/useDrawerStore';
import { FreeConsultationButton } from '@/components/ui/buttons/FreeConsultationButton';

import styles from './Drawer.module.scss';

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
          ))}
          <FreeConsultationButton />
        </ul>
      </div>
    </nav>
  );
};