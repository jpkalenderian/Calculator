// Called the elements needed into constants.
const display = document.getElementById("display");
const buttonZero = document.getElementById("btn0");
const buttonOne = document.getElementById("btn1");
const buttonTwo = document.getElementById("btn2");
const buttonThree = document.getElementById("btn3");
const buttonFour = document.getElementById("btn4");
const buttonFive = document.getElementById("btn5");
const buttonSix = document.getElementById("btn6");
const buttonSeven = document.getElementById("btn7");
const buttonEight = document.getElementById("btn8");
const buttonNine = document.getElementById("btn9");
const buttonClear = document.getElementById("clear");
const buttonPoint = document.getElementById("point");
const buttonPlus = document.getElementById("plus");
const buttonMinus = document.getElementById("minus");
const buttonDivide = document.getElementById("divide");
const buttonTimes = document.getElementById("times");
const buttonBack = document.getElementById("back");
const buttonPercent = document.getElementById("percent");
const buttonEquals = document.getElementById("equals");

/* Created a variable to keep track of decimal entries.
This variable is switched to true and false in different functions to make sure that the user 
can't enter a decimal point in random places.
*/
let decimalEntered = false;

/* 
Maxed out the screen at 10 characters as to not overwhelm the display especially when it is displayed on smaller screens.
Fixed decimals to 2 digits after the point as to not overwhelm the display especially when it is displayed on smaller screens. 
*/

/* 
Once the calculator starts, display is 0, so any number that is clicked will replace the 0.
If the display is less than 10 characters, the number clicked is added to the display.
[This works for all the number buttons 0-9]. 
*/
function handleNumberClick(number) {
  if (display.textContent === "0") {
    display.textContent = number;
  } else {
    if (display.textContent.length < 10) {
      display.textContent += number;
    }
  }
}

buttonZero.addEventListener("click", function () {
  handleNumberClick("0");
});

buttonOne.addEventListener("click", function () {
  handleNumberClick("1");
});

buttonTwo.addEventListener("click", function () {
  handleNumberClick("2");
});

buttonThree.addEventListener("click", function () {
  handleNumberClick("3");
});

buttonFour.addEventListener("click", function () {
  handleNumberClick("4");
});

buttonFive.addEventListener("click", function () {
  handleNumberClick("5");
});

buttonSix.addEventListener("click", function () {
  handleNumberClick("6");
});

buttonSeven.addEventListener("click", function () {
  handleNumberClick("7");
});

buttonEight.addEventListener("click", function () {
  handleNumberClick("8");
});

buttonNine.addEventListener("click", function () {
  handleNumberClick("9");
});

// clears the display by turning it back to 0
buttonClear.addEventListener("click", function () {
  display.textContent = "0";
  decimalEntered = false;
});

/* 
If the display is 0, clicking point will make it (0.).
If the display is less than 10 characters and the last character is not a point, clicking point will add a point to the display.
[This is it to make sure the user cannot input two consecutive points]. 
*/
buttonPoint.addEventListener("click", function () {
  let lastChar = display.textContent[display.textContent.length - 1];
  if (display.textContent === "0") {
    display.textContent = "0.";
    decimalEntered = true;
  } else {
    if (
      display.textContent.length < 10 &&
      decimalEntered === false &&
      !lastChar.includes(".") &&
      !lastChar.includes("*") &&
      !lastChar.includes("+") &&
      !lastChar.includes("/") &&
      !lastChar.includes("-") &&
      !lastChar.includes("%")
    ) {
      display.textContent += ".";
      decimalEntered = true;
    }
  }
});

/* 
Display should be less than 10.
If the last character is an operator it will be replaced by a plus sign.
Otherwise, a plus sign will be added to the display. 
[The user can now enter a decimal point].
*/
buttonPlus.addEventListener("click", function () {
  if (display.textContent.length < 10) {
    let lastChar = display.textContent[display.textContent.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷" ||
      lastChar === "."
    ) {
      display.textContent = display.textContent.replace(lastChar, "+");
    } else {
      display.textContent += "+";
      decimalEntered = false;
    }
  }
});

/* 
Display should be less than 10.
If the last character is an operator it will be replaced by a minus sign.
Otherwise, a minus sign will be added to the display. 
[The user can now enter a decimal point].
*/
buttonMinus.addEventListener("click", function () {
  if (display.textContent.length < 10) {
    let lastChar = display.textContent[display.textContent.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷" ||
      lastChar === "."
    ) {
      display.textContent = display.textContent.replace(lastChar, "-");
    } else {
      display.textContent += "-";
      decimalEntered = false;
    }
  }
});

