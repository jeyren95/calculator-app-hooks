import React from "react";

import "./SmallButton.css";

const SmallButton = ({name, selectFunction, inputSelectedNumber, handlePointClick, handleDeleteClick, firstNumber, secondNumber, selectedFunction}) => {
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


  return (
    <div
    className="col-3 small-button"
    onClick={handleClick}
    type="button"
    >
      <span>{name}</span>
    </div>
  )
}

export default SmallButton
