"use client";

import { useStore } from "@/store/store";
import { useRef } from "react";

interface Props {
  searchterm: string;
  selectedRegion: string;
}

// This component initializes the store on the client side.
// Insert this component into page.tsx component.
const StoreInitializer = ({ searchterm, selectedRegion }: Props) => {
  const initialized = useRef(false);
  if (!initialized.current) {
    useStore.setState({
      searchTerm: searchterm,
      selectedRegion: selectedRegion,
    });
    initialized.current = true;
  }

  return null;
};

export default StoreInitializer;
