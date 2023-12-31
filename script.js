const displayScreen = document.querySelector(".display");
const numBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const ACBtn = document.querySelector(".AC");
const equalsBtn = document.querySelector(".equals");
const negBtn = document.querySelector(".neg");
const percentBtn = document.querySelector(".percent");

let total = "";
let num = "";
let operator = "";

function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

function operate(firstNum, operator, secondNum) {
  switch (operator) {
    case "+":
      return add(+firstNum, +secondNum);
    case "-":
      return subtract(+firstNum, +secondNum);
    case "*":
      return multiply(+firstNum, +secondNum);
    case "/":
      return divide(+firstNum, +secondNum);
    default:
      return 0;
  }
}

function updateDisplay(val) {
  displayScreen.value = val;
}

numBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    num += e.target.textContent;
    updateDisplay(num);
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator = e.target.textContent;
    updateDisplay(num + operator);
    if (total && num) {
      total = operate(total, operator, num);
      updateDisplay(total + operator);
      num = "";
    } else if (num) {
      total = num;
      num = "";
    }
    // how fo make da button stay white onclick
  });
});

// operatorBtns.addEventListener(
//   "click",
//   () => (operatorBtns.style.backgroundColor = "white")
// );

equalsBtn.addEventListener("click", () => {
  if (total && num && operator) {
    total = operate(total, operator, num);
    updateDisplay(total);
    num = "";
    operator = "";
  }
});

ACBtn.addEventListener("click", () => {
  displayScreen.value = "";
  total = "";
  num = "";
  operator = "";
});

negBtn.addEventListener("click", () => {
  if (num) {
    num = -Math.abs(num);
  }
});

// percentBtn.addEventListener("click", () => {
//   if (num1 && percentBtn && num2) {
//     total = ((num1 / num2) * 100).toFixed(3);
//     updateDisplay(total);
//   } else if (num && percentBtn) {
//     updateDisplay((num * 100) / num);
//   }
//updateDisplay((num / num) * 100);
// updateDisplay((num * 100) / 10000);
// });
// percentBtn.addEventListener("click", () => {
//   function percentage(percent, totals) {
//     return ((percent / 100) * totals).toFixed(2);
//   }
//   let total = percentage(num);
//   updateDisplay(total);
// });
