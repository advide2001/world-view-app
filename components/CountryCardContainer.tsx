"use client";

import React from "react";
import CountryCard from "./CountryCard";
import { useStore } from "@/store/store";

interface Props {}

const CountryCardContainer = ({ countriesData }: any) => {
  const searchTerm = useStore((state) => state.searchTerm);
  const selectedRegion = useStore((state) => state.selectedRegion);

  console.log("making request with searchTerm: ", searchTerm);
  console.log("making request with selectedRegion: ", selectedRegion);

  return (
    <div className="mx-auto mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-16 2xl:grid-cols-4">
      {countriesData.map((country: any) => (
        <CountryCard key={country.name} countryData={country} />
      ))}
    </div>
  );
};

export default CountryCardContainer;
