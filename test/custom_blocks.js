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
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Create a new task with the specified name and description");
    this.setHelpUrl("");
  }
};

// Define the "task_details" block
Blockly.Blocks['task_details'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Task Details");
      this.appendValueInput("task_name")
          .setCheck("String")
          .appendField(new Blockly.FieldTextInput("default"), "Task Name");
      this.appendValueInput("task_description")
          .setCheck("String")
          .appendField(new Blockly.FieldTextInput("default"), "Task Description");
      this.setOutput(true, "Array");
      this.setColour(230);
      this.setTooltip("Provide the task name and description");
      this.setHelpUrl("");
    }
  };

// Define the JavaScript code to be generated for the "create_task" block
Blockly.JavaScript['create_task'] = function(block) {
  var task_name = Blockly.JavaScript.valueToCode(block, 'task_name', Blockly.JavaScript.ORDER_ATOMIC);
  var task_description = Blockly.JavaScript.valueToCode(block, 'task_description', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'createTask(' + task_name + ', ' + task_description + ');\n';
  return code;
};

// Define the "createTask" function
function createTask(task_name, task_description) {
  alert("Task created: " + task_name);
}