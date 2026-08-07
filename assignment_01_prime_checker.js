



const readlineSync = require("readline-sync");


function isPrime(n) {
  // Numbers less than 2 are not prime
  if (n < 2) return false;


  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}


function main() {
  const num = readlineSync.questionInt("Enter a number: ");

  if (isPrime(num)) {
    console.log(`${num} is a prime number.`);
  } else {
    console.log(`${num} is NOT a prime number.`);
  }
}

main();
