"use client";

import React from "react";
import TextInput from "./TextInput";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface Props {}

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const SearchBar = () => (
  <form onSubmit={handleSubmit}>
    <div className="flex items-center gap-4 rounded-md bg-light-elements px-2 py-4 text-light-input">
      <MagnifyingGlassIcon className="h-6 w-6" />
      <label htmlFor="ipAddress" className="sr-only">
        Search for a country...
      </label>
      <TextInput
        id="search-bar"
        placeholder="Search for a country..."
        value=""
        onChange={() => {}}
        className="bg-light-elements focus:outline-none"
      />
    </div>
  </form>
);

export default SearchBar;
