Blockly.Blocks['echo'] = {
  init: function() {
    this.appendValueInput("echo")
        .setCheck(null)
        .appendField("Echo");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['msgbox'] = {
  init: function() {
    this.appendValueInput("Input")
        .setCheck(null)
        .appendField("Message Box");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loopuntil'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Do");
    this.appendStatementInput("do")
        .setCheck(null);
    this.appendValueInput("loop")
        .setCheck(null)
        .appendField("Loop Until");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['loopwhile'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Do");
    this.appendStatementInput("do")
        .setCheck(null);
    this.appendValueInput("loop")
        .setCheck(null)
        .appendField("Loop While");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dim'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Dim")
        .appendField(new Blockly.FieldTextInput("x"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['dimchange'] = {
  init: function() {
    this.appendValueInput("change")
        .setCheck(null)
        .appendField(new Blockly.FieldTextInput("x"), "variable")
        .appendField("=");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

//code

Blockly.JavaScript['echo'] = function(block) {
  var value_echo = Blockly.JavaScript.valueToCode(block, 'echo', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'WScript.Echo ' + value_echo;
  return code;
};

Blockly.JavaScript['msgbox'] = function(block) {
  var value_input = Blockly.JavaScript.valueToCode(block, 'Input', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'MsgBox ' + value_input;
  return code;
};

Blockly.JavaScript['loopuntil'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var value_loop = Blockly.JavaScript.valueToCode(block, 'loop', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Do' + statements_do + "Loop Until " + value_loop;
  return code;
};

Blockly.JavaScript['loopwhile'] = function(block) {
  var statements_do = Blockly.JavaScript.statementToCode(block, 'do');
  var value_loop = Blockly.JavaScript.valueToCode(block, 'loop', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Do' + statements_do + "Loop While " + value_loop;
  return code;
};

Blockly.JavaScript['dim'] = function(block) {
  var text_value = block.getFieldValue('value');
  // TODO: Assemble JavaScript into code variable.
  var code = 'Dim ' + text_value;
  return code;
};

Blockly.JavaScript['dimchange'] = function(block) {
  var text_variable = block.getFieldValue('variable');
  var value_change = Blockly.JavaScript.valueToCode(block, 'change', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = text_variable + ' = ' + value_change;
  return code;
};
