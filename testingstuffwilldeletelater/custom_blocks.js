Blockly.Blocks['initialize_database'] = {
  init: function() {
    this.setColour(230);
    this.appendDummyInput('Name').appendField('Initialize Database');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  genCode: function(workspace) {
    var dbConnectionName = Blockly.Python.variableDeclaration('dbConnection', 'sqlite3.connect("TaskManager.db")');
    return dbConnectionName;
  },
  customFields: {},
};

Blockly.Blocks['create_task'] = {
  init: function() {
    this.setColour(300);
    this.appendValueInput('name').setCheck('String').appendField('Create Task: Name');
    this.appendValueInput('description').setCheck('String').appendField('Description');
    this.appendValueInput('due_date').setCheck('String').appendField('Due Date');
    this.appendValueInput('assigned_to').setCheck('String').appendField('Assigned To');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  genCode: function(workspace) {
    var dbConnectionName = Blockly.Python.variable('dbConnection');
    var nameValue = Blockly.Python.valueToCode(workspace, 'name', Blockly.Python.ORDER_ASSIGNMENT);
    var descriptionValue = Blockly.Python.valueToCode(workspace, 'description', Blockly.Python.ORDER_ASSIGNMENT);
    var dueDateValue = Blockly.Python.valueToCode(workspace, 'due_date', Blockly.Python.ORDER_ASSIGNMENT);
    var assignedToValue = Blockly.Python.valueToCode(workspace, 'assigned_to', Blockly.Python.ORDER_ASSIGNMENT);

    var code = 'dbConnection.execute("INSERT INTO task (name, description, due_date, assigned_to) VALUES (?, ?, ?, ?)", (' + nameValue + ', ' + descriptionValue + ', ' + dueDateValue + ', ' + assignedToValue + '))';
    return code;
  },
  customFields: {},
};

Blockly.Blocks['update_task_info'] = {
  init: function() {
    this.setColour(160);
    this.appendValueInput('task_id').setCheck('Number').appendField('Update Task Info: Task ID');
    this.appendValueInput('name').setCheck('String').appendField('Name (Optional)');
    this.appendValueInput('description').setCheck('String').appendField('Description (Optional)');
    this.appendValueInput('due_date').setCheck('String').appendField('Due Date (Optional)');
    this.appendValueInput('assigned_to').setCheck('String').appendField('Assigned To (Optional)');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  genCode: function(workspace) {
    var dbConnectionName = Blockly.Python.variable('dbConnection');
    var taskIdValue = Blockly.Python.valueToCode(workspace, 'task_id', Blockly.Python.ORDER_ASSIGNMENT);
    var nameValue = Blockly.Python.valueToCode(workspace, 'name', Blockly.Python.ORDER_ASSIGNMENT);
    var descriptionValue = Blockly.Python.valueToCode(workspace, 'description', Blockly.Python.ORDER_ASSIGNMENT);
    var dueDateValue = Blockly.Python.valueToCode(workspace, 'due_date', Blockly.Python.ORDER_ASSIGNMENT);
    var assignedToValue = Blockly.Python.valueToCode(workspace, 'assigned_to', Blockly.Python.ORDER_ASSIGNMENT);

    var code = 'dbConnection.execute("UPDATE task SET name = ' + nameValue + ', description = ' + descriptionValue + ', due_date = ' + dueDateValue + ', assigned_to = ' + assignedToValue + ' WHERE id = ' + taskIdValue + '")';
    return code;
  },
  customFields: {},
};
