


const readlineSync = require("readline-sync");

function printTable(n) {
  console.log(`Multiplication Table for ${n}:`);

  for (let i = 1; i <= 12; i++) {
    // Pad each part so columns stay aligned regardless of digit count
    const left   = String(n).padStart(2);
    const middle = String(i).padStart(2);
    const result = String(n * i).padStart(3);

    console.log(`${left}  x  ${middle}  = ${result}`);
  }
}


function singleTable() {
  const n = readlineSync.questionInt("Enter a number: ");

  if (n <= 0) {
    console.log("Error: Please enter a positive integer.");
    return;
  }

  console.log();
  printTable(n);
}


function allTables() {
  const n = readlineSync.questionInt("Enter N (tables 1 to N will be printed): ");

  if (n <= 0) {
    console.log("Error: Please enter a positive integer.");
    return;
  }

  console.log();
  for (let i = 1; i <= n; i++) {
    printTable(i);
    if (i < n) console.log("---------------------------");
  }
}

function main() {
  console.log("=== Multiplication Table Generator ===");
  console.log("1. Single table");
  console.log("2. All tables from 1 to N");

  const choice = readlineSync.questionInt("\nChoose an option (1 or 2): ");

  if (choice === 1) {
    singleTable();
  } else if (choice === 2) {
    allTables();
  } else {
    console.log("Error: Please enter 1 or 2.");
  }
}

main();