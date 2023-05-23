import React from "react";

const ColorPalette = () => {
  const colors = [
    // Light (default)
    { name: "Light Purple", hex: "#B683FF", description: "Gradient color" },
    { name: "Light Input", hex: "#858585", description: "Dark Gray" },
    { name: "Light Background", hex: "#FAFAFA", description: "Light Gray" },
    { name: "Light Elements", hex: "#FFFFFF", description: "White" },
    { name: "Light Text", hex: "#FFFFFF", description: "White" },
    // Dark (dark mode)
    { name: "Dark Purple", hex: "#8000FF", description: "Gradient color" },
    { name: "Dark Input", hex: "#858585", description: "Midnight Gray" },
    { name: "Dark Background", hex: "#121E2E", description: "Very Dark Blue" },
    { name: "Dark Elements", hex: "#283640", description: "Dark Blue" },
    { name: "Dark Text", hex: "#0D1C28", description: "Very Dark Blue" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
      {colors.map((color) => (
        <div key={color.name} className="text-lg font-semibold">
          <div
            className="border-2 border-black p-4 text-center"
            style={{ backgroundColor: color.hex }}></div>
          <div>{color.name}</div>
          <div>{color.hex}</div>
          <div>{color.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ColorPalette;
