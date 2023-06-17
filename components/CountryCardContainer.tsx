"use client";

import React from "react";
import CountryCard from "./CountryCard";
import { useStore } from "@/store/store";

interface Props {}

const CountryCardContainer = ({ countriesData }: any) => {
  const { searchTerm, selectedRegion } = useStore();

  const filteredCountriesData = countriesData.filter((country: any) => {
    const searchTermValidity =
      searchTerm === "" ||
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase());

    const selectedRegionValidity =
      selectedRegion === "All" || country.region === selectedRegion;

    return searchTermValidity && selectedRegionValidity;
  });

  return (
    <div className="mx-auto mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-16 2xl:grid-cols-4">
      {filteredCountriesData.map((country: any) => (
        <CountryCard key={country.name.common} countryData={country} />
      ))}
    </div>
  );
};

export default CountryCardContainer;
