function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return "ERROR";
  else return a / b;
}
function percentage(sign, a, b) {
  let percentB = b * (1 / 100) * a;
  let result = operate(sign, a, percentB);
  return result;
}
function operate(sign, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  if (sign === "+") {
    return add(a, b);
  } else if (sign === "-") {
    return subtract(a, b);
  } else if (sign === "*") {
    return multiply(a, b);
  } else if (sign === "/") {
    return divide(a, b);
  }
}
function updateDisplay(result) {
  display.innerText = result.substring(0, 12);
}
const operators = document.querySelectorAll(".operator");
const operands = document.querySelectorAll(".operand");
const equals = document.getElementById("equals");
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const percent = document.getElementById("percent");
const negative = document.getElementById("negative");
let display = document.getElementById("display-number");
let activeBtn = "";
let a = "",
  b = "",
  c = "";
let sign = "";
let decimalBool = false;
equals.addEventListener("click", () => {
  if (a !== "" && b !== "" && sign !== "") {
    display.innerText = operate(sign, a, b);
    a = display.innerText;
    b = "";
    c = "";
    decimalBool = false;
  }
});
clear.addEventListener("click", () => {
  a = "";
  b = "";
  c = "";
  sign = "";
  display.innerText = 0;
  if (activeBtn !== "") {
    activeBtn.classList.remove("selected");
    activeBtn = "";
  }
});
percent.addEventListener("click", () => {
  if (a !== "" && b !== "" && sign !== "") {
    display.innerText = parseFloat(percentage(sign, a, b));
    a = display.innerText;
    b = "";
  }
});
decimal.addEventListener("click", () => {
  if (decimalBool === false && !display.innerText.includes(".")) {
    c = display.innerText + ".";
    updateDisplay(c);
    decimalBool = true;
  }
});
negative.addEventListener("click", () => {
  if (a !== "" && b === "") {
    a = -1 * a;
    updateDisplay(a);
  }
  if (a !== "" && b !== "") {
    b = -1 * b;
    updateDisplay(b);
  }
});
operands.forEach((operand) => {
  //What happens when you click number
  operand.addEventListener("click", () => {
    if (display.innerText != 0 || operand.value != 0) {
      if (decimalBool == false) {
        if (activeBtn === "") {
          //If operator isn't selected store value of  first number and display it
          a += operand.value;
          display.innerText = a;
        } else {
          b += operand.value; //Once operator is selected store value of second number and display it
          display.innerText = b;
        }
        if (b !== "") {
          //Once you press the number after selecting operator, unselect operator
          activeBtn.classList.remove("selected");
        }
      } else {
        //When you use decimal numbers, temporarly store number after '.' and combine it with base number
        c += operand.value;
        display.innerText = c;
        if (a !== "" && b === "") a = c;
        if (b !== "") b = c;
      }
    }
  });
});

operators.forEach((operator) => {
  //What happens when you click operator
  operator.addEventListener("click", (e) => {
    if (!operator.classList.contains("selected") && a !== "") {
      //When you press operator after storing any number, select it
      operator.classList.add("selected");
      sign = operator.innerText;
      activeBtn = e.target;
      decimalBool = false;
      c = "";
      operators.forEach((operator) => {
        //Remove selection of other operators to prevent clicking two or more at the same time
        if (operator !== activeBtn) {
          operator.classList.remove("selected");
        }
      });
      if (a !== "" && b !== "") {
        //When you press operator after pressing two numbers, display outcome of operation and make it a first number of next equation
        display.innerText = operate(sign, a, b);
        a = display.innerText;
        b = "";
      }
    }
  });
});
