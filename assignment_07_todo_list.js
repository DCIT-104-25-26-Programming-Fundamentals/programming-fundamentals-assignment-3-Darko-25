

const readlineSync = require("readline-sync");

// Shared task list — all functions read from and write to this array
let tasks = [];

function printMenu() {
  console.log("\n============================");
  console.log("      TO-DO LIST MENU");
  console.log("============================");
  console.log("1. Add task");
  console.log("2. View tasks");
  console.log("3. Delete task");
  console.log("4. Quit");
}

function addTask() {
  const description = readlineSync.question("Enter task: ").trim();

  if (description === "") {
    console.log("Error: Task description cannot be empty.");
    return;
  }

  tasks.push(description);
  console.log(`Task added: "${description}"`);
}

function viewTasks() {
  if (tasks.length === 0) {
    console.log("Your to-do list is empty. Add a task to get started!");
    return;
  }

  console.log("\nYour Tasks:");
  for (let i = 0; i < tasks.length; i++) {
    console.log(`${i + 1}. ${tasks[i]}`);
  }
}


function deleteTask() {
  if (tasks.length === 0) {
    console.log("No tasks to delete.");
    return;
  }

  viewTasks();

  const taskNumber = readlineSync.questionInt("\nEnter task number to delete: ");
  const index = taskNumber - 1; // Convert 1-based input to 0-based index

  if (index < 0 || index >= tasks.length) {
    console.log(`Error: "${taskNumber}" is not a valid task number.`);
    return;
  }

  const removed = tasks.splice(index, 1)[0]; // splice returns an array; grab the item
  console.log(`Task "${removed}" has been removed.`);
}

function main() {
  console.log("Welcome to your To-Do List!");

  while (true) {
    printMenu();
    const choice = readlineSync.questionInt("Enter your choice (1-4): ");

    if (choice === 1) {
      addTask();
    } else if (choice === 2) {
      viewTasks();
    } else if (choice === 3) {
      deleteTask();
    } else if (choice === 4) {
      console.log("Goodbye!");
      break;
    } else {
      console.log("Error: Invalid choice. Please enter a number between 1 and 4.");
    }
  }
}

main();