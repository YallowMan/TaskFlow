
// Define the "create_task" block
Blockly.Blocks['create_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Create Task')
    this.appendValueInput('TASK_NAME')
        .appendField('Task Name')
        .setCheck('String')
        .appendField(',');
    this.appendValueInput('DESCRIPTION')
        .setCheck('String')
        .appendField('Description');
    this.appendValueInput('DUE_DATE')
        .setCheck('Date')
        .appendField('Due Date');
    this.appendValueInput('ASSIGNEE')
        .setCheck('String')
        .appendField('Assignee');
    this.appendValueInput('STATUS')
        .setCheck('String')
        .appendField('Status');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#89CFF0'); // light blue
    this.setTooltip('Insert a new task into the table');
  }
};

Blockly.JavaScript['create_task'] = function(block) {
  var taskName = Blockly.JavaScript.valueToCode(block, 'TASK_NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var description = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION', Blockly.JavaScript.ORDER_ATOMIC);
  var dueDate = Blockly.JavaScript.valueToCode(block, 'DUE_DATE', Blockly.JavaScript.ORDER_ATOMIC);
  var assignee = Blockly.JavaScript.valueToCode(block, 'ASSIGNEE', Blockly.JavaScript.ORDER_ATOMIC);
  var status = Blockly.JavaScript.valueToCode(block, 'STATUS', Blockly.JavaScript.ORDER_ATOMIC);

  return `INSERT INTO Tasks (TaskName, Description, DueDate, Assignee, status) VALUES (${taskName}, ${description}, ${dueDate}, ${assignee}, ${status});`;
};

Blockly.Blocks['text'] = {
init: function() {
  this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput(""), "TEXT");
  this.setOutput(true, "String");
  this.setColour(160);
  this.setTooltip("");
  this.setHelpUrl("");
}
};

// Define the "assign_task" block
Blockly.Blocks['assign_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Assign Task");
    this.appendValueInput("TASK_NAME")
        .setCheck('String')
        .appendField("Task Name");
    this.appendValueInput("ASSIGNEE")
        .setCheck('String')
        .appendField("Assignee");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#89CFF0'); // light blue
    this.setTooltip("Assign a task to a user");
  }
};

Blockly.JavaScript['assign_task'] = function(block) {
  var taskName = Blockly.JavaScript.valueToCode(block, 'TASK_NAME', Blockly.JavaScript.ORDER_NONE) || "''";
  var assignee = Blockly.JavaScript.valueToCode(block, 'ASSIGNEE', Blockly.JavaScript.ORDER_NONE) || "''";

  // Generate JavaScript code to assign a task to a user
  var code = `UPDATE Tasks SET Assignee = ${assignee} WHERE TaskName = ${taskName};`;

  return code;
};


Blockly.Blocks['retrieve_tasks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('Retrieve All Tasks');
    this.setOutput(true, 'String');
    this.setColour('#89CFF0'); // light blue
    this.setTooltip('Retrieve all tasks from the table');
  }
};

Blockly.JavaScript['retrieve_tasks'] = function(block) {
  return 'SELECT * FROM Tasks';
};

// Define the "set_dependency" block
Blockly.Blocks['set_dependency'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Set Dependency");
    this.appendValueInput("dependent_task")
        .setCheck(null)
        .appendField("Dependent Task");
    this.appendValueInput("dependency_task")
        .setCheck(null)
        .appendField("Dependency Task");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Set a dependency between tasks");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['set_dependency'] = function(block) {
  var dep_task = Blockly.JavaScript.valueToCode(block, 'dependent_task', Blockly.JavaScript.ORDER_NONE) || "''";
  var dependency = Blockly.JavaScript.valueToCode(block, 'dependency_task', Blockly.JavaScript.ORDER_NONE) || "''";

  // Generate JavaScript code to create a task object
  var code = `{
    dependent task: ${dep_task},
    dependency task: ${dependency}
  }`;

  return code;
};

// Define the "update_task_status" block
Blockly.Blocks['update_task_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Update Task Status");
    this.appendValueInput("task")
        .setCheck(null)
        .appendField("Task");
    this.appendValueInput("status")
        .setCheck('String')  // Updated to set the expected input type
        .appendField("Status");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Update the status of a task");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['update_task_status'] = function(block) {
  var task_name = Blockly.JavaScript.valueToCode(block, 'task', Blockly.JavaScript.ORDER_NONE) || "''";
  var status = Blockly.JavaScript.valueToCode(block, 'status', Blockly.JavaScript.ORDER_NONE) || "''";

  // Generate JavaScript code to update the status of a task
  var code = `UPDATE Tasks SET status = ${status} WHERE TaskName = ${task_name};`;

  return code;
};


// Define the "filter_tasks" block
Blockly.Blocks['filter_tasks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Filter Tasks");
    this.appendValueInput("criteria")
        .setCheck('String')  // Updated to set the expected input type
        .appendField("Status");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip("Filter tasks based on status");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['filter_tasks'] = function(block) {
  var status = Blockly.JavaScript.valueToCode(block, 'criteria', Blockly.JavaScript.ORDER_NONE) || "''";

  // Generate JavaScript code to filter tasks based on status
  var code = `SELECT * FROM Tasks WHERE status = ${status}`;

  return code;
};


// Define the "sort_tasks" block
Blockly.Blocks['sort_tasks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sort Tasks");
    this.appendValueInput("criteria")
        .setCheck(null)
        .appendField("Criteria")
        .appendField(new Blockly.FieldDropdown([
          ['Ascending Due Date', 'DueDate ASC'],
          ['Descending Due Date', 'DueDate DESC']
        ]), 'SORT_ORDER');
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip("Sort tasks based on criteria");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['sort_tasks'] = function(block) {
  var sortOrder = block.getFieldValue('SORT_ORDER');

  // Generate JavaScript code to sort tasks based on the selected criteria
  var code = `SELECT * FROM Tasks ORDER BY ${sortOrder}`;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// Define the "date" block
Blockly.Blocks['custom_date'] = {
init: function() {
  this.appendDummyInput()
      .appendField("Date:");

  // Dropdown for Month
  var monthOptions = [
    ["January", "1"],
    ["February", "2"],
    ["March", "3"],
    ["April", "4"],
    ["May", "5"],
    ["June", "6"],
    ["July", "7"],
    ["August", "8"],
    ["September", "9"],
    ["October", "10"],
    ["November", "11"],
    ["December", "12"]
  ];
  this.appendDummyInput()
      .appendField("Month")
      .appendField(new Blockly.FieldDropdown(monthOptions), "MONTH");

  // Dropdown for Day
  var dayOptions = [];
  for (var i = 1; i <= 31; i++) {
    dayOptions.push([i.toString(), i.toString()]);
  }
  this.appendDummyInput()
      .appendField("Day")
      .appendField(new Blockly.FieldDropdown(dayOptions), "DAY");

  // Text field for Year
  this.appendDummyInput()
      .appendField("Year")
      .appendField(new Blockly.FieldTextInput('2023'), 'YEAR');

  this.setOutput(true, "Date");
  this.setColour(230);
  this.setTooltip("Create a custom date.");
}
};

Blockly.JavaScript['custom_date'] = function(block) {
var month = block.getFieldValue('MONTH');
var day = block.getFieldValue('DAY');
var year = block.getFieldValue('YEAR');

// Generate JavaScript code to create a Date object
var code = `'${year}-${month}-${day}'`;

return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// STATUS - 'status'
Blockly.Blocks['status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Status")
        .appendField(new Blockly.FieldDropdown([
          ['In Progress', 'In Progress'],
          ['Finished', 'Finished']
        ]), 'STATUS');
    this.setOutput(true, 'String');
    this.setColour(230);
    this.setTooltip("Select a task status");
  }
};

Blockly.JavaScript['status'] = function(block) {
  var status = block.getFieldValue('STATUS');

  // Generate JavaScript code to get the selected status
  var code = `'${status}'`;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

