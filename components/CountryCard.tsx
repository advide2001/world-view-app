import React from "react";
import Image from "next/image";
import { formatPopulation } from "../utils/commonUtils";

interface Props {}

const CountryCard = ({ countryData }: any) => {
  return (
    <div className="inline-flex flex-col overflow-hidden rounded-lg bg-light-elements">
      <Image
        width={300}
        height={150}
        src={countryData.flags.png}
        alt="flag"
        className="w-full object-cover"
      />
      <div className="flex flex-col gap-4 px-6 py-10">
        <p className="text-2xl font-extrabold">{countryData.name}</p>
        <div>
          <p>
            <span className="font-semibold">Population: </span>
            {formatPopulation(countryData.population)}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {countryData.region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {countryData.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
