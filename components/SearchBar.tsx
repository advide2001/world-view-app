"use client";

import React, { FC } from "react";
import TextInput from "./TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface Props {
  searchStringValue: string;
  setSearchStringValue: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({
  searchStringValue,
  setSearchStringValue,
}: Props): React.ReactElement {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchStringValue("");
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex items-center gap-4 rounded-md  bg-light-elements px-2 py-4 text-light-input">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <label htmlFor="ipAddress" className="sr-only">
          Search for a country...
        </label>
        <TextInput
          id="search-bar"
          placeholder="Search for a country..."
          value={searchStringValue}
          onChange={(e) => {
            setSearchStringValue(e.target.value);
          }}
          className="flex-1 bg-light-elements font-semibold focus:outline-none"
        />
      </div>
    </form>
  );
}

export default SearchBar;
