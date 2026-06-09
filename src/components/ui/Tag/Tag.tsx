'use client';

import type { Tag as TagType } from '@/types/reviewItem';

import styles from './Tag.module.scss';

type Props ={
  text: TagType;
  currentTag: TagType;
  onClick: (value: TagType) => void;
};

export const Tag = ({ text, currentTag, onClick }: Props) => {
  return (
    <span
      onClick={() => onClick(text)}
      className={`${styles.tag} ${currentTag === text ? styles.active : ''}`}
    >
      #{text}
    </span>
  );
};