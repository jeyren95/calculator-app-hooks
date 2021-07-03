import React from "react";

import "./SmallButton.css";

const SmallButton = ({name, selectFunction, inputSelectedNumber, handlePointClick, handleDeleteClick, firstNumber, secondNumber, selectedFunction, selectedTheme}) => {
  //When a small button is clicked, see whether a number or a math function or a point was clicked
  //If a number was clicked, call inputSelectedNumber function in the App component
  //If a math function was clicked, call the selectFunction function in the App component
  //If the point was clicked, call the handlePointClick function in the App component
  //If the delete button was clicked, call the handleDeleteClick function in the App component
  const handleClick = () => {
    if (name === "+" || name === "-" || name === "x" || name === "/") {
      selectFunction(name)
    } else if (name === ".") {
      handlePointClick()
    } else if (name === "DEL") {
      handleDeleteClick()
    } else {
      inputSelectedNumber(name)
    }
  }

  const renderBackgroundColor = () => {
    if (name === "DEL") {
      if (selectedTheme === "1") {
        return "hsl(225, 21%, 49%)"
      } else if (selectedTheme === "2") {
        return "hsl(185, 42%, 37%)"
      } else {
        return "hsl(281, 89%, 26%)"
      }
    } else {
      if (selectedTheme === "1") {
        return "hsl(30, 25%, 89%)"
      } else if (selectedTheme === "2") {
        return "hsl(45, 7%, 89%)"
      } else {
        return "hsl(268, 47%, 21%)"
      }
    }
  }

  const renderFontColor = () => {
    if (name === "DEL") {
      return "white"
    } else {
      if (selectedTheme === "1") {
        return "hsl(221, 14%, 31%)"
      } else if (selectedTheme === "2") {
        return "hsl(60, 10%, 19%)"
      } else {
        return "hsl(52, 100%, 62%)"
      }
    }
  }


  return (
    <div
    className="col-3 small-button"
    onClick={handleClick}
    type="button"
    style={{
      backgroundColor: renderBackgroundColor(),
      padding: name === "DEL" ? "3.7% 0" : "2% 0 0 0"
    }}
    >
      <span style={{
        color: renderFontColor(),
        fontSize: name === "DEL" ? "17px" : "30px"
      }}>
        {name}
      </span>
    </div>
  )
}

export default SmallButton
