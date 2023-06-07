import React from "react";
import SearchBar from "@/components/SearchBar";
import DropdownMenu from "@/components/DropdownMenu";
import CountryCardContainer from "@/components/CountryCardContainer";
import siteConfig from "@/site.config.js";
import countries from "../dummyData";

const REGIONS = siteConfig.regions;

export default function Home() {
  return (
    <div className="mx-auto mt-6 flex w-[90%] flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="w-full">
          <SearchBar />
        </div>
        <DropdownMenu
          dropdownOptions={REGIONS}
          dropdownLabel={"Filter by regions"}
        />
      </div>
      <CountryCardContainer countriesData={countries} />
    </div>
  );
}
