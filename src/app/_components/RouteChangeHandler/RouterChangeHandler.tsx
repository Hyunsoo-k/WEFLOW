'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useDrawerStore } from '@/shared/store/useDrawerStore';
import { useBackdropStore } from '@/shared/store/useBackdropstore';

export const RouteChangeHandler = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    useDrawerStore.setState({ isOpen: false });
    useBackdropStore.setState({ isOpen: false });
  }, [pathname, searchParams]);

  return null;
};