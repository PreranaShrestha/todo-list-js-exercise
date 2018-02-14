// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
class Task {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.complete = false;
    }

    logState() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    }

    markCompleted() {
      this.complete = true;
    }

}

// DRIVER CODE CHANGES BELOW

// const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do Laundry", "😨");


const task1 = new Task("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = new Task("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

