// custom_blocks.js
Blockly.Blocks['create_task'] = {
    init: function () {
        this.appendValueInput('NAME').setCheck('String').appendField('Create task with name');
        this.appendValueInput('DESCRIPTION').setCheck('String').appendField('description');
        this.appendValueInput('DUEDATE').setCheck('String').appendField('due date');
        this.appendValueInput('ASSIGNEDTO').setCheck('String').appendField('assigned to');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('Create a task with name, description, due date, and assigned to');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['update_task'] = {
    init: function () {
        this.appendValueInput('TASK_ID').setCheck('Number').appendField('Update task with ID');
        this.appendValueInput('UPDATE_FIELD').setCheck('String').appendField('update field');
        this.appendValueInput('NEW_VALUE').setCheck('String').appendField('to');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(160);
        this.setTooltip('Update a task field by ID');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['filter_tasks'] = {
    init: function () {
        this.appendValueInput('FILTER_FIELD').setCheck('String').appendField('Filter tasks by');
        this.appendValueInput('FILTER_VALUE').setCheck('String').appendField('equal to');
        this.setOutput(true, 'Array');
        this.setColour(290);
        this.setTooltip('Filter tasks based on a field');
        this.setHelpUrl('');
    }
};
