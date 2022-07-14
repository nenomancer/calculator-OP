const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearEntryButton = document.querySelector("[data-clearEntry]");
const clearAllButton = document.querySelector("[data-clearAll]");

const currentDisplay = document.querySelector("[data-current]");
const previousDisplay = document.querySelector("[data-previous]");

let currentValue = "";
let previousValue = "";
let operation = undefined;

const clear = () => {
  previousDisplay = "";
  currentDisplay = "";
  operation = undefined;
};

const removeNumber = () => {};

const appendNumber = (number) => {
  if (number === "." && currentValue.includes(".")) return;
  currentValue += number;
};

const chooseOperation = (operation) => {
  if (currentValue === "") return;
  if (previousValue !== "") calculate();

  operation = operation;
  previousValue = currentValue;
  currentValue = "";
};

const calculate = (a, b, op) => {
  let result;
  const previous = parseFloat(a);
  const current = parseFloat(b);
  if (isNaN(previous) || isNaN(current)) return;
  switch (op) {
    case "+":
      return previous + current;
    case "-":
      return previous - current;
    case "×":
      return previous * current;
    case "÷":
      return previous / current;
    default:
      return;
  }
  currentValue = result;
  operation = undefined;
  previousValue = "";
};

const updateDisplay = () => {
  currentDisplay.innerText = currentValue;
  previousDisplay.innerText = previousValue;
};

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
    updateDisplay();
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.innerText);
    updateDisplay();
  });
});

equalsButton.addEventListener("click", (button) => {
  const result = calculate(previousValue, currentValue, operation);
  console.log(result);
  updateDisplay();
});

// console.log(calculate("200", "50", "+"));
