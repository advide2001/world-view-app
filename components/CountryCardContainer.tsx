import React from "react";
import CountryCard from "./CountryCard";

interface Props {}

const CountryCardContainer = () => {
  return (
    <div className="mt-6 grid grid-cols-4 gap-8">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  );
};

export default CountryCardContainer;