/* 
Display should be less than 10.
If the last character is an operator it will be replaced by a divide sign.
Otherwise, a divide sign will be added to the display. 
[The user can now enter a decimal point]..
*/
buttonDivide.addEventListener("click", function () {
  if (display.textContent.length < 10) {
    let lastChar = display.textContent[display.textContent.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷" ||
      lastChar === "."
    ) {
      display.textContent = display.textContent.replace(lastChar, "÷");
    } else {
      display.textContent += "÷";
      decimalEntered = false;
    }
  }
});

/* 
Display should be less than 10.
If the last character is an operator it will be replaced by a times sign.
Otherwise, a times sign will be added to the display. 
[The user can now enter a decimal point].
*/
buttonTimes.addEventListener("click", function () {
  if (display.textContent.length < 10) {
    let lastChar = display.textContent[display.textContent.length - 1];
    if (
      lastChar === "+" ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷" ||
      lastChar === "."
    ) {
      display.textContent = display.textContent.replace(lastChar, "×");
    } else {
      display.textContent += "×";
      decimalEntered = false;
    }
  }
});

/* 
Display should be less than 10.
If the last character is not an operator or a % sign, a % sign will be added to the display. 
*/
buttonPercent.addEventListener("click", function () {
  if (display.textContent.length < 10) {
    let lastChar = display.textContent[display.textContent.length - 1];
    if (
      lastChar !== "+" &&
      lastChar !== "-" &&
      lastChar !== "×" &&
      lastChar !== "÷" &&
      lastChar !== "%" &&
      lastChar !== "."
    ) {
      display.textContent += "%";
    }
  }
});

/* 
If the display is 0 it stays 0.
If the display becomes empty it goes back to 0 [the user can now enter a decimal point].
Otherwise, the last character is sliced [if a decimal was removed, the user can now enter a decimal point]. 
*/
buttonBack.addEventListener("click", function () {
  let currentDisplayContent = display.textContent;

  if (currentDisplayContent === "0") {
    display.textContent = "0";
  }

  let newDisplayContent = display.textContent.slice(0, -1);

  if (newDisplayContent === "") {
    display.textContent = "0";
    decimalEntered = false;
  } else {
    let removedChar = currentDisplayContent.slice(-1);

    if (removedChar === ".") {
      decimalEntered = false;
    }

    display.textContent = newDisplayContent;
  }
});

/* 
Replaced the division and multiplication symbols with / and * respectively.
If the expression includes a %, we split at % and check if the second part includes an operator. 
If it does, we replace the % with * 0.01 and evaluate the expression to calculate the number.
Check if the number is a whole number or not to see if the display should show a whole number or decimal.
If the last character is a % we replace the % with * 0.01 and evaluate the expression to calculate the number.
If the last character is not a % or the second part doesn't include an opertor, it means it's a modulo calculation.
If the expression includes a / * or it's a normal operation, we check if it's a whole number or not to see if the display should show a whole number or a decimal. 
*/
buttonEquals.addEventListener("click", function () {
  let expression = display.textContent;
  expression = expression.replace(/÷/g, "/");
  expression = expression.replace(/×/g, "*");
  let lastChar = display.textContent[display.textContent.length - 1];

  if (expression.includes("%")) {
    let parts = expression.split("%");
    let number = parseFloat(parts[0]);

    if (
      parts[1].trim().includes("*") ||
      parts[1].trim().includes("-") ||
      parts[1].trim().includes("+") ||
      parts[1].trim().includes("/")
    ) {
      expression = expression.replace(/%/g, "*0.01");
      if (eval(expression) % 1 !== 0) {
        display.textContent = eval(expression).toFixed(2);
        decimalEntered = true;
      } else {
        display.textContent = eval(expression);
        decimalEntered = false;
      }
    } else if (lastChar == "%") {
      expression = expression.replace(/%/g, "*0.01");
      if (eval(expression) % 1 !== 0) {
        display.textContent = eval(expression).toFixed(2);
        decimalEntered = true;
      } else {
        display.textContent = eval(expression);
        decimalEntered = false;
      }
    } else {
      let moduloValue = parseFloat(parts[1]);
      display.textContent = number % moduloValue;
    }
  } else if (expression.includes("/")) {
    if (eval(expression) % 1 !== 0) {
      display.textContent = eval(expression).toFixed(2);
      decimalEntered = true;
    } else {
      display.textContent = eval(expression);
      decimalEntered = false;
    }
  } else if (expression.includes("*")) {
    if (eval(expression) % 1 !== 0) {
      display.textContent = eval(expression).toFixed(2);
      decimalEntered = true;
    } else {
      display.textContent = eval(expression);
      decimalEntered = false;
    }
  } else {
    if (eval(expression) % 1 !== 0) {
      display.textContent = eval(expression).toFixed(2);
      decimalEntered = true;
    } else {
      display.textContent = eval(expression);
      decimalEntered = false;
    }
  }
});