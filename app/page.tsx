import React from "react";
import CountryCardContainer from "@/components/CountryCardContainer";
import SearchControlWrapper from "@/components/SearchControlWrapper";
import StoreInitializer from "@/components/StoreInitializer";
import siteConfig from "@/site.config.js";
import { useStore } from "@/store/store";
import { getCountriesData } from "@/utils/commonUtils";

const REGIONS = siteConfig.regions;

export default async function Home() {
  // fetch data from api
  const countriesData = await getCountriesData();

  // initialize store on the server side, this wil not be available to client components
  useStore.setState({
    searchTerm: "",
    selectedRegion: REGIONS[0].value,
  });

  return (
    <div className="mx-auto mt-6 flex w-[90%] flex-col gap-4">
      <StoreInitializer searchterm="" selectedRegion={REGIONS[0].value} />
      <SearchControlWrapper dropdownOptions={REGIONS} />
      <CountryCardContainer countriesData={countriesData} />
    </div>
  );
}
