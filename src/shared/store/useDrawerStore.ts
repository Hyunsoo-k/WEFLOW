import { create } from 'zustand';

import { useBackdropStore } from './useBackdropstore';

type DrawerStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useDrawerStore = create<DrawerStore>((set) => ({
  isOpen: false,
  open: () => {
    useBackdropStore.setState({ isOpen: true });
    set({ isOpen: true });
  },
  close: () => {
    useBackdropStore.setState({ isOpen: false });
    set({ isOpen: false });
  }
}));