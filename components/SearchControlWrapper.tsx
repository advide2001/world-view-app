"use client";

import React, { FC, useState } from "react";
import { useStore } from "@/store/store";
import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";

interface Props {
  dropdownOptions: Option[];
}

interface Option {
  label: string;
  value: string;
}

const SearchControlWrapper: FC<Props> = ({ dropdownOptions }) => {
  // fetch store data
  const { searchTerm, selectedRegion } = useStore();
  // set store data
  const setSearchTerm = (searchTerm: string) => {
    useStore.setState({ searchTerm: searchTerm });
  };
  const setSelectedRegion = (region: string) => {
    useStore.setState({ selectedRegion: region });
  };

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <SearchBar
        searchStringValue={searchTerm}
        setSearchStringValue={setSearchTerm}
      />
      <DropdownMenu
        dropdownOptions={dropdownOptions}
        dropdownLabel="Filter by regions"
        selectedDropdownOption={selectedRegion}
        setSelectedDropdownOption={setSelectedRegion}
      />
    </div>
  );
};

export default SearchControlWrapper;
