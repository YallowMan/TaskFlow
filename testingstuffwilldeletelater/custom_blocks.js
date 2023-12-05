Blockly.Blocks['initialize_database'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Initialize Database");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Initialize the SQLite database");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['create_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Create Task");
    this.appendValueInput("task_name")
        .setCheck("String")
        .appendField("Name");
    this.appendValueInput("task_description")
        .setCheck("String")
        .appendField("Description");
    this.appendValueInput("due_date")
        .setCheck("String")
        .appendField("Due Date");
    this.appendValueInput("assigned_person")
        .setCheck("String")
        .appendField("Assigned Person");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(180);
    this.setTooltip("Create a new task in the database");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['update_task'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Update Task");
    this.appendValueInput("task_id")
        .setCheck("Number")
        .appendField("Task ID");
    this.appendValueInput("new_description")
        .setCheck("String")
        .appendField("New Description");
    this.appendValueInput("new_due_date")
        .setCheck("String")
        .appendField("New Due Date");
    this.appendValueInput("new_assigned_person")
        .setCheck("String")
        .appendField("New Assigned Person");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(270);
    this.setTooltip("Update task information in the database");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['initialize_database'] = function(block) {
  // Generate JavaScript code to initialize the SQLite database
  var code = `
    // Code to initialize the SQLite database
    // Example: var db = openDatabase('mydb', '1.0', 'My first database', 2 * 1024 * 1024);
  `;
  return code;
};

Blockly.JavaScript['create_task'] = function(block) {
  var taskName = Blockly.JavaScript.valueToCode(block, 'task_name', Blockly.JavaScript.ORDER_ATOMIC);
  var taskDescription = Blockly.JavaScript.valueToCode(block, 'task_description', Blockly.JavaScript.ORDER_ATOMIC);
  var dueDate = Blockly.JavaScript.valueToCode(block, 'due_date', Blockly.JavaScript.ORDER_ATOMIC);
  var assignedPerson = Blockly.JavaScript.valueToCode(block, 'assigned_person', Blockly.JavaScript.ORDER_ATOMIC);

  // Generate JavaScript code to create a task in the SQLite database
  var code = `
    // Code to create a task in the SQLite database
    // Example: db.transaction(function(tx) {
    //   tx.executeSql('INSERT INTO tasks (name, description, due_date, assigned_person) VALUES (${taskName}, ${taskDescription}, ${dueDate}, ${assignedPerson})');
    // });
  `;
  return code;
};

Blockly.JavaScript['update_task'] = function(block) {
  var taskId = Blockly.JavaScript.valueToCode(block, 'task_id', Blockly.JavaScript.ORDER_ATOMIC);
  var newDescription = Blockly.JavaScript.valueToCode(block, 'new_description', Blockly.JavaScript.ORDER_ATOMIC);
  var newDueDate = Blockly.JavaScript.valueToCode(block, 'new_due_date', Blockly.JavaScript.ORDER_ATOMIC);
  var newAssignedPerson = Blockly.JavaScript.valueToCode(block, 'new_assigned_person', Blockly.JavaScript.ORDER_ATOMIC);

  // Generate JavaScript code to update task information in the SQLite database
  var code = `
    // Code to update task information in the SQLite database
    // Example: db.transaction(function(tx) {
    //   tx.executeSql('UPDATE tasks SET description = ${newDescription}, due_date = ${newDueDate}, assigned_person = ${newAssignedPerson} WHERE id = ${taskId}');
    // });
  `;
  return code;
};
