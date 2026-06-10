'use client';

import { createPortal } from 'react-dom';

import { useBackdropStore } from '@/shared/store/useBackdropstore';

import styles from './Backdrop.module.scss';

export const Backdrop = () => {
  const { isOpen, close } = useBackdropStore();

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div onClick={close} className={styles.backdrop} />,
    document.body
  );
};
