# Instructions
## Installation & Set Up of Taskflow

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
