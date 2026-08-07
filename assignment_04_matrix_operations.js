

const readlineSync = require('readline-sync');
function multiplyMatrices(matrixA, matrixB) {
  const M = matrixA.length;
  const N = matrixA[0].length; // must equal matrixB.length
  const P = matrixB[0].length;

  const result = [];
  for (let i = 0; i < M; i++) {
    result[i] = [];
    for (let j = 0; j < P; j++) {
      let sum = 0;
      for (let k = 0; k < N; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      result[i][j] = sum;
    }
  }
  return result;
}

function main() {

  // --- PART A: Transpose ---
  console.log("=== PART A: Transpose ===");
  const rowsA = readlineSync.questionInt("Enter number of rows: ");
  const colsA = readlineSync.questionInt("Enter number of columns: ");
  const matA = readMatrix("matrix", rowsA, colsA);

  console.log("\nOriginal Matrix:");
  printMatrix(matA);
  console.log("\nTransposed Matrix:");
  printMatrix(transposeMatrix(matA));

  // --- PART B: Addition ---
  console.log("\n=== PART B: Matrix Addition ===");
  const rowsB = readlineSync.questionInt("Enter number of rows: ");
  const colsB = readlineSync.questionInt("Enter number of columns: ");
  const matB1 = readMatrix("Matrix 1", rowsB, colsB);
  const matB2 = readMatrix("Matrix 2", rowsB, colsB);

  console.log("\nMatrix 1:");
  printMatrix(matB1);
  console.log("\nMatrix 2:");
  printMatrix(matB2);
  console.log("\nSum:");
  printMatrix(addMatrices(matB1, matB2));

  // --- PART C: Multiplication ---
  console.log("\n=== PART C: Matrix Multiplication ===");
  const M = readlineSync.questionInt("Enter rows in Matrix A: ");
  const N = readlineSync.questionInt("Enter columns in Matrix A (= rows in Matrix B): ");
  const P = readlineSync.questionInt("Enter columns in Matrix B: ");
  const matC1 = readMatrix("Matrix A", M, N);
  const matC2 = readMatrix("Matrix B", N, P);

  console.log("\nMatrix A:");
  printMatrix(matC1);
  console.log("\nMatrix B:");
  printMatrix(matC2);
  console.log("\nProduct (A x B):");
  printMatrix(multiplyMatrices(matC1, matC2));
}

main();
