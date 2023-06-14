import React from "react";
import CountryCardContainer from "@/components/CountryCardContainer";
import SearchControlWrapper from "@/components/SearchControlWrapper";
import siteConfig from "@/site.config.js";
import { useStore } from "@/store/store";

import countries from "../dummyData";

const REGIONS = siteConfig.regions;

export default function Home() {
  // initialize store on the server side, this wil not be available to client components
  useStore.setState({
    searchTerm: "",
    selectedRegion: REGIONS[0].value,
  });

  return (
    <div className="mx-auto mt-6 flex w-[90%] flex-col gap-4">
      <SearchControlWrapper dropdownOptions={REGIONS} />
      <CountryCardContainer countriesData={countries} />
    </div>
  );
}
