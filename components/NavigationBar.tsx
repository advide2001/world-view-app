import React from "react";

interface Props {}

const NavigationBar = () => {
  return (
    <div className="flex bg-light-elements px-12 py-2">
      <div>
        <h1
          className="bg-gradient-to-r from-light-purple to-dark-purple bg-clip-text text-4xl
          font-extrabold tracking-wide text-transparent ">
          WorldView
        </h1>
      </div>
    </div>
  );
};

export default NavigationBar;
