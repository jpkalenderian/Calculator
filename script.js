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

buttonZero.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "0";
  } else {
    if (display.textContent.length < 10) {
      display.textContent += "0";
    }
  }
});

buttonOne.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "1";
  } else {
    if (display.textContent.length < 10) {
      display.textContent += "1";
    }
  }
});

buttonTwo.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "2";
  } else {
    if (display.textContent.length < 10) {
      display.textContent += "2";
    }
  }
});

buttonThree.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "3";
  } else {
    if (display.textContent.length < 10) {
      display.textContent += "3";
    }
  }
});

buttonFour.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "4";
  } else {
    if (display.textContent.length < 10) {
      display.textContent += "4";
    }
  }
});

buttonFive.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "5";
  } else {
    if (display.textContent.length < 10) {
      display.textContent += "5";
    }
  }
});

buttonSix.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "6";
  } else {
    if (display.textContent.length < 10) {
      display.textContent += "6";
    }
  }
});

buttonSeven.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "7";
  } else {
    if (display.textContent.length < 10) {
      display.textContent += "7";
    }
  }
});

buttonEight.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "8";
  } else {
    if (display.textContent.length < 10) {
      display.textContent += "8";
    }
  }
});

buttonNine.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "9";
  } else {
    if (display.textContent.length < 10) {
      display.textContent += "9";
    }
  }
});

buttonClear.addEventListener("click", function () {
  display.textContent = "0";
});

buttonPoint.addEventListener("click", function () {
  if (display.textContent === "0") {
    display.textContent = "0.";
  } else {
    if (
      (display.textContent.length < 10) &
      !display.textContent.includes(".")
    ) {
      display.textContent += ".";
    }
  }
});

buttonPlus.addEventListener("click", function () {
  if (display.textContent.length < 10) {
    display.textContent += "+";
  }
});

buttonMinus.addEventListener("click", function () {
  if (display.textContent.length < 10) {
    display.textContent += "-";
  }
});

buttonDivide.addEventListener("click", function () {
  if (display.textContent.length < 10) {
    display.textContent += "/";
  }
});

buttonTimes.addEventListener("click", function () {
  if (display.textContent.length < 10) {
    display.textContent += "*";
  }
});

buttonPercent.addEventListener("click", function () {
  if (display.textContent.length < 10) {
    display.textContent += "%";
  }
});

buttonBack.addEventListener("click", function () {
  if (display.textContent === 0) {
    display.textContent = "0";
  } else {
    let newDisplayContent = display.textContent.slice(0, -1);
    if (newDisplayContent === "") {
      display.textContent = "0";
    } else {
      display.textContent = newDisplayContent;
    }
  }
});

buttonEquals.addEventListener("click", function () {
  if (display.textContent.includes("%")) {
    value = eval(display.textContent) * 0.01;
    display.textContent = value.toFixed(2);
  } else if (display.textContent.includes("/")) {
    value = eval(display.textContent);
    display.textContent = value.toFixed(2);
  } else {
    display.textContent = eval(display.textContent);
  }
});