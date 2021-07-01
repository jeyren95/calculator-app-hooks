import React, {useState} from "react";

import SmallButton from "./SmallButton";
import LargeButton from "./LargeButton";
import Display from "./Display";


import "./App.css";

const smallButtons = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x"]
const largeButtons = ["RESET", "="]

const App = () => {
  const [firstNumber, setFirstNumber] = useState("")
  const [selectedFunction, setSelectedFunction] = useState("")
  const [secondNumber, setSecondNumber] = useState("")
  const [display, setDisplay] = useState("0")
  const [storedResult, setStoredResult] = useState("")

  const renderSmallButtons = () => {
    return smallButtons.map((button) => {
      return (
        <SmallButton
        key={button}
        name={button}
        selectFunction={selectFunction}
        inputSelectedNumber={inputSelectedNumber}
        handlePointClick={handlePointClick}
        handleDeleteClick={handleDeleteClick}
        firstNumber={firstNumber}
        secondNumber={secondNumber}
        selectedFunction={selectedFunction}
        />
      )
    })
  }

  const renderLargeButtons = () => {
    return largeButtons.map((button) => {
      return (
        <LargeButton
        key={button}
        name={button}
        handleEqualsClick={handleEqualsClick}
        handleResetClick={handleResetClick}
        />
      )
    })
  }

  //When the user clicks a number
  //First scenario - No function has been selected yet
      //If there is already a stored result, reset the stored result first
      //Concatenate the first number and then set the state of the first number to the concatenated number
      //Set the display state to the clicked number
  //Second scenario - A function has already been selected
      //Set the second number state to the clicked number
      //Set the display state to the clicked number
  const inputSelectedNumber = (number) => {
    if (selectedFunction === "") {
      if (storedResult !== "") {
        setStoredResult("")
      }
      let concatenatedNumber = firstNumber + number
      setFirstNumber(concatenatedNumber)
      setDisplay(concatenatedNumber)
      console.log(`First number: ${concatenatedNumber}`)
    } else {
      let concatenatedNumber = secondNumber + number
      setSecondNumber(concatenatedNumber)
      setDisplay(concatenatedNumber)
      console.log(`Second number: ${concatenatedNumber}`)
    }
  }


  //When the user clicks a math function
  //Only call the function if the user hasn't already clicked a math function
  //First scenario - if user intends to continue the calculation using the stored result
    //Set the stored result to the first number
    //Reset the stored result
    //Set the selected function to the clicked function
  //Second scenario - if there is no stored result yet
    //Set the selected function to the clicked function
  const selectFunction = (clickedFunction) => {
    if (selectedFunction === "") {
      if (storedResult !== "") {
        setFirstNumber(storedResult)
        setStoredResult("")
      }
      setSelectedFunction(clickedFunction)
      console.log(`${clickedFunction} was selected.`)
    }
  }

  //When user clicks the point button
  //First scenario - no function has been selected yet and there is no dot in the first number yet
      //If the first number is "", then include the zero infront of the first number
      //If not just concatenate as usual
  //Second scenario - function has already been selected and there is no dot in the second number yet
      //Same mechanism as the first scenario
  const handlePointClick = () => {
    if (selectedFunction === "") {
      if (firstNumber.includes(".") === false) {
        if (firstNumber !== "") {
          let floatNumber = firstNumber + "."
          setFirstNumber(floatNumber)
          setDisplay(floatNumber)
        } else {
          let floatNumber = "0."
          setFirstNumber(floatNumber)
          setDisplay(floatNumber)
        }
      }
    } else if (selectedFunction !== "") {
      if (secondNumber.includes(".") === false) {
        if (secondNumber !== "") {
          let floatNumber = secondNumber + "."
          setSecondNumber(floatNumber)
          setDisplay(floatNumber)
        } else {
          let floatNumber = "0."
          setSecondNumber(floatNumber)
          setDisplay(floatNumber)
        }
      }
    }
  }

  //When user clicks the delete button
  //First scenario - no function has been selected yet
      //If the length of the first number is more than 1, then slice as per usual
      //If the length of the first number is 1, then set the first number to "0"
  //Second scenario - function has already been selected
      //Same mechanism as the first scenario
  const handleDeleteClick = () => {
    if (selectedFunction === "") {
      if (firstNumber.length > 1) {
        let slicedNumber = firstNumber.slice(0, -1)
        setFirstNumber(slicedNumber)
        setDisplay(slicedNumber)
      } else if (firstNumber.length === 1) {
        setFirstNumber("")
        setDisplay("0")
      }
    } else {
      if (secondNumber.length > 1) {
        let slicedNumber = secondNumber.sliced(0, -1)
        setSecondNumber(slicedNumber)
        setDisplay(slicedNumber)
      } else if (secondNumber.length === 1) {
        setSecondNumber("")
        setDisplay("0")
      } else if (secondNumber.length === 0) {
        setSelectedFunction("")
      }
    }
  }



  //When user clicks the equal sign
  //Change the stored result to the calculated result
  //Reset the first and second numbers and also the selected function
  const handleEqualsClick = () => {
    if (firstNumber !== "" && secondNumber !== "") {
      if (selectedFunction === "+") {
        let calculatedResult = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString()
        setStoredResult(calculatedResult)
        setDisplay(calculatedResult)
      } else if (selectedFunction === "x") {
        let calculatedResult = (parseFloat(firstNumber) * parseFloat(secondNumber)).toString()
        setStoredResult(calculatedResult)
        setDisplay(calculatedResult)
      } else if (selectedFunction === "/") {
        let calculatedResult = (parseFloat(firstNumber) / parseFloat(secondNumber)).toString()
        setStoredResult(calculatedResult)
        setDisplay(calculatedResult)
      } else if (selectedFunction === "-") {
        let calculatedResult = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString()
        setStoredResult(calculatedResult)
        setDisplay(calculatedResult)
      }
      setFirstNumber("")
      setSecondNumber("")
      setSelectedFunction("")
    }
  }

  //When user clicks the reset button, set everything back to the original state
  const handleResetClick = () => {
    setFirstNumber("")
    setSecondNumber("")
    setSelectedFunction("")
    setDisplay("0")
    setStoredResult("")
  }

  return (
    <div className="calculator">
      <Display
      display={display}
      />
      <div className="keypad">
        <div className="row">
          {renderSmallButtons()}
        </div>
        <div className="row">
          {renderLargeButtons()}
        </div>
      </div>
    </div>
  )
}

export default App;
