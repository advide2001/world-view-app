import React from "react";
import Image from "next/image";
import { formatPopulation } from "../utils/commonUtils";

interface Props {}

const dummy_country_data = {
  name: "India",
  topLevelDomain: [".in"],
  alpha2Code: "IN",
  alpha3Code: "IND",
  callingCodes: ["91"],
  capital: "New Delhi",
  altSpellings: ["IN", "Bhārat", "Republic of India", "Bharat Ganrajya"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 1380004385,
  latlng: [20, 77],
  demonym: "Indian",
  area: 3287590,
  gini: 35.7,
  timezones: ["UTC+05:30"],
  borders: ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"],
  nativeName: "भारत",
  numericCode: "356",
  flags: {
    svg: "https://flagcdn.com/in.svg",
    png: "https://flagcdn.com/w320/in.png",
  },
  currencies: [
    {
      code: "INR",
      name: "Indian rupee",
      symbol: "₹",
    },
  ],
  languages: [
    {
      iso639_1: "hi",
      iso639_2: "hin",
      name: "Hindi",
      nativeName: "हिन्दी",
    },
    {
      iso639_1: "en",
      iso639_2: "eng",
      name: "English",
      nativeName: "English",
    },
  ],
  translations: {
    br: "India",
    pt: "Índia",
    nl: "India",
    hr: "Indija",
    fa: "هند",
    de: "Indien",
    es: "India",
    fr: "Inde",
    ja: "インド",
    it: "India",
    hu: "India",
  },
  flag: "https://flagcdn.com/in.svg",
  regionalBlocs: [
    {
      acronym: "SAARC",
      name: "South Asian Association for Regional Cooperation",
    },
  ],
  cioc: "IND",
  independent: true,
};

const CountryCard = () => {
  return (
    <div className="inline-flex flex-col overflow-hidden rounded-lg bg-light-elements">
      <Image
        width={300}
        height={150}
        src={dummy_country_data.flags.png}
        alt="flag"
        className="w-full object-cover"
      />
      <div className="flex flex-col gap-4 px-6 py-10">
        <p className="text-2xl font-extrabold">{dummy_country_data.name}</p>
        <div>
          <p>
            <span className="font-semibold">Population: </span>
            {formatPopulation(dummy_country_data.population)}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {dummy_country_data.region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {dummy_country_data.capital}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
