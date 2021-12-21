import React from "react";

const Container = ({ children, bgClassName, id }) => {
  return bgClassName ? (
    <div id={id} className={`w-full ${bgClassName}`}>
      <div className="container">{children}</div>
    </div>
  ) : (
    <div id={id} className="container">
      {children}
    </div>
  );
};

export default Container;
