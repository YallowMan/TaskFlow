// Define the "create_task" block
Blockly.Blocks['create_task'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Create Task");
      this.appendValueInput("task_name")
          .setCheck("String")
          .appendField("Task Name");
      this.appendValueInput("task_description")
          .setCheck("String")
          .appendField("Task Description");
      this.appendValueInput("due_date")
          .setCheck("Date")
          .appendField("Due Date");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("Create a new task");
      this.setHelpUrl("");
    }
};
Blockly.JavaScript['create_task'] = function(block) {
  var taskName = Blockly.JavaScript.valueToCode(block, 'task_name', Blockly.JavaScript.ORDER_NONE) || "''";
  var taskDescription = Blockly.JavaScript.valueToCode(block, 'task_description', Blockly.JavaScript.ORDER_NONE) || "''";
  var dueDate = Blockly.JavaScript.valueToCode(block, 'due_date', Blockly.JavaScript.ORDER_NONE) || "null";

  // Generate JavaScript code to create a task object
  var code = `{
    name: ${taskName},
    description: ${taskDescription},
    dueDate: ${dueDate}
  }`;

  return code;
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
    this.appendValueInput("MONTH")
        .setCheck("String")
        .appendField("Month");
    this.appendValueInput("DAY")
        .setCheck("String")
        .appendField("Day");
    this.appendValueInput("YEAR")
        .setCheck("String")
        .appendField("Year");
    this.setOutput(true, "Date");
    this.setColour(230);
    this.setTooltip("Create a custom date.");
  }
};
Blockly.JavaScript['custom_date'] = function(block) {
  var month = Blockly.JavaScript.valueToCode(block, 'MONTH', Blockly.JavaScript.ORDER_NONE) || '0';
  var day = Blockly.JavaScript.valueToCode(block, 'DAY', Blockly.JavaScript.ORDER_NONE) || '0';
  var year = Blockly.JavaScript.valueToCode(block, 'YEAR', Blockly.JavaScript.ORDER_NONE) || '0';

  // Generate JavaScript code to create a Date object
  var code = `new Date(${year}, ${month} - 1, ${day})`;

  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
