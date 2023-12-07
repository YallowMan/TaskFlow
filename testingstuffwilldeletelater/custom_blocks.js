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

  return `INSERT INTO Tasks (TaskName, Description, DueDate) VALUES (${taskName}, ${description}, ${dueDate});`;
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
    this.appendValueInput("task")
        .setCheck(null)
        .appendField("Task");
    this.appendValueInput("user")
        .setCheck(null)
        .appendField("User");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Assign a task to a user");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['assign_task'] = function(block) {
  var taskName = Blockly.JavaScript.valueToCode(block, 'task', Blockly.JavaScript.ORDER_NONE) || "''";
  var user = Blockly.JavaScript.valueToCode(block, 'user', Blockly.JavaScript.ORDER_NONE) || "''";

  // Generate JavaScript code to create a task object
  var code = `{
    task: ${taskName},
    user: ${user}
  }`;

  return code;
};

Blockly.Blocks['retrieve_tasks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('SELECT * FROM Tasks;');
    this.setOutput(true, 'String');
    this.setColour('#89CFF0'); // light blue
    this.setTooltip('Retrieve all tasks from the table');
  }
};

Blockly.JavaScript['retrieve_tasks'] = function(block) {
  return 'SELECT * FROM Tasks;';
};

// FILTER CONDITION - 'filter_condition'
Blockly.Blocks['filter_condition'] = {
  init: function() {
    this.appendValueInput('FILTER_FIELD')
        .setCheck('var')
        .appendField('Filter by');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([
          ['=', '='],
          ['>', '>'],
          ['<', '<'],
          ['>=', '>='],
          ['<=', '<='],
          ['LIKE', 'LIKE'],
          ['!=', '!=']
        ]), 'OPERATOR');
    this.appendValueInput('FILTER_VALUE')
        .setCheck(['String', 'Number'])
        .appendField('Value');
    this.setInputsInline(true);
    this.setOutput(true, 'var');
    this.setColour('#CDB7F6'); // purple color
    this.setTooltip('Filter rows based on a condition');
  }
};

Blockly.JavaScript['filter_condition'] = function(block) {
  var field = Blockly.JavaScript.valueToCode(block, 'FILTER_FIELD', Blockly.JavaScript.ORDER_ATOMIC);
  var operator = block.getFieldValue('OPERATOR');
  var value = Blockly.JavaScript.valueToCode(block, 'FILTER_VALUE', Blockly.JavaScript.ORDER_ATOMIC);

  return `${field} ${operator} ${value}`;
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
        .setCheck(null)
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

  // Generate JavaScript code to create a task object
  var code = `{
    task: ${task_name},
    status: ${status}
  }`;

  //var displayCode = 'console.log(\'${code}\');';

  return code;
};


// Define the "filter_tasks" block
Blockly.Blocks['filter_tasks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Filter Tasks");
    this.appendValueInput("criteria")
        .setCheck(null)
        .appendField("Criteria");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip("Filter tasks based on criteria");
    this.setHelpUrl("");
  }
};

// Define the "sort_tasks" block
Blockly.Blocks['sort_tasks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sort Tasks");
    this.appendValueInput("criteria")
        .setCheck(null)
        .appendField("Criteria");
    this.setOutput(true, null);
    this.setColour(210);
    this.setTooltip("Sort tasks based on criteria");
    this.setHelpUrl("");
  }
};

// Define the "date" block
Blockly.Blocks['custom_date'] = {
init: function() {
  this.appendDummyInput()
      .appendField("Date:");

  // Dropdown for Month
  var monthOptions = [
    ["January", "0"],
    ["February", "1"],
    ["March", "2"],
    ["April", "3"],
    ["May", "4"],
    ["June", "5"],
    ["July", "6"],
    ["August", "7"],
    ["September", "8"],
    ["October", "9"],
    ["November", "10"],
    ["December", "11"]
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
var code = `new Date(${year}, ${month}, ${day})`;

return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

