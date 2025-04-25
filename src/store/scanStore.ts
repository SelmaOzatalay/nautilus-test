// app/store/useCartStore.ts
import { create } from 'zustand';

import { Model, Level, IssueCategory } from '@/lib/types';

type ScanStore = {
  model: Model;
  level: Level;
  categories: IssueCategory[];
  setModel: (item: Model) => void;
  removeModel: () => void;
  setLevel: (level: Level) => void;
  removeLevel: () => void;
  setCategories: (categories: IssueCategory[]) => void;
  removeCategories: () => void;
};

export const useScanStore = create<ScanStore>((set) => ({
  model: {} as Model,
  level: {} as Level,
  categories: [],
  setModel: (item) =>
    set(() => ({
      model: item,
    })),
  removeModel: () =>
    set(() => ({
      model: {} as Model,
    })),
  setLevel: (level) =>
    set(() => ({
      level: level,
    })),
  removeLevel: () =>
    set(() => ({
      level: {} as Level,
    })),
  setCategories: (categories) => 
    set(() => ({
      categories: categories,
    })),
  removeCategories: () =>
    set(() => ({
      categories: [],
    }))
}));
