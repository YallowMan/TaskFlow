Blockly.Blocks['create_task'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String");
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };



Blockly.JavaScript['create_task'] = function(block) {
    // Custom block JavaScript code.
    var code = '// custom block code\n';
    return code;
};

Blockly.Blocks['assign_task'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck("String");
      this.setColour(90);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blockly.JavaScript['assign_task'] = function(block) {
    // Custom block JavaScript code.
    var code = '// custom block code\n';
    return code;
};
