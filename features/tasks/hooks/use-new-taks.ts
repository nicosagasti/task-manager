import { create } from "zustand";

type NewTask = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};
export const useNewTask = create<NewTask>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
