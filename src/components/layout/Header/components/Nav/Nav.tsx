import Link from 'next/link';

import { NAV_ITEMS } from '@/consts/navItems';

import styles from './Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {NAV_ITEMS.map((item) => (
          <li key={item.name} className={styles.item}>
            <Link href={item.url} className={styles.link}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};