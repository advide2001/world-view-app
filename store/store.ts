import { create } from "zustand";

interface searchFormStore {
  searchTerm: string;
  selectedRegion: string;
}

export const useStore = create<searchFormStore>((set) => ({
  searchTerm: "",
  selectedRegion: "all",
}));
