import React from "react";

const Bead = ({ children }) => {
  return (
    <div className="px-4 py-1 rounded-md bg-orange-light text-orange-varient2 text-lg font-medium z-10">
      {children}
    </div>
  );
};

export default Bead;
