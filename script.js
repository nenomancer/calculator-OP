const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

const operate = (op, a, b) => {
  return op(a, b);
};

const numbers = [...document.querySelectorAll("[data-number]")];
const display = document.querySelector(".display");
const currentDisplay = document.querySelector("[data-current]");
const previousDisplay = document.querySelector("[data-previous]");
const operationDisplay = document.querySelector(".operation");

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

numbers.forEach((number) =>
  number.addEventListener("click", () => {
    console.log(currentValue);
    currentValue += number.innerText;
    updateDisplay();
  })
);

const calculate = (a, b, operation) => {
  console.log(`PREV: ${a}, CURRR: ${b}, OP: ${operation}`);
  const previous = parseFloat(a);
  const current = parseFloat(b);
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
};

const setOperation = (operation) => {
  if (operationValue !== null)
    calculate(previousValue, currentValue, operationValue);
  operationValue = operation.textContent;
  previousValue = currentValue;
  currentValue = "";
  updateDisplay();
  console.log(operationValue);
};

operations.forEach((operation) =>
  operation.addEventListener("click", () => {
    setOperation(operation);
  })
);
