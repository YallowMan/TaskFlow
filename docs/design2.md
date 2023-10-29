# Task Management Design 2 

## Create Task Block
function createTask(taskName, description, dueDate, priority) {
  // Generate code to create a new task object
  const task = new Task(taskName, description, dueDate, priority);
  
  // Add the task to the task management system
  taskManagementSystem.addTask(task);
  
  // Output: New task created and added to the system
}

## Assign Task Block
function assignTask(taskName, assignee) {
  // Find the specified task
  const task = taskManagementSystem.findTaskByName(taskName);
  
  // Update the task's assignee
  task.assignee = assignee;
  
  // Output: Task assigned to the specified assignee
}

## Set Dependency Block
function setDependency(taskName, dependentTaskName) {
  // Find the specified tasks
  const task = taskManagementSystem.findTaskByName(taskName);
  const dependentTask = taskManagementSystem.findTaskByName(dependentTaskName);
  
  // Establish the dependency relationship
  task.addDependency(dependentTask);
  
  // Output: Dependency relationship set between the tasks
}

## Update Task Status Block
function updateTaskStatus(taskName, newStatus) {
  // Find the specified task
  const task = taskManagementSystem.findTaskByName(taskName);
  
  // Update the task's status
  task.status = newStatus;
  
  // Output: Task status updated to the new status
}

## Filter Tasks Block
function filterTasks(criteria, value) {
  // Generate code to filter tasks based on the provided criteria and value
  const filteredTasks = taskManagementSystem.filterTasks(criteria, value);
  
  // Output: Filtered tasks based on the specified criteria
  return filteredTasks;
}

## Sort Tasks Block
function sortTasks(criteria) {
  // Generate code to sort tasks based on the provided criteria
  const sortedTasks = taskManagementSystem.sortTasks(criteria);
  
  // Output: Sorted tasks based on the specified criteria
  return sortedTasks;
}

## Use Case for Recursive Blockly Program
A use case for a recursive Blockly program in the task management system could be to generate a hierarchical task structure. The program could have a "Create Subtask" block that allows users to create subtasks within a task. The subtasks can also have their own subtasks, creating a recursive structure. This allows users to build infinitely complex task hierarchies from a small number of building blocks.
For example, the user can create a task "Finish project" and then use the "Create Subtask" block to create subtasks like "Write code", "Test functionality", and "Document features". Each of these subtasks can have their own subtasks, forming a recursive structure.
Data and Interaction with the Block-based Programming Language
The task management system needs to maintain the following data:
Task: Each task has properties such as name, description, due date, priority, assignee, status, and dependencies.

## Data and Interaction with the Block-based Programming Language
The task management system needs to maintain the following data:
Task: Each task has properties such as name, description, due date, priority, assignee, status, and dependencies.
The block-based programming language interacts with this data by generating JavaScript code that manipulates the task objects in the task management system. The generated code performs operations such as creating tasks, assigning tasks, updating task status, setting task dependencies, filtering tasks, and sorting tasks.
The task management system can be implemented using a database to store and retrieve task information. Here is an outline of a possible database schema for the task management system:
Task Table:
Task ID (Primary Key)
Name
Description
Due Date
Priority
Assignee
Status
Dependency Table:
Task ID (Foreign Key)
Dependent Task ID (Foreign Key)

The block-based programming language can interact with this database by generating JavaScript code that performs CRUD (Create, Read, Update, Delete) operations on the task and dependency tables. The generated code will use SQL queries to interact with the database and manipulate the task data accordingly.