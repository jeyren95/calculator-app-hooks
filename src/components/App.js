import React, {useState} from "react";

import SmallButton from "./SmallButton";
import LargeButton from "./LargeButton";
import Display from "./Display";
import Header from "./Header";

import "./App.css";

const smallButtons = ["7", "8", "9", "DEL", "4", "5", "6", "+", "1", "2", "3", "-", ".", "0", "/", "x"]
const largeButtons = ["RESET", "="]

const App = () => {
  const [firstNumber, setFirstNumber] = useState("")
  const [selectedFunction, setSelectedFunction] = useState("")
  const [secondNumber, setSecondNumber] = useState("")
  const [display, setDisplay] = useState("0")
  const [storedResult, setStoredResult] = useState("")
  const [selectedTheme, setSelectedTheme] = useState("1")

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
        selectedTheme={selectedTheme}
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
        selectedTheme={selectedTheme}
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

      if (firstNumber.length < 10) {
        let concatenatedNumber = firstNumber + number
        setFirstNumber(concatenatedNumber)
        setDisplay(concatenatedNumber)
        console.log(`First number: ${concatenatedNumber}`)
      }
    } else {
      if (secondNumber.length < 10) {
        let concatenatedNumber = secondNumber + number
        setSecondNumber(concatenatedNumber)
        setDisplay(concatenatedNumber)
        console.log(`Second number: ${concatenatedNumber}`)
      }
    }
  }

  //When the user clicks a math function
  //First scenario - if user intends to continue the calculation using the stored result
    //If the user has not selected a math function yet, set the selected function as the clicked function
    //This prevents the math function from changing if the user accidentally clicks a diff math function after already selecting a math function
  //Second scenario - if this is a fresh calculation, meaning there is no stored result yet
    //If no function has been selected yet and the first number has already been entered, then set the math function to the clicked function

    //If no funciton has been selected yet, and the first number has not been entered, and the clicked function is a minus sign
    //Then set the first number to be negative

    //If a function has already been selected, and the second number has not been entered, and the clicked function is a minus sign
    //Then set the second number to be negative
  const selectFunction = (clickedFunction) => {
    if (storedResult !== "") {
      if (selectedFunction === "") {
        setSelectedFunction(clickedFunction)
        setFirstNumber(storedResult)
        setStoredResult("")
      }
    } else {
      if (selectedFunction === "" && firstNumber !== "") {
        setSelectedFunction(clickedFunction)
      } else if (selectedFunction === "" && firstNumber === "" && clickedFunction === "-") {
        setFirstNumber("-")
        setDisplay("-")
      } else if (selectedFunction !== "" && secondNumber === "" && clickedFunction === "-") {
        setSecondNumber("-")
        setDisplay("-")
      }
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
        calculatedResult = calculatedResult.slice(0, 10)
        setStoredResult(calculatedResult)
        setDisplay(calculatedResult)
      } else if (selectedFunction === "x") {
        let calculatedResult = (parseFloat(firstNumber) * parseFloat(secondNumber)).toString()
        calculatedResult = calculatedResult.slice(0, 10)
        setStoredResult(calculatedResult)
        setDisplay(calculatedResult)
      } else if (selectedFunction === "/") {
        let calculatedResult = (parseFloat(firstNumber) / parseFloat(secondNumber)).toString()
        calculatedResult = calculatedResult.slice(0, 10)
        setStoredResult(calculatedResult)
        setDisplay(calculatedResult)
      } else if (selectedFunction === "-") {
        let calculatedResult = (parseFloat(firstNumber) - parseFloat(secondNumber)).toString()
        calculatedResult = calculatedResult.slice(0, 10)
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

  //When the user clicks the theme toggle button, change the seleceted theme accordingly
  const selectTheme = () => {
    if (selectedTheme === "1") {
      setSelectedTheme("2")
    } else if (selectedTheme === "2") {
      setSelectedTheme("3")
    } else if (selectedTheme === "3") {
      setSelectedTheme("1")
    }
  }

  const renderKeypadBackgroundColor = () => {
    if (selectedTheme === "1") {
      return "hsl(223, 31%, 20%)"
    } else if (selectedTheme === "2") {
      return "hsl(0, 5%, 81%)"
    } else {
      return "hsl(268, 71%, 12%)"
    }
  }



  return (
    <div className="calculator">
      <Header
      selectedTheme={selectedTheme}
      selectTheme={selectTheme}
      />
      <Display
      display={display}
      selectedTheme={selectedTheme}
      />
      <div className="keypad" style={{backgroundColor: renderKeypadBackgroundColor()}}>
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
