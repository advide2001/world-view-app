"use client";

import React, { FC, useState } from "react";
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
  const [searchString, setSearchString] = useState("");
  const [regionSelected, setRegionSelected] = useState(
    dropdownOptions[0].value
  );

  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <SearchBar
        searchStringValue={searchString}
        setSearchStringValue={setSearchString}
      />
      <DropdownMenu
        dropdownOptions={dropdownOptions}
        dropdownLabel={"Filter by regions"}
        selectedDropdownOption={regionSelected}
        setSelectedDropdownOption={setRegionSelected}
      />
    </div>
  );
};

export default SearchControlWrapper;
