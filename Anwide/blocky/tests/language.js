if (!Blockly.Language) {
  Blockly.Language = {};
}
Blockly.Python = Blockly.Generator.get('Python');

//AQUI É O ANDROID----------------------------------------------------------
Blockly.Language.android_speak = {
  category: 'Android',
  helpUrl: 'http://code.google.com/p/android-scripting/wiki/ApiReference#ttsSpeak',
  init: function() {
    this.setColour(290);
    this.appendTitle('speak');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendInput('text', Blockly.INPUT_VALUE, 'VALUE', String);
    this.setTooltip('Speak using Android\'s TTS');
  }
};

Blockly.Language.android_toast = {
  category: 'Android',
  helpUrl: 'http://code.google.com/p/android-scripting/wiki/ApiReference#makeToast',
  init: function() {
    this.setColour(290);
    this.appendTitle('notify');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendInput('text', Blockly.INPUT_VALUE, 'VALUE', String);
    this.setTooltip('Display a small notification');
  }
};
//ATÉ AQUI------------------------------------------------------------------

Blockly.Language.maze_move = {
  // Block for moving forward or backwards.
  category: 'Robotica',
  helpUrl: 'http://code.google.com/p/blockly/wiki/Move',
  init: function() {
    this.setColour(290);
    this.appendTitle('move');
    var dropdown = new Blockly.FieldDropdown(this.DIRECTIONS);
    this.appendTitle(dropdown, 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Moves Pegman forward or backward one space.');
  }
};

Blockly.Language.maze_move.DIRECTIONS =
    [['forward', 'moveForward'], ['backward', 'moveBackward']];

Blockly.JavaScript.maze_move = function() {
  // Generate JavaScript for moving forward or backwards.
  return 'Maze.' + this.getTitleValue('DIR') + '("' + this.id + '");\n';
};

Blockly.Language.maze_turnLeft = {
  // Block for turning left or right.
  category: 'Robotica',
  helpUrl: 'http://code.google.com/p/blockly/wiki/Turn',
  init: function() {
    this.setColour(290);
    this.appendTitle('turn');
    var dropdown = new Blockly.FieldDropdown(this.DIRECTIONS);
    this.appendTitle(dropdown, 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turns Pegman left or right by 90 degrees.');
  }
};

Blockly.Language.maze_turnLeft.DIRECTIONS =
    [['left', 'turnLeft'], ['right', 'turnRight'], ['randomly', 'random']];

Blockly.Language.maze_turnRight = {
  // Block for turning left or right.
  category: 'Robotica',
  helpUrl: null,
  init: function() {
    this.setColour(290);
    this.appendTitle('turn');
    var dropdown =
        new Blockly.FieldDropdown(Blockly.Language.maze_turnLeft.DIRECTIONS);
    this.appendTitle(dropdown, 'DIR');
    this.setTitleText(Blockly.Language.maze_turnLeft.DIRECTIONS[1][0], 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Turns Pegman left or right by 90 degrees.');
  }
};

Blockly.JavaScript.maze_turnLeft = function() {
  // Generate JavaScript for turning left or right.
  var dir = this.getTitleValue('DIR');
  var code;
  if (dir == 'random') {
    code = 'if (Math.random() < 0.5) {\n' +
           '  Maze.turnLeft("' + this.id + '");\n' +
           '} else {\n' +
           '  Maze.turnRight("' + this.id + '");\n' +
           '}\n';
  } else {
    code = 'Maze.' + dir + '("' + this.id + '");\n';
  }
  return code;
};

// Turning left and right use the same code.
Blockly.JavaScript.maze_turnRight = Blockly.JavaScript.maze_turnLeft;

Blockly.Language.maze_isWall = {
  // Block for checking if there a wall.
  category: 'Logic',
  helpUrl: 'http://code.google.com/p/blockly/wiki/Wall',
  init: function() {
    this.setColour(120);
    this.setOutput(true, Boolean);
    this.appendTitle('wall');
    var dropdown = new Blockly.FieldDropdown(this.DIRECTIONS);
    this.appendTitle(dropdown, 'DIR');
    this.setTooltip('Returns true if there is a wall in ' +
                    'the specified direction.');
  }
};

Blockly.Language.maze_isWall.DIRECTIONS =
    [['ahead', 'isWallForward'],
     ['to the left', 'isWallLeft'],
     ['to the right', 'isWallRight'],
     ['behind', 'isWallBackward']];

Blockly.JavaScript.maze_isWall = function() {
  // Generate JavaScript for checking if there is a wall.
  return 'Maze.' + this.getTitleValue('DIR') + '()';
};

Blockly.Language.controls_forever = {
  // Do forever loop.
  category: 'Logic',
  helpUrl: 'http://code.google.com/p/blockly/wiki/Repeat',
  init: function() {
    this.setColour(120);
    this.appendTitle('repeat forever');
    this.appendInput('do', Blockly.NEXT_STATEMENT, 'DO');
    this.setPreviousStatement(true);
    this.setTooltip('Do the enclosed statements forever.');
  }
};

Blockly.JavaScript.controls_forever = function() {
  // Generate JavaScript for do forever loop.
  var branch0 = Blockly.JavaScript.statementToCode(this, 'DO');
  return 'while (true) {\n' + branch0 +
      '  Maze.checkTimeout("' + this.id + '");\n}\n';
};

Blockly.JavaScript.controls_whileUntil = function() {
  // Do while/until loop.
  var argument0 = Blockly.JavaScript.valueToCode(this, 'BOOL', true) || 'false';
  var branch0 = Blockly.JavaScript.statementToCode(this, 'DO');
  if (this.getTitleValue('MODE') == 'UNTIL') {
    if (!argument0.match(/^\w+$/)) {
      argument0 = '(' + argument0 + ')';
    }
    argument0 = '!' + argument0;
  }
  return 'while (' + argument0 + ') {\n' + branch0 +
      '  Maze.checkTimeout("' + this.id + '");\n}\n';
};


Blockly.Language.maze_moveC = {
  // Block for moving forward or backwards.
  category: 'Lego NXT',
  helpUrl: 'http://code.google.com/p/blockly/wiki/Move',
  init: function() {
    this.setColour(290);
    this.appendTitle('move');
    var dropdown = new Blockly.FieldDropdown(this.DIRECTIONS);
    this.appendTitle(dropdown, 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Moves Pegman forward or backward one space.');
  }
};

Blockly.Language.maze_moveA = {
  // Block for moving forward or backwards.
  category: 'Network',
  helpUrl: 'http://code.google.com/p/blockly/wiki/Move',
  init: function() {
    this.setColour(290);
    this.appendTitle('move');
    var dropdown = new Blockly.FieldDropdown(this.DIRECTIONS);
    this.appendTitle(dropdown, 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Moves Pegman forward or backward one space.');
  }
};


