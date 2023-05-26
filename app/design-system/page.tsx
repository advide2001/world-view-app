import React from "react";
import ColorPalette from "../../components/ColorPalette";
import CountryCardContainer from "@/components/CountryCardContainer";

interface Props {}

const page = () => {
  if (process.env.NODE_ENV !== "development") {
    // Render an alternative message or redirect to a different route in the production build
    return <h1>Route not found.</h1>;
  }

  return (
    <div className="mx-[10vw] mt-[5vh]">
      <ColorPalette />
      <CountryCardContainer />
    </div>
  );
};

export default page;
