Blockly.Blocks['custom_block'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("custom block");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['custom_block'] = function(block) {
    // Custom block JavaScript code.
    var code = '// custom block code\n';
    return code;
};