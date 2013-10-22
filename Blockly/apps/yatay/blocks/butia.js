/**
 * Blockly Apps: YataY Blocks
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Blocks for YataY application.
 * @author YataY Group
 */
'use strict';

Blockly.Blocks['butia_move'] = {
	// Block for moving robot butiá forward or backwards.
	init: function() {
		var DIRECTIONS = [
			[Yatay.Msg.BUTIA_MOVE_FORWARD, 'moveForward'], 
			[Yatay.Msg.BUTIA_MOVE_BACKWARD, 'moveBackward']
		];
		this.setHelpUrl(Yatay.Msg.BUTIA_HELPURL);
		this.setColour(120);
		this.appendDummyInput()
			.appendTitle(Yatay.Msg.BUTIA_MOVE_TITLE)	
			.appendTitle(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Yatay.Msg.BUTIA_MOVE_TOOLTIP);
	}
};

Blockly.Blocks['butia_turn'] = {
	// Block for turning robot butiá left or right.
	init: function() {
		var DIRECTIONS = [
			[Yatay.Msg.BUTIA_TURN_LEFT, 'turnLeft'], 
			[Yatay.Msg.BUTIA_TURN_RIGHT, 'turnRight']
		];
		this.setHelpUrl(Yatay.Msg.BUTIA_HELPURL);
		this.setColour(120);
		this.appendDummyInput()
			.appendTitle(Yatay.Msg.BUTIA_TRUN_TITLE)	
			.appendTitle(new Blockly.FieldDropdown(DIRECTIONS), 'DIR');
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Yatay.Msg.BUTIA_TURN_TOOLTIP);
	}
};

Blockly.Blocks['butia_stop'] = {
	// Block for stopping robot butiá.
	init: function() {
		this.setColour(120);
		this.appendDummyInput()
			.appendTitle(Yatay.Msg.BUTIA_STOP_TITLE);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setTooltip(Yatay.Msg.BUTIA_STOP_TOOLTIP);
	}
};

Blockly.Blocks['butia_grey'] = {
	// Block for get value of grey sensor of robot butiá.
	init: function() {
		this.setColour(120);
		this.appendDummyInput()
			.appendTitle(Yatay.Msg.BUTIA_GREY_TITLE);
		this.setOutput(true, 'Number');
		this.setTooltip(Yatay.Msg.BUTIA_GREY_TOOLTIP);
	}
};