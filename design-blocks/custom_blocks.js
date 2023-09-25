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
  