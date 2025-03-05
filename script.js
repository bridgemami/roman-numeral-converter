const numberEl = document.getElementById("number");
const convertBtnEl = document.getElementById("convert-btn");
const outputEl = document.getElementById("output");
const romanNumerals = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" },
];

function convertRomanNumeral(num) {
  let result = "";
  for (let { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }
  return result;
}

convertBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  let num = Number(numberEl.value);
  if (!num) {
    outputEl.textContent = "Please enter a valid number";
  } else if (num < 1) {
    outputEl.textContent = "Please enter a number greater than or equal to 1";
  } else if (num > 3999) {
    outputEl.textContent = "Please enter a number less than or equal to 3999";
  } else {
    outputEl.textContent = convertRomanNumeral(num);
  }
});
