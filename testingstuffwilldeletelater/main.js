// main.js
var workspace = Blockly.inject('blocklyDiv', { media: 'https://unpkg.com/blockly/media/', toolbox: document.getElementById('toolbox') });

Blockly.JavaScript['create_task'] = function (block) {
    var name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var description = Blockly.JavaScript.valueToCode(block, 'DESCRIPTION', Blockly.JavaScript.ORDER_ATOMIC);
    var dueDate = Blockly.JavaScript.valueToCode(block, 'DUEDATE', Blockly.JavaScript.ORDER_ATOMIC);
    var assignedTo = Blockly.JavaScript.valueToCode(block, 'ASSIGNEDTO', Blockly.JavaScript.ORDER_ATOMIC);

    // Implement database creation logic here
    console.log('Creating task:', name, description, dueDate, assignedTo);

    return '';
};

Blockly.JavaScript['update_task'] = function (block) {
    var taskId = Blockly.JavaScript.valueToCode(block, 'TASK_ID', Blockly.JavaScript.ORDER_ATOMIC);
    var updateField = Blockly.JavaScript.valueToCode(block, 'UPDATE_FIELD', Blockly.JavaScript.ORDER_ATOMIC);
    var newValue = Blockly.JavaScript.valueToCode(block, 'NEW_VALUE', Blockly.JavaScript.ORDER_ATOMIC);

    // Implement database update logic here
    console.log('Updating task:', taskId, updateField, newValue);

    return '';
};

Blockly.JavaScript['filter_tasks'] = function (block) {
    var filterField = Blockly.JavaScript.valueToCode(block, 'FILTER_FIELD', Blockly.JavaScript.ORDER_ATOMIC);
    var filterValue = Blockly.JavaScript.valueToCode(block, 'FILTER_VALUE', Blockly.JavaScript.ORDER_ATOMIC);

    // Implement database filter logic here
    console.log('Filtering tasks:', filterField, 'equal to', filterValue);

    // Return a placeholder array for demonstration purposes
    return ['[filtered tasks]', Blockly.JavaScript.ORDER_ATOMIC];
};
