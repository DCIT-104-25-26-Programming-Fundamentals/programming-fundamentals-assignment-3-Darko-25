


function printFibonacci(n) {
  if (n <= 0) {
    console.log("Error: Please enter a positive integer.");
    return;
  }

  const terms = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    terms.push(a);
    const next = a + b;
    a = b;
    b = next;
  }

  console.log("Fibonacci sequence: " + terms.join(" "));
}

function isFibonacci(num) {
  if (num < 0) return false;

  let a = 0;
  let b = 1;

  while (a < num) {
    const next = a + b;
    a = b;
    b = next;
  }

  return a === num;
}

function main() {
  // --- Part A ---
  console.log("=== PART A: Print First N Terms ===");
  const n = readlineSync.questionInt("How many terms? ");
  printFibonacci(n);

  // --- Part B ---
  console.log("\n=== PART B: Fibonacci Membership Check ===");
  const num = readlineSync.questionInt("Enter a number to check: ");

  if (isFibonacci(num)) {
    console.log(`${num} is a Fibonacci number.`);
  } else {
    console.log(`${num} is NOT a Fibonacci number.`);
  }
}

main();