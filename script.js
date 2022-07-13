const add = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => a / b;

const operate = (op, a, b) => {
  return op(a, b);
};

const nums = [...document.getElementsByClassName("num")];
const display = document.querySelector(".display");
const currentDisplay = document.querySelector(".current");
const savedDisplay = document.querySelector(".saved");
const opDisplay = document.querySelector(".operation");

const ops = [...document.querySelectorAll("[data-operation]")];

let currentValue = "";
let savedValue = "";

let result = 0;

nums.forEach((num) =>
  num.addEventListener("click", () => {
    currentValue += num.value;
    currentDisplay.textContent = currentValue;
  })
);

const submitOperation = (num, op) => {
  let sign = "";
  switch (op) {
    case "add":
      sign = "+";
      break;
    case "sub":
      sign = "-";
      break;
    case "mult":
      sign = "x";
      break;
    case "div":
      sign = "/";
      break;
  }
  savedDisplay.textContent = currentValue;
  opDisplay.textContent = sign;
  savedValue = parseInt(currentValue);

  // Initialize value and display
  currentValue = "";
  currentDisplay.textContent = "0";
};

ops.forEach((op) =>
  op.addEventListener("click", () => {
    submitOperation(parseInt(currentValue), op.id);
    console.log(op.id);
  })
);
