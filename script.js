const numberEl = document.getElementById("number");
const convertBtnEl = document.getElementById("convert-btn");
const outputEl = document.getElementById("output");

convertBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  let num = Number(numberEl.value);
  if (!num) {
    outputEl.textContent = "Please enter a valid number";
  } else if (num < 1) {
    outputEl.textContent = "Please enter a number greater than or equal to 1";
  } else if (num >= 3999) {
    outputEl.textContent = "Please enter a number less than or equal to 3999";
  }
});
