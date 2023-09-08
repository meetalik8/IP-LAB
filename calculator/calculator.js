const readline = require("readline");

const read = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function getInputNumbers() {
  read.question("Enter a number: ", (input) => {
    const num1 = parseFloat(input);
    read.question("Enter a number: ", (input2) => {
    const num2 = parseFloat(input2)
      read.question(
        "Choose an operation 1. add, 2. sub, 3. multiply, 4. divide, or 5. exit: ",
        (operation) => {
          if (operation === "5") {
            console.log("Calculator closed");
            read.close();
            return; }
          calculate(num1, num2, operation);
          getInputNumbers();
        }
      );
    });
  });
}
function calculate(num1, num2, operation) {
  let result;
  switch (operation) {
    case "1":
      result = num1 + num2;
      console.log(`Result: ${num1} + ${num2} = ${result}`);
      break;
    case "2":
      result = num1 - num2;
      console.log(`Result: ${num1} - ${num2} = ${result}`);
      break;
    case "3":
      result = num1 * num2;
      console.log(`Result: ${num1} * ${num2} = ${result}`);
      break;
    case "4":
      if (num2 === 0) {
        console.log("Error: Division by zero");
        break;
      }
      result = num1 / num2;
      console.log(`Result: ${num1} / ${num2} = ${result}`);
      break;
    default:
      console.log("Invalid operation");
      return;
  }
}

getInputNumbers();
