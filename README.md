# TaskFlow
------------
https://yallowman.github.io/TaskFlow/src
## Group Members
- Carlos Garcia
- Emma Harper
- Emily Nguyen
- Sofia Bejerano

## TaskFlow Videos
[Project Info](docs/Video1.mp4)

[Technical Introduction](docs/TechDemo.mp4)

## Motivation
Creating a effective task management system is crucial for personal and professional success. Simplify the sometimes overwhelming process of organizing, prioritizing and tracking tasks.

## Description of Project
Transform the way that tasks are managed with an intuitive block based language. Allows users to create, assign, and track tasks effortlessly. TaskFlow eliminates the need for complex syntax and technical expertise, making it suitable for users of all skill levels.

## How does the project relate to parsing, interpretation, and compilation?
In the context of the task management DSL, parsing would involve breaking down the user's input into individual commands, identifying the keywords, parameters, and relationships between them. The interpreter would interpret each command and perform the corresponding actions within the task management system. For example, creating a task, assigning it to an individual or team, setting dependencies, updating task status, filtering and sorting tasks, and setting reminders. Compilation could involve optimizing the commands and generating code that directly interacts with the task management system's underlying data structures and APIs.

## Installation & Set Up of Taskflow
[Instructions](docs/README.md)


### Setting up the IDE

- [Install DataGrip](https://www.jetbrains.com/datagrip/download/)
    - DataGrip is an IDE for Databases by Jetbrains. It will help you connect to and configure the localhost server if you would like to run your Sqlite server locally.
    - Account & Usage of DataGrip is free with any Chapman Email

- Create a new project in DataGrip---give it a name. Go to the Data Console on the top left by default and use the following menus: 'New -> Data Source -> Sqlite'.
- Once you have done that, you can name it TaskManager.db.

#### Creating the tables

1. Use the Sqlite statements below to create the main table for the TaskManager
```sqlite
-- Task Table: Main table used to store information of Tasks
CREATE TABLE Tasks
(
    TaskName TEXT,
    Description TEXT,
    DueDate DATE,
    assignee TEXT,
    status TEXT
);
```
2. Run the Query by pressing the green play button in the Query Console.

3. If you would like some data set up in the table copy and paste the code into the query console and once again press the green button 
```sqlite
INSERT INTO Tasks (TaskName, Description, DueDate, Assignee, status) VALUES
('Test Task', 'This is a fake task for you to look at', '2024-4-5', 'Ben', 'In Progress'),
('Set up the Frontend', 'Doing the laundry', '2025-2-7', 'Ben', 'In Progress'),
('Create New Layout', 'Create layout for new repository', '2023-12-5', 'Alex', 'Finished'),
('Fix Up Documentation', 'Fixing up the documentation in README', '2023-12-21', 'Frank', 'In Progress'),
('Celebreate New Year', 'Its A new year to Celebrate', '2023-12-31', 'Carlos', 'Finished');
```

### Using Blockly and using Datagrip
  - Open up [TaskFlow Blockly](https://yallowman.github.io/TaskFlow/src/) site
  - You will use the interface to create and build queries to task manage.
  - Generate the code by pressing the Generate Code button, which will give a SQLite query.
  - Select and Copy the query to clipboard

#### Run the query in the Datagrip IDE
- Go to the datasource you had named for your database
  - Use said console by inserting your Query
  - Run the query by pressing the green play button in the Query Console
## Future Work
- In the future we would love to be able to add a true server backend whether it be sqlite or MySQL. We want to be able to create something that acts similar to Jira where we can set up tasks and some task dependencies to make it more nuanced in how tasks should be done or not. We would also like it so that the code could be run on the blockly end and that way they can see their tasks on the same page and then be able to manipulate it as they see fit. Where the user is able to see the tables on the blockly page as well as the tasks that are closest to a timeframe with different filters to act as reminders. 
- Contributions to the project are always welcome if you would like to see something added or fixed, raise an issue in the repo. 
## Work Division
- Carlos Garcia
  - [Design Files](docs/Video1.mp4)
      - Worked on Design files
  - [Code for Blocks](src/custom_blocks.js)
      - Continued and set up code for code generation of creating and filtering the tasks

- Emily Nguyen
  - [Code for Blocks](src/custom_blocks.js)
      - Worked on Code for Creating, Updating tasks with new info and blocks themselves
  - [Documentation Refinement](docs/Instructions.md)
      - Fixed and Updated Documentation with changes to help user understand how to use TaskFlow.
    
- Emma Harper
  - [Testing Blockly Construction]
      - Tested code for bugs and issues and if queries would work within Datagrip
  - [html](src/index.html)
      - Worked with Sofia to create Index file and updated it with different blocks as they were added

- Sofia Bejerano
  - [Testing Blockly Construction]
      - Tested code for bugs and issues and if queries would work within Datagrip
  - [html](src/index.html)
      - Worked with Sofia to create Index file and updated it with different blocks as they were added
