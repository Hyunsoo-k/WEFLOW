import Link from 'next/link';

import styles from './LinkButton.module.scss';

type Props = {
  isActive: boolean;
  text: string;
  url: string;
  isFullWidth?: boolean;
  onClick?: () => void;
};

export const LinkButton = ({ isActive, text, url, isFullWidth, onClick }: Props) => {
  return (
    <Link
      href={url}
      onClick={onClick}
      className={`${styles.linkButton} ${isActive ? styles.active : ''} ${isFullWidth ? styles.fullWidth : ''}`}
    >
      {text}
    </Link>
  );
};
