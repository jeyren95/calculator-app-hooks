import React from "react";

import "./Display.css";

const Display = ({display, selectedTheme}) => {
  const renderBackgroundColor = () => {
    if (selectedTheme === "1") {
      return "hsl(224, 36%, 15%)"
    } else if (selectedTheme === "2") {
      return "hsl(0, 0%, 93%)"
    } else {
      return "hsl(268, 71%, 12%)"
    }
  }

  const renderFontColor = () => {
    if (selectedTheme === "1") {
      return "white"
    } else if (selectedTheme === "2") {
      return "hsl(60, 10%, 19%)"
    } else {
      return "hsl(52, 100%, 62%)"
    }
  }


  return (
    <div
    style={{backgroundColor: renderBackgroundColor()}}
    className="display">
      <span style={{color: renderFontColor()}}>{display}</span>
    </div>
  )
}

export default Display
