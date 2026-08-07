

const readlineSync = require("readline-sync");

function add(a, b)      { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function modulus(a, b) {
  if (b === 0) return null;
  return a % b;
}
function divide(a, b) {
  if (b === 0) return null;
  return a / b;
}
function exponentiate(a, b) { return Math.pow(a, b); }


function printMenu() {
  console.log("\n============================");
  console.log("      SIMPLE CALCULATOR");
  console.log("============================");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");
  console.log("5. Modulus");
  console.log("6. Exponentiation");
  console.log("7. Quit");
}

function getOperands() {
  const a = readlineSync.questionFloat("Enter first number : ");
  const b = readlineSync.questionFloat("Enter second number: ");
  return { a, b };
}

function printResult(a, operator, b, result) {
  console.log(`Result: ${a} ${operator} ${b} = ${parseFloat(result.toFixed(2))}`);
}

function runOperation(choice) {
  const { a, b } = getOperands();

  const operations = {
    1: { fn: add,          symbol: "+"  },
    2: { fn: subtract,     symbol: "-"  },
    3: { fn: multiply,     symbol: "*"  },
    4: { fn: divide,       symbol: "/"  },
    5: { fn: modulus,      symbol: "%"  },
    6: { fn: exponentiate, symbol: "**" },
  };

  const op     = operations[choice];
  const result = op.fn(a, b);

  if (result === null) {
    console.log("Error: Cannot divide by zero.");
    return;
  }

  printResult(a, op.symbol, b, result);
}

function main() {
  console.log("Welcome to the Simple Calculator!");

  while (true) {
    printMenu();
    const choice = readlineSync.questionInt("Select an operation (1-7): ");

    if (choice === 7) {
      console.log("Goodbye!");
      break;
    } else if (choice >= 1 && choice <= 6) {
      runOperation(choice);
    } else {
      console.log("Error: Invalid choice. Please enter a number between 1 and 7.");
    }
  }
}

main();