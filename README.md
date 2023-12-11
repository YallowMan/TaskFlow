# TaskFlow
------------
https://yallowman.github.io/TaskFlow/src
## Group Members
- Carlos Garcia
- Emma Harper
- Emily Nguyen
- Sofia Bejerano

## TaskFlow Videos
Project Info

Technical Introduction

## Motivation
Creating a effective task management system is crucial for personal and professional success. Simplify the sometimes overwhelming process of organizing, prioritizing and tracking tasks.

## Description of Project
Transform the way that tasks are managed with an intuitive block based language. Allows users to create, assign, and track tasks effortlessly. TaskFlow eliminates the need for complex syntax and technical expertise, making it suitable for users of all skill levels.

## How does the project relate to parsing, interpretation, and compilation?
In the context of the task management DSL, parsing would involve breaking down the user's input into individual commands, identifying the keywords, parameters, and relationships between them. The interpreter would interpret each command and perform the corresponding actions within the task management system. For example, creating a task, assigning it to an individual or team, setting dependencies, updating task status, filtering and sorting tasks, and setting reminders. Compilation could involve optimizing the commands and generating code that directly interacts with the task management system's underlying data structures and APIs.

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
  
  
      
