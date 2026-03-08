import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Theme, Language, TemperatureMode, Message } from '../../../shared/types';

interface AppState {
  theme: Theme;
  language: Language;
  temperatureMode: TemperatureMode;
  useSearch: boolean;
  messages: Message[];
  setTheme: (theme: Theme) => void;
  setLanguage: (language: Language) => void;
  setTemperatureMode: (mode: TemperatureMode) => void;
  setUseSearch: (useSearch: boolean) => void;
  addMessage: (message: Message) => void;
  clearMessages: () => void;
}

const temperatureMap: Record<TemperatureMode, number> = {
  precise: 0.0,
  balanced: 0.5,
  creative: 0.7,
  extreme: 1.0,
};

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'light',
      language: 'en',
      temperatureMode: 'balanced',
      useSearch: false,
      messages: [],
      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
      setTemperatureMode: (mode) => set({ temperatureMode: mode }),
      setUseSearch: (useSearch) => set({ useSearch }),
      addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: 'nexus-storage',
      partialize: (state) => ({ theme: state.theme, language: state.language }),
    }
  )
);

export const getTemperature = (mode: TemperatureMode): number => temperatureMap[mode];
