import React from "react";

const ColorPalette = () => {
  const colors = [
    { name: "Light Purple", hex: "#B683FF", description: "Gradient color" },
    { name: "Dark Purple", hex: "#8000FF", description: "Gradient color" },
    { name: "Light Input", hex: "#858585", description: "Dark Gray" },
    { name: "Dark Input", hex: "#858585", description: "Midnight Gray" },
    { name: "Dark Background", hex: "#121E2E", description: "Very Dark Blue" },
    {
      name: "Light Background",
      hex: "#FAFAFA",
      description: "Very Light Gray",
    },
    { name: "Light Elements", hex: "#FFFFFF", description: "White" },
    { name: "Dark Elements", hex: "#283640", description: "Dark Blue" },
    { name: "Light Text", hex: "#FFFFFF", description: "White" },
    { name: "Dark Text", hex: "#0D1C28", description: "Very Dark Blue" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {colors.map((color) => (
        <div
          key={color.name}
          className="border-2 border-black p-4 text-center"
          style={{ backgroundColor: color.hex }}>
          <div>{color.name}</div>
          <div>{color.hex}</div>
          <div>{color.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
