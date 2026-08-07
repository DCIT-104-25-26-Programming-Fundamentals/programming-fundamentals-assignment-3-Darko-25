

const readlineSync = require("readline-sync");

let students = [];

function computeAverage(scores) {
  if (scores.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function findStudentById(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) return students[i];
  }
  return null;
}


function printMenu() {
  console.log("\n================================");
  console.log("   STUDENT RECORD SYSTEM MENU");
  console.log("================================");
  console.log("1. Add student");
  console.log("2. Display all students");
  console.log("3. Calculate average score");
  console.log("4. Quit");
}


function addStudent() {
  const name = readlineSync.question("Student name: ").trim();
  if (name === "") {
    console.log("Error: Name cannot be empty.");
    return;
  }

  const id = readlineSync.questionInt("Student ID: ");
  if (findStudentById(id) !== null) {
    console.log(`Error: A student with ID ${id} already exists.`);
    return;
  }

  const numScores = readlineSync.questionInt("How many scores? ");
  if (numScores <= 0) {
    console.log("Error: Number of scores must be a positive integer.");
    return;
  }

  const scores = [];
  for (let i = 1; i <= numScores; i++) {
    const score = readlineSync.questionFloat(`Enter score ${i}: `);
    scores.push(score);
  }

  students.push({ name, id, scores });
  console.log(`Student "${name}" added successfully.`);
}

// -----------------------------------------------------------------------------
// displayAllStudents — prints a formatted table of every student's record
// -----------------------------------------------------------------------------
function displayAllStudents() {
  if (students.length === 0) {
    console.log("No students on record yet.");
    return;
  }

  // Measure the longest name so columns stay aligned
  let maxNameLen = "Name".length;
  for (let i = 0; i < students.length; i++) {
    if (students[i].name.length > maxNameLen) maxNameLen = students[i].name.length;
  }

  // Header
  const nameCol    = "Name".padEnd(maxNameLen);
  const idCol      = "ID".padEnd(10);
  const scoresCol  = "Scores".padEnd(24);
  const avgCol     = "Average";
  console.log(`\n${nameCol}  ${idCol}  ${scoresCol}  ${avgCol}`);
  console.log("-".repeat(maxNameLen + 10 + 24 + 12));

  // One row per student
  for (let i = 0; i < students.length; i++) {
    const s          = students[i];
    const avg        = computeAverage(s.scores).toFixed(2);
    const name       = s.name.padEnd(maxNameLen);
    const id         = String(s.id).padEnd(10);
    const scores     = s.scores.join(", ").padEnd(24);
    console.log(`${name}  ${id}  ${scores}  ${avg}`);
  }
}

function calculateAverage() {
  const id      = readlineSync.questionInt("Enter student ID: ");
  const student = findStudentById(id);

  if (student === null) {
    console.log(`Error: No student found with ID ${id}.`);
    return;
  }

  const avg = computeAverage(student.scores).toFixed(2);
  console.log(`${student.name}'s average score: ${avg}`);
}

function main() {
  console.log("Welcome to the Student Record System!");

  while (true) {
    printMenu();
    const choice = readlineSync.questionInt("Enter your choice (1-4): ");

    if (choice === 1) {
      addStudent();
    } else if (choice === 2) {
      displayAllStudents();
    } else if (choice === 3) {
      calculateAverage();
    } else if (choice === 4) {
      console.log("Goodbye!");
      break;
    } else {
      console.log("Error: Invalid choice. Please enter a number between 1 and 4.");
    }
  }
}

main();


