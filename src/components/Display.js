import React from "react";

import "./Display.css";

const Display = ({display}) => {

  return (
    <div className="display">
      <span>{display}</span>
    </div>
  )
}

export default Display
