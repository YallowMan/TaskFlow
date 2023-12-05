/* DEFINITIONS FOR BLOCKS */

// Block definition to initialize DB. There is no inputs as this block will just generate the necessary code.
Blockly.Blocks['initializeDB'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Initializes DB & Classes");
      this.setColour("#1D1D1D");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['restartDB'] = {
    init: function () {
      this.appendDummyInput()
        .appendField("Restarts all DB");
      this.setColour("#3CD0D5"); //Color for block is already set
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['addTask'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Add Task");
      this.appendDummyInput()
          .appendField("Name")
          .appendField(new Blockly.FieldTextInput("Task Name"), "task_name");
      this.appendDummyInput()
          .appendField("Description")
          .appendField(new Blockly.FieldTextInput("Task Description"), "task_description");
      this.appendDummyInput()
          .appendField("Due Date")
          .appendField(new Blockly.FieldDate(), "due_date");
      this.appendValueInput("assignTo")
          .setCheck("identifier")
          .appendField("Assign To");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#FF0000"); // You can choose your desired color
      this.setTooltip("Add a new task");
      this.setHelpUrl("");
    }
  };
  
  Blockly.Blocks['updateTask'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Update Task");
      this.appendDummyInput()
          .appendField("Task ID")
          .appendField(new Blockly.FieldNumber(0, 1, Infinity, 1), "task_id");
      this.appendDummyInput()
          .appendField("New Name")
          .appendField(new Blockly.FieldTextInput(""), "new_name");
      this.appendDummyInput()
          .appendField("New Description")
          .appendField(new Blockly.FieldTextInput(""), "new_description");
      this.appendDummyInput()
          .appendField("New Due Date")
          .appendField(new Blockly.FieldDate(), "new_due_date");
      this.appendValueInput("new_assignTo")
          .setCheck("identifier")
          .appendField("New Assign To");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#00FF00"); // You can choose your desired color
      this.setTooltip("Update task details");
      this.setHelpUrl("");
    }
  };
  
  
  
  /* GENERATORS FOR BLOCKS */
  
  // Generator block for initializing the database. This block should only be placed once at the beginning and can be removed later
  python.pythonGenerator.forBlock['initializeDB'] = function(block, pythonGenerator) {
    // Defines the variable code which stores the code that is outputted as a string
    // Imports in sqlite & os packages to be used
    var code = 'import sqlite3 \n';
    code += 'import os \n\n';
    // Makes a new database within the user's home directory
    code += 'user_home_dir = os.path.expanduser("~")\n';
    code += 'db_file_path = os.path.join(user_home_dir, "TaskManager.db")\n\n';
    //Defines the connection & cursor used by sqlite
    code += 'connection = sqlite3.connect(db_file_path)\n';
    code += 'cursor = connection.cursor()\n';
    // Add this code to the initializeDB block
    code += 'cursor.execute(\'\'\'\n';
    code += 'CREATE TABLE IF NOT EXISTS tasks(\n';
    code += '    taskID INTEGER PRIMARY KEY,\n';
    code += '    name VARCHAR(100),\n';
    code += '    description TEXT,\n';
    code += '    dueDate DATE,\n';
    code += '    assignedTo VARCHAR(60)\n';
    code += ')\;\'\'\')\n';

  
  
  //Closes the SQL connection after commiting
    code += 'connection.commit()\n';
    code += 'connection.close()\n\n';
  
    return code;
  };

  Blockly.Python['addTask'] = function(block) {
    var taskName = block.getFieldValue('task_name');
    var taskDescription = block.getFieldValue('task_description');
    var dueDate = block.getFieldValue('due_date');
    var assignedTo = Blockly.Python.valueToCode(block, 'assignTo', Blockly.Python.ORDER_ATOMIC);
  
    var code = 'connection = sqlite3.connect(db_file_path)\n';
    code += 'cursor = connection.cursor()\n\n';
    code += 'cursor.execute("INSERT INTO tasks (name, description, dueDate, assignedTo) VALUES (?, ?, ?, ?)", ("' + taskName + '", "' + taskDescription + '", "' + dueDate + '", "' + assignedTo + '"))\n';
    code += 'connection.commit()\n';
    code += 'connection.close()\n\n';
  
    return code;
  };

  
  Blockly.Python['updateTask'] = function(block) {
    var taskID = block.getFieldValue('task_id');
    var newName = block.getFieldValue('new_name');
    var newDescription = block.getFieldValue('new_description');
    var newDueDate = block.getFieldValue('new_due_date');
    var newAssignTo = Blockly.Python.valueToCode(block, 'new_assignTo', Blockly.Python.ORDER_ATOMIC);
  
    var code = 'connection = sqlite3.connect(db_file_path)\n';
    code += 'cursor = connection.cursor()\n\n';
    code += 'cursor.execute("UPDATE tasks SET name=?, description=?, dueDate=?, assignedTo=? WHERE taskID=?", ("' + newName + '", "' + newDescription + '", "' + newDueDate + '", "' + newAssignTo + '", ' + taskID + '))\n';
    code += 'connection.commit()\n';
    code += 'connection.close()\n\n';
  
    return code;
  };
  
