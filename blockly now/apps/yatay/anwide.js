//Page Functionality
var rtl = (document.location.search == '?rtl');
var block = null;
var pResult = null;

function start() {
  Blockly.inject(document.getElementById('svg'), {'rtl': rtl, path: '../'});
}

function createCustomBlock() {
  block = new Blockly.Block(Blockly.mainWorkspace, '');
  block.initSvg();
  block.getSvgRoot().setAttribute('transform', 'translate(60, 40)');
  block.render();
  document.getElementById('blockFactoryForm').reset();
  document.getElementById('customTbody').style.display = 'table-row-group';
}

function setColour() {
  block.setColour(document.getElementById('colour').value);
}

function appendTitle() {
  var type = document.getElementById('titleType').value;
  var title = document.getElementById('titleLabel').value;
  if (type == 'textInput') {
    title = new Blockly.FieldTextInput(title);
  }
  block.appendTitle(title);
}

function setTooltip() {
  block.setTooltip(document.getElementById('tooltip').value);
}

function setPreviousStatement() {
  try {
    block.setPreviousStatement(
        document.getElementById('previousStatement').checked);
  } finally {
    document.getElementById('previousStatement').checked =
        !!block.previousConnection;
  }
}

function setNextStatement() {
  try {
    block.setNextStatement(document.getElementById('nextStatement').checked);
  } finally {
    document.getElementById('nextStatement').checked = !!block.nextConnection;
  }
}

function setOutput() {
  try {
    block.setOutput(document.getElementById('output').checked, null);
  } finally {
    document.getElementById('output').checked = !!block.outputConnection;
  }
}

function setCollapsed() {
  block.setCollapsed(document.getElementById('collapsed').checked);
}

function setInputsInline() {
  block.setInputsInline(document.getElementById('inputsInline').checked);
}

function addInput() {
  var type = parseInt(document.getElementById('inputType').value, 10);
  var label = document.getElementById('inputLabel').value;
  var name = document.getElementById('inputName').value;
  block.appendInput(label, type, name);
}

function removeInput() {
  var name = document.getElementById('removeInputName').value;
  block.removeInput(name);
}

function toXml() {
  var output = document.getElementById('code_area');
  var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
  output.value = Blockly.Xml.domToText(xml);
  output.focus();
  output.select();
}

function fromXml() {
  var input = document.getElementById('code_area');
  var xml = Blockly.Xml.textToDom(input.value);
  Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, xml);
}

function toJavaScript() {
  var output = document.getElementById('code_area');
  output.value = Blockly.Generator.workspaceToCode('JavaScript');
}

function toDart() {
  var output = document.getElementById('code_area');
  output.value = Blockly.Generator.workspaceToCode('Dart');
}

function toPython() {
  var output = document.getElementById('code_area');
  output.value = "#\r\n#\r\n#Generated by Blockly\r\nimport android\r\n" + Blockly.Generator.workspaceToCode('Python');
}

function toLua() {
  var output = document.getElementById('code_area');
  output.value = "--\r\n--\r\n--Generated by Yatay\r\n" + Blockly.Generator.workspaceToCode('Lua');
}

function GenExecute() {
  var output = document.getElementById('code_area');
  output.value = "#\r\n#\r\n#Generated by Blockly\r\nimport android\r\n" + Blockly.Generator.workspaceToCode('Python');
  get(this.parentNode);
  pResult = null;
  timerFunction('start',1);
}

function execute() {
  get(this.parentNode);
  pResult = null;
  timerFunction('start',1);
}

var newCount;
function timerFunction(position,count) {
	if (position == 'start') {
		document.getElementById("timer").innerHTML="Execution time: " + count
		newCount = count + 1
		setTimeout("timerFunction('go',newCount)",1500)
	}

if (position == 'go') {
		document.getElementById("timer").innerHTML="Execution time: " + count
		newCount++;

		if (pResult) {
			if (pResult.indexOf("finished at") > 6) {
				t=1
			} else {
				setTimeout("timerFunction('go',newCount)",1500)
			}
		} else {
			setTimeout("timerFunction('go',newCount)",1500)
		}
		poststr="teste=1";
		//makePOSTRequest('/cgi-bin/output.cgi', alertContents2, poststr);
		makePOSTRequest('/output.cgi', alertContents2, poststr);
	}
}

var http_request = false;

function makePOSTRequest(url, ac, parameters) {
	http_request = false;
	if (window.XMLHttpRequest) { // Mozilla, Safari,...
	http_request = new XMLHttpRequest();
	if (http_request.overrideMimeType) {
	 http_request.overrideMimeType('text/html');
	}
	} else if (window.ActiveXObject) { // IE
	try {
	 http_request = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
	 try {
	   http_request = new ActiveXObject("Microsoft.XMLHTTP");
	 } catch (e) {}
	}
	}
	if (!http_request) {
		alert('Cannot create XMLHTTP instance');
		return false;
	}

	http_request.onreadystatechange = ac;
	http_request.open('POST', url, true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http_request.setRequestHeader("Content-length", parameters.length);
	http_request.setRequestHeader("Connection", "close");
	http_request.send(parameters);
}

function alertContents() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			result = http_request.responseText;
			document.getElementById('myspan').innerHTML = result;
		} else {
			alert('There was a problem with the request.');
		}
	}
}

function alertContents2() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			 result = http_request.responseText;
			 pResult = result;
			 document.getElementById('output').innerHTML = result;
		} else {
			 alert('There was a problem with the request.');
		}
	}
}

function get(obj) {
	var poststr = "value1=" + encodeURI( document.getElementById("code_area").value );
	makePOSTRequest('/anwide.cgi', alertContents, poststr);
}