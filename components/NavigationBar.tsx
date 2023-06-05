import React from "react";

interface Props {}

const NavigationBar = () => {
  return (
    <div className="bg-light-elements py-4 text-center">
      <div className="flex px-4 lg:px-6 xl:px-8">
        <h1
          className="bg-gradient-to-r from-light-purple to-dark-purple bg-clip-text text-3xl font-extrabold tracking-wide
          text-transparent sm:text-4xl lg:text-left lg:text-5xl">
          WorldView
        </h1>
      </div>
    </div>
  );
};

export default NavigationBar;
