'use client';

import Link from 'next/link';
import Image from 'next/image';
import { CiMenuBurger } from "react-icons/ci";

import { useDrawerStore } from '@/stores/useDrawerStore';
import { Drawer } from './components/Drawer/Drawer';

import styles from './Header.module.scss';

export const Header = () => {
  const { open: drawerOpen } = useDrawerStore();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <h1 className={styles.banner}>
            <Link href='/' className={styles.bannerLink}>
              <Image
                src='/logo/logo.png'
                alt='WEFLOW'
                width={48}
                height={48}
                className={styles.bannerImg}      
              />
              <span className={styles.bannerText}>WEFLOW</span>
            </Link>
          </h1>
          <CiMenuBurger onClick={drawerOpen} className={styles.burgerIcon} />
        </div>
      </header>
      <Drawer />
    </>
  );
};