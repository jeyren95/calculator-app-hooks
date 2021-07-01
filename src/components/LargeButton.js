import React from "react";

import "./LargeButton.css";

const LargeButton = ({name, handleEqualsClick, handleResetClick}) => {
  const handleClick = () => {
    if (name === "=") {
      handleEqualsClick()
    } else if (name === "RESET") {
      handleResetClick()
    }
  }


  return (
    <div
    className="col-6 large-button"
    type="button"
    onClick={handleClick}
    >
      <span>{name}</span>
    </div>
  )
}

export default LargeButton
