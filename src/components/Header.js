import React from "react";

import "./Header.css";

const Header = ({selectedTheme, selectTheme}) => {
  const handleToggleButtonClick = () => {
    selectTheme()

    if (selectedTheme === "1") {
      document.body.style.backgroundColor = "hsl(0, 0%, 90%)"
    } else if (selectedTheme === "2") {
      document.body.style.backgroundColor = "hsl(268, 75%, 9%)"
    } else if (selectedTheme === "3") {
      document.body.style.backgroundColor = "hsl(222, 26%, 31%)"
    }
  }

  const renderFontColor = () => {
    if (selectedTheme === "1") {
      return "white"
    } else if (selectedTheme === "2") {
      return "hsl(60, 10%, 19%)"
    } else  {
      return "hsl(52, 100%, 62%)"
    }
  }

  const renderToggleBackgroundColor = () => {
    if (selectedTheme === "1") {
      return "hsl(223, 31%, 20%)"
    } else if (selectedTheme === "2") {
      return "hsl(0, 5%, 81%)"
    } else {
      return "hsl(268, 71%, 12%)"
    }
  }

  const renderToggleButtonPosition = () => {
    if (selectedTheme === "1") {
      return "-16.5%"
    } else if (selectedTheme === "2") {
      return "30%"
    } else {
      return "84%"
    }
  }

  const renderToggleButtonColor = () => {
    if (selectedTheme === "1") {
    return "hsl(6, 63%, 50%)"
    } else if (selectedTheme === "2") {
      return "hsl(25, 98%, 40%)"
    } else {
      return "hsl(176, 100%, 44%)"
    }
  }



  return (
    <div className="header row">
      <div className="col-6">
        <h2 style={{color: renderFontColor()}}>calc</h2>
      </div>
      <div className="col-6 theme-switcher">
        <div className="row theme-choices">
          <span style={{color: renderFontColor()}}>1 2 3</span>
        </div>
        <div className="row">
          <div className="col-4 theme-label">
            <span style={{color: renderFontColor()}}>THEME</span>
          </div>
          <div
          style={{backgroundColor: renderToggleBackgroundColor()}}
          className="col-8 theme-toggle-button">
            <i
            style={{left: renderToggleButtonPosition(), color: renderToggleButtonColor()}}
            className="fas fa-circle"
            type="button"
            onClick={handleToggleButtonClick}
            >
            </i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
