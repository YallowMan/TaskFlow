# Task Management DSL Design

## Create Task Block

- Description: Creates a new task with the specified details.
- Parameters:
  - Task name (string): The name of the task.
  - Description (string): A description of the task.
  - Due date (date): The deadline for the task.
  - Priority (enum: low, medium, high): The priority level of the task.
- Semantics: This block will generate code that creates a new task object with the provided details and adds it to the task management system.

Example:
create task "Finish project" with description "Complete the final report" by "2023-09-30" with priority high


## Assign Task Block

- Description: Assigns a task to an individual or team.
- Parameters:
  - Task name (string): The name of the task.
  - Assignee (string): The name of the person or team to assign the task to.
- Semantics: This block will generate code that assigns the specified task to the provided assignee in the task management system.

Example:
assign task "Finish project" to "Carlos"


## Set Dependency Block

- Description: Sets a dependency between two tasks.
- Parameters:
  - Task name (string): The name of the task.
  - Dependent task name (string): The name of the task that the current task depends on.
- Semantics: This block will generate code that establishes a dependency relationship between the specified tasks in the task management system.

Example:
set dependency "Finish project" depends on "Review presentation"


## Update Task Status Block

- Description: Updates the status of a task.
- Parameters:
  - Task name (string): The name of the task.
  - New status (enum: to do, in progress, completed): The new status of the task.
- Semantics: This block will generate code that updates the status of the specified task to the provided new status in the task management system.

Example:
update task "Review presentation" status in progress



## Filter Tasks Block

- Description: Filters tasks based on specified criteria.
- Parameters:
  - Criteria (enum: assignee, priority, status): The criteria to filter tasks by.
  - Value (string): The value to filter tasks with.
- Semantics: This block will generate code that filters the tasks in the task management system based on the provided criteria.

Example:
filter tasks by assignee "Carlos"



## Sort Tasks Block

- Description: Sorts tasks based on specified criteria.
- Parameters:
  - Criteria (enum: priority, due date, assignee): The criteria to sort tasks by.
- Semantics: This block will generate code that sorts the tasks in the task management system based on the provided criteria.

Example:
sort tasks by priority descending
