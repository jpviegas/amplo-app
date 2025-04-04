import { create } from "zustand";

type User = {
  user: string;
  addUser: (text: string) => void;
};

export const useUserStore = create<User>((set) => ({
  user: "",
  addUser: (text: string) => set((state) => ({ user: text })),
}));
