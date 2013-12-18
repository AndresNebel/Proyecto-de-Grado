/**
 * @fileoverview 
 * @author 
 */

if (!Yatay.Tablet){ 
	Yatay.Tablet = {};
} 

/**
 * Xml workspace code 
 * @type {string}
 */
Yatay.Tablet.domCode = null; 
 
/**
 * Load tablet.html 
 * Generate behaviours list
 */
$(document).ready(function(){	   
	$('#main_menu').load('./tablet.html');	
	var list = $("<div class=\"list-group bx\">" +
					"<ul class=\"nav\">" + 
						"<li>" +
							"<button class=\"list-group-item\">Cras justo odio</button>" +
						"</li>" +
						"<li>" +
							"<button class=\"list-group-item\">Cras justo odio</button>" +
						"</li>" +
					"</ul>" +
				"</div>");
    list.appendTo($("#bx_list"));
});

/**
 * Handle edit code click
 */
function edit(){	
	$('#code_editable').html(Blockly.Lua.workspaceToCode());
	$('#code_modal').modal('show');
};

/**
 * Handle run click
 */
function run(){	
	sendTasks();
	$('#btn_robotest').toggle('slow');
	$('#btn_debug').toggle('slow');	   
	$('#btn_run').toggle('slow');			
	$('#btn_load').toggle('slow');
	$('#btn_save').toggle('slow');		
	if($('#btn_edit').is(":visible")) {			
		$('#btn_edit').toggle('slow');
	}
	$('#btn_stop').toggle('slow');
};

/**
 * Handle debug click
 */
function debug(){		   
	$('#btn_robotest').toggle('slow');
	$('#btn_debug').toggle('slow');	   
	$('#btn_run').toggle('slow');			
	$('#btn_load').toggle('slow');
	$('#btn_save').toggle('slow');
	if($('#btn_edit').is(":visible")) {			
		$('#btn_edit').toggle('slow');
	}
	$('#btn_stop').toggle();
};

/**
 * Handle stop click
 */
function stop(){	
	killTasks();
	$('#btn_robotest').toggle('slow');
	$('#btn_debug').toggle('slow');	   
	$('#btn_run').toggle('slow');			
	$('#btn_edit').toggle('slow');
	$('#btn_load').toggle('slow');
	$('#btn_save').toggle('slow');
	$('#btn_stop').toggle('slow');
};

/**
 * Handle robotest click
 */
function robotest(){		   

};

/**
 * Handle save click
 */
function toXml() {
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	var text = Blockly.Xml.domToText(xml);
	var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "yatay.xml");
};

/**
 * Read YataY file, and load domCode
 */
function readFile(evt) {
	var f = evt.target.files[0];
	if (f) {
		var r = new FileReader();
		r.onload = function(e) { 
			Yatay.Tablet.domCode = Blockly.Xml.textToDom(e.target.result);  
		}
		r.readAsText(f);
	} else { 
		alert("Failed to load file");
	}
};

/**
 * Show file chooser modal
 */
function openFileChooser(){
	$('#fchooser_modal').modal('show');
	document.getElementById('file_input').addEventListener('change', readFile, false);
};

/**
 * Load code from xml
 */
function fromXml() {
	Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, Yatay.Tablet.domCode);
	$('#fchooser_modal').modal('hide');
};

/**
 * Handle run task edited click
 */
function runEdited(){	
	sendTasksEdited();
	$('#btn_robotest').toggle('slow');
	$('#btn_debug').toggle('slow');	   
	$('#btn_run').toggle('slow');			
	$('#btn_load').toggle('slow');
	$('#btn_save').toggle('slow');		
	if($('#btn_edit').is(":visible")) {			
		$('#btn_edit').toggle('slow');
	}
	$('#btn_stop').toggle('slow');
	$('#code_modal').modal('hide');
};

/**
 * Textarea autoresize
 */
var resizeTextarea = function() {
    this.style.height = "";
    var
        $this = $(this),            
        outerHeight = $this.outerHeight(),
        scrollHeight = this.scrollHeight,
        innerHeight = $this.innerHeight(),
        magic = outerHeight - innerHeight;
    this.style.height = scrollHeight + magic + "px";
};

$('textarea').keydown(resizeTextarea).keyup(resizeTextarea).change(resizeTextarea).focus(resizeTextarea);