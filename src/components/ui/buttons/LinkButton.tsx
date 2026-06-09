import Link from 'next/link';

import styles from './LinkButton.module.scss';

type Props = {
  isActive: boolean;
  text: string;
  url: string;
  isFullWidth?: boolean;
};

export const LinkButton = ({ isActive, text, url, isFullWidth }: Props) => {
  return (
    <Link
      href={url}
      className={`${styles.linkButton} ${isActive ? styles.active : ''} ${isFullWidth ? styles.fullWidth : ''}`}
    >
      {text}
    </Link>
  );
};