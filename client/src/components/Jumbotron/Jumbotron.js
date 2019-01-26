import React from "react";
import "../Jumbotron/Jumbotron.css";

function Jumbotron({ children }) {
  return (
    <div className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
