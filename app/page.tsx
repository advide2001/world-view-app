import React from "react";
import CountryCardContainer from "@/components/CountryCardContainer";
import SearchControlWrapper from "@/components/SearchControlWrapper";
import siteConfig from "@/site.config.js";
import countries from "../dummyData";

const REGIONS = siteConfig.regions;

export default function Home() {
  return (
    <div className="mx-auto mt-6 flex w-[90%] flex-col gap-4">
      <SearchControlWrapper dropdownOptions={REGIONS} />
      <CountryCardContainer countriesData={countries} />
    </div>
  );
}
