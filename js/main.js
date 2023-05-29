const numberBtnElement = document.querySelectorAll(".btn_number");
const operatorBtnElement = document.querySelectorAll(".btn_operator");
const screenNumberElement = document.querySelector("#screen__result");
const deleteBtnElement = document.querySelector("#delete");
const resetBtnElement = document.querySelector("#reset");
const equalBtnElement = document.querySelector("#equal");

/* Populate variables */
let numbersValue = [];
let operator;

/* Listener for elements */
numberBtnElement.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    getNumberBtn(e);
  });
});

operatorBtnElement.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    getOperatorBtn(e);
  });
});

deleteBtnElement.addEventListener("click", () => {
  deleteNumber();
});

resetBtnElement.addEventListener("click", () => {
  resetAll();
});

equalBtnElement.addEventListener("click", () => {
  numbersValue.push(Number(screenNumberElement.textContent));

  operate(numbersValue, operator);
});

/* Get the number inside of btn */
const getNumberBtn = (e) => {
  const number = e.target.textContent;

  if (screenNumberElement.textContent === operator) {
    screenNumberElement.textContent = number;
  } else {
    screenNumberElement.textContent += number;
  }
};

/* Get operator inside of btn */
const getOperatorBtn = (e) => {
  numbersValue.push(Number(screenNumberElement.textContent));
  operator = e.target.textContent;
  screenNumberElement.textContent = operator;
};

/* Delete number from screen */
const deleteNumber = () => {
  let screenNumber = screenNumberElement.textContent.slice(0, -1);
  screenNumberElement.textContent = screenNumber;
};

/* Delete all numbers from screen */
const resetAll = () => {
  let screenNumber = (screenNumberElement.textContent = "");
  screenNumberElement.textContent = screenNumber;
  operator = "";
  let emptyArray = numbersValue.slice(numbersValue.length, -1);

  numbersValue = emptyArray;
};

/* Operate: "add" "subtract" "multiply" divide" */
const operate = (numbersValue, operator) => {
  const [prev, current] = numbersValue;

  switch (operator) {
    case "+":
      screenNumberElement.textContent = prev + current;
      break;

    case "-":
      screenNumberElement.textContent = prev - current;
      break;

    case "*":
      screenNumberElement.textContent = prev * current;
      break;

    case "/":
      screenNumberElement.textContent = prev / current;
      break;

    default:
      break;
  }
};

/* Toggle theme selector*/
const inputElement = document.querySelectorAll(".toggle__input");

inputElement.forEach((input) => {
  input.addEventListener("click", (e) => {
    const checkboxId = e.target.id;

    const linkTag = document.querySelector("#theme");
    linkTag.setAttribute("href", `./css/${checkboxId}.css`);
  });
});
