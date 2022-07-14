const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

const operate = (op, a, b) => {
  return op(a, b);
};

const display = document.querySelector(".display");
const currentDisplay = document.querySelector("[data-current]");
const previousDisplay = document.querySelector("[data-previous]");
const operationDisplay = document.querySelector(".operation");
const numberButtons = [...document.querySelectorAll("[data-number]")];

const equalsButton = document.querySelector("[data-equals]");
const operations = [...document.querySelectorAll("[data-operation]")];

let currentValue = "";
let previousValue = "";
let operationValue = null;

const updateDisplay = () => {
  currentDisplay.textContent = currentValue;
  previousDisplay.textContent = previousValue;
  previousDisplay.textContent = previousValue;
  operationDisplay.textContent = operationValue;
};

const resetDisplay = () => {};

numberButtons.forEach((number) =>
  number.addEventListener("click", () => {
    currentValue += number.innerText;
    updateDisplay();
  })
);

const calculate = () => {
  const previous = parseFloat(previousValue);
  const current = parseFloat(currentValue);
  const operation = operationValue;
  let result;
  switch (operation) {
    case "+":
      result = previous + current;
      break;
    case "-":
      result = previous - current;
      break;
    case "*":
      result = previous * current;
      break;
    case "/":
      result = previous / current;
      break;
    default:
      return;
  }

  currentValue = result;
  previousValue = '';
  operationValue = null;
  updateDisplay();
};

const setOperation = (operation) => {
  if (operationValue !== null) calculate();
  operationValue = operation.textContent;
  previousValue = currentValue;
  currentValue = "";
  updateDisplay();
};

operations.forEach((operation) =>
  operation.addEventListener("click", () => {
    setOperation(operation);
  })
);

equalsButton.addEventListener("click", () => calculate());
