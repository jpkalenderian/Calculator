const display = document.getElementById("display");
const buttonClear = document.getElementById("clear");
const buttonPoint = document.getElementById("point");
const buttonBack = document.getElementById("back");
const buttonPercent = document.getElementById("percent");
const buttonEquals = document.getElementById("equals");

const numberButton = document.querySelectorAll(".button");
let decimalEntered = false;

numberButton.forEach(button => {
    if (button.textContent.match(/[0-9]/)) {
        button.addEventListener("click", function () {
            handleNumberClick(button.textContent);
        });
    }
    if (button.textContent.match(/[-×÷+]/)) {
        button.addEventListener("click", function () {
            handleOperatorClick(button.textContent);
        });
    }
});

function handleNumberClick(number) {
    if (display.textContent === "0") {
        display.textContent = number;
    } else {
        if (display.textContent.length < 10) {
            display.textContent += number;
        }
    }
}

function handleOperatorClick(operator) {
    if (display.textContent.length < 10) {
        let lastChar = display.textContent[display.textContent.length - 1];
        if (lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷" || lastChar === ".") {
            display.textContent = display.textContent.replace(lastChar, operator);
            decimalEntered = false;
        } else {
            display.textContent += operator;
            decimalEntered = false;
        }
    }
}

buttonClear.addEventListener("click", function () {
    display.textContent = "0";
    decimalEntered = false;
});

buttonPoint.addEventListener("click", function () {
    let lastChar = display.textContent[display.textContent.length - 1];
    if (display.textContent === "0") {
        display.textContent = "0.";
        decimalEntered = true;
    } else {
        if (display.textContent.length < 10 && decimalEntered === false && !lastChar.includes(".") && !lastChar.includes("*") && !lastChar.includes("+") && !lastChar.includes("/") && !lastChar.includes("-") && !lastChar.includes("%")) {
            display.textContent += ".";
            decimalEntered = true;
        }
    }
});

buttonPercent.addEventListener("click", function () {
    if (display.textContent.length < 10) {
        let lastChar = display.textContent[display.textContent.length - 1];
        if (lastChar !== "+" && lastChar !== "-" && lastChar !== "×" && lastChar !== "÷" && lastChar !== "%" && lastChar !== ".") {
            display.textContent += "%";
            decimalEntered = false;
        }
    }
});

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

buttonEquals.addEventListener("click", function () {
    let expression = display.textContent;
    expression = expression.replace(/÷/g, "/");
    expression = expression.replace(/×/g, "*");
    let lastChar = display.textContent[display.textContent.length - 1];

    if (expression.includes("%")) {
        let parts = expression.split("%");
        let number = parseFloat(parts[0]);

        if (parts[1].trim().includes("*") || parts[1].trim().includes("-") || parts[1].trim().includes("+") || parts[1].trim().includes("/") || lastChar === "%") {
            expression = expression.replace(/%/g, "*0.01");
        } else {
            let moduloValue = parseFloat(parts[1]);
            expression = number % moduloValue;
        }
    }

    if (eval(expression) % 1 !== 0) {
        display.textContent = eval(expression).toFixed(2);
        decimalEntered = true;
    } else {
        display.textContent = eval(expression);
        decimalEntered = false;
    }
});