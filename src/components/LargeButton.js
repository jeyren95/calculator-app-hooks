import React from "react";

import "./LargeButton.css";

const LargeButton = ({name, handleEqualsClick, handleResetClick, selectedTheme}) => {
  const handleClick = () => {
    if (name === "=") {
      handleEqualsClick()
    } else if (name === "RESET") {
      handleResetClick()
    }
  }

  const renderBackgroundColor = () => {
    if (name === "RESET") {
      if (selectedTheme === "1") {
        return "hsl(225, 21%, 49%)"
      } else if (selectedTheme === "2") {
        return "hsl(185, 42%, 37%)"
      } else {
        return "hsl(281, 89%, 26%)"
      }
    } else {
      if (selectedTheme === "1") {
        return "hsl(6, 63%, 50%)"
      } else if (selectedTheme === "2") {
        return "hsl(25, 98%, 40%)"
      } else {
        return "hsl(176, 100%, 44%)"
      }
    }
  }

  const renderFontColor = () => {
    if (name === "RESET") {
      return "white"
    } else {
      if (selectedTheme === "1" || selectedTheme === "2") {
        return "white"
      } else {
        return "hsl(198, 20%, 13%)"
      }
    }
  }

  return (
    <div
    className="col-6 large-button"
    type="button"
    onClick={handleClick}
    style={{backgroundColor: renderBackgroundColor()}}
    >
      <span style={{color: renderFontColor()}}>{name}</span>
    </div>
  )
}

export default LargeButton
