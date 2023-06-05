import React from "react";
import SearchBar from "@/components/SearchBar";
import DropdownMenu from "@/components/DropdownMenu";
import CountryCardContainer from "@/components/CountryCardContainer";
import siteConfig from "@/site.config.js";
import countries from "../dummyData";

const REGIONS = siteConfig.regions;

export default function Home() {
  return (
    <div>
      <SearchBar />
      <DropdownMenu
        dropdownOptions={REGIONS}
        dropdownLabel={"Filter by regions"}
      />
      <CountryCardContainer countriesData={countries} />
    </div>
  );
}
