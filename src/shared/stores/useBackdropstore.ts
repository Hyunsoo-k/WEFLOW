import { create } from 'zustand';

type BackdropStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useBackdropStore = create<BackdropStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => {
    useDrawerStore.setState({ isOpen: false });
    set({ isOpen: false });
  }
}));

// @ts-ignore - circular dependency
import { useDrawerStore } from './useDrawerStore';
