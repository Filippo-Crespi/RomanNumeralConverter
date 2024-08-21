const decimalNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputText = document.getElementById("output");

convertBtn.onclick = () => {
  switch (true) {
    case decimalNumber.value === "":
      outputText.textContent = "Please enter a valid number";
      return;

    case Number(decimalNumber.value) < 1:
      outputText.textContent =
        "Please enter a number greater than or equal to 1";
      return;

    case Number(decimalNumber.value) >= 4000:
      outputText.textContent =
        "Please enter a number less than or equal to 3999";
      return;
  }

  const converter = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";
  let number = Number(decimalNumber.value);

  for (let entry in converter) {
    result += entry.repeat(number / converter[entry]);
    number = number % converter[entry];
    if (number === 0) {
      break;
    }
  }

  outputText.textContent = result;
  return;
};
