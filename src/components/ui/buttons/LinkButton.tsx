import Link from 'next/link';

import styles from './LinkButton.module.scss';

type Props = {
  isActive: boolean;
  text: string;
  url: string;
};

export const LinkButton = ({ isActive, text, url }: Props) => {
  return (
    <Link
      href={url}
      className={`${styles.linkButton} ${isActive ? styles.active : ''}`}
    >
      {text}
    </Link>
  );
};