import { create } from "zustand";

type User = {
  user: string;
  // latitude: number;
  // longitude:number;
  region: { latitude: number; longitude: number };
  addUser: (text: string) => void;
  addRegion: (latitude: number, longitude: number) => void;
};

export const useUserStore = create<User>((set) => ({
  user: "",
  region: { latitude: 0, longitude: 0 },
  addUser: (text: string) => set((state) => ({ user: text })),
  addRegion: (latitude: number, longitude: number) =>
    set((state) => ({ region: { latitude, longitude } })),
}));
