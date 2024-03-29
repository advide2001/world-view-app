import React from "react";
import ColorPalette from "@/components/ColorPalette";
import CountryCardContainer from "@/components/CountryCardContainer";
import SearchBar from "@/components/SearchBar";
import DropdownMenu from "@/components/DropdownMenu";
import siteConfig from "@/site.config.js";

interface Option {
  label: string;
  value: string;
}

const page = () => {
  if (process.env.NODE_ENV !== "development") {
    // Render an alternative message or redirect to a different route in the production build
    return <h1>Route not found.</h1>;
  }

  return (
    <div className="mx-[10vw] my-[5vh] flex flex-col gap-5">
      <ColorPalette />
    </div>
  );
};

export default page;
