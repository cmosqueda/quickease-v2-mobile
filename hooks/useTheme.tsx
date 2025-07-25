import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

type ThemeStore = {
  theme?: "rush" | "focus";
  setTheme: (theme: "rush" | "focus") => void;
};

const zustandStorage: PersistStorage<ThemeStore> = {
  getItem: async (name) => {
    const value = await AsyncStorage.getItem(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: async (name, value) => {
    await AsyncStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: async (name) => {
    await AsyncStorage.removeItem(name);
  },
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "rush",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "QUICKEASE_STORED_THEME",
      storage: zustandStorage,
    }
  )
);
