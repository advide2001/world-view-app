import React from "react";
import CountryCard from "./CountryCard";

interface Props {}

const CountryCardContainer = ({ countriesData }: any) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-8">
      {countriesData.map((country: any) => (
        <CountryCard key={country.name} countryData={country} />
      ))}
    </div>
  );
};

export default CountryCardContainer;
