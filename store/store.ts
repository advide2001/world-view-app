import { create } from "zustand";

const useStore = create<{
  searchTerm: string;
  selectedRegion: string;
}>((set) => ({
  searchTerm: "",
  selectedRegion: "",

  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  setSelectedRegion: (selectedRegion: string) => set({ selectedRegion }),
}));
