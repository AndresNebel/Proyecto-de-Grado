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
 * Behaviours ready 
 * @type {string[]}
 */
Yatay.Tablet.behaviours = []; 
 
/**
 * Load tablet.html 
 * Generate behaviours list
 */
$(document).ready(function(){	   
	$('#main_menu').load('./tablet.html');	
	var list = $("<div class=\"list-group bx\">" +
					"<ul class=\"nav\" id=\"bx_list\">" + 
					"</ul>" +
				"</div>");
    list.appendTo($("#bx_ready"));
});

Yatay.Tablet.TestMode = false; 

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
function runTasks(){	
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
	sendTasks();
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
	if (Yatay.Tablet.TestMode)
	{
		Yatay.Tablet.TestMode = false;
		Yatay.leaveTestMode();
	}
	else
	{
		killTasks();
		$('#btn_debug').toggle('slow');	   
		$('#btn_run').toggle('slow');		
	}
	$('#btn_robotest').toggle('slow');		
	$('#btn_edit').toggle('slow');
	$('#btn_load').toggle('slow');
	$('#btn_save').toggle('slow');
	$('#btn_stop').toggle('slow');
	$('#btn_bx_ready').toggle('slow');	
};

/**
 * Handle robotest click
 */
function robotest(){		   
	Yatay.enterTestMode();
	Yatay.Tablet.TestMode = true;
	$('#btn_robotest').toggle('slow');
	$('#btn_load').toggle('slow');
	$('#btn_save').toggle('slow');
	$('#btn_bx_ready').toggle('slow');
	if($('#btn_edit').is(":visible")) {			
		$('#btn_edit').toggle('slow');
	}
	$('#btn_stop').toggle();
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

/**
 * Image click correction
 */
 function imgClickCorrection() {
	$(".imgclick").mousedown(function(){
		var mrgtb = parseInt($(this).css("margin-top"));
		var mrglf = parseInt($(this).css("margin-left"));
		mrgtb=mrgtb+1; mrglf=mrglf+1;
		$(this).css("margin-top",mrgtb+"px").css("margin-left",mrglf+"px");
	}).mouseup(function(){
		var mrgtb = parseInt($(this).css("margin-top"));
		var mrglf = parseInt($(this).css("margin-left"));
		mrgtb=mrgtb-1; mrglf=mrglf-1;
		$(this).css("margin-top",mrgtb+"px").css("margin-left",mrglf+"px");
	}); 
};

/**
 * Set behaviour as ready
 */
function bxReady() {
	var xml = Blockly.Xml.workspaceToDom(Blockly.mainWorkspace);
	var text = Blockly.Xml.domToText(xml);
	var id = Blockly.mainWorkspace.getAllBlocks()[0].id;
	Yatay.Tablet.behaviours.push([id, text]);
	
	var list = $("<li>" +
					"<button id=\"" + id + "\" class=\"list-group-item\">" + id + 						
					"</button>" +
				"</li>");
    list.appendTo($("#bx_list"));
	
	document.getElementById(id).onclick = bxToWorkspace;
	Blockly.mainWorkspace.clear();
};

/**
 * Draw selected behaviour to workspace
 */
function bxToWorkspace() {
	for (i = 0; i < Yatay.Tablet.behaviours.length; ++i) {
		if (Yatay.Tablet.behaviours[i][0] == this.id) {
			Blockly.mainWorkspace.clear();
			code = Blockly.Xml.textToDom(Yatay.Tablet.behaviours[i][1]);
			Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, code);
			var item = "#" + this.id;
			$(item).remove();
			Yatay.Tablet.behaviours.splice(i, 1);
		}
	}
};