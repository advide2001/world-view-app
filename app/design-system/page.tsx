import React from "react";

interface Props {}

const page = () => {
  if (process.env.NODE_ENV !== "development") {
    // Render an alternative message or redirect to a different route in the production build
    return <h1>Route not found.</h1>;
  }

  return (
    <div>
      <h1>This is Design System</h1>
    </div>
  );
};

export default page;
