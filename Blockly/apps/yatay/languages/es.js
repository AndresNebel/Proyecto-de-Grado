document.write('<script type="text/javascript" src="./blocks/math.js"></script>\n');
document.write('<script type="text/javascript" src="./blocks/butia.js"></script>\n');
document.write('<script type="text/javascript" src="./blocks/control.js"></script>\n');
document.write('<script type="text/javascript" src="./blocks/variables.js"></script>\n');

if (!Yatay.Msg){ 
	Yatay.Msg = {};
}

// Menu Messages
Yatay.Msg.MENU_ROBOTEST = "Probar Robot";
Yatay.Msg.MENU_DEBUG = "Depurar";
Yatay.Msg.MENU_RUN = "Correr";
Yatay.Msg.MENU_EDIT = "Ver Código";
Yatay.Msg.MENU_LOAD = "Cargar";
Yatay.Msg.MENU_SAVE = "Guardar";
Yatay.Msg.MENU_STOP = "Detener";
Yatay.Msg.MENU_TRASH = "Limpiar área de trabajo";
Yatay.Msg.MENU_CHECK = "Comportamiento listo";

// Dialogs Messages
Yatay.Msg.DIALOG_CODE_LABEL = "Código Generado";	
Yatay.Msg.DIALOG_RUN = "Probar";
Yatay.Msg.DIALOG_FCHOOSER_LABEL = "Elige un proyecto!";		
Yatay.Msg.DIALOG_OPEN = "Abrir";

// Butia Messages
Yatay.Msg.BUTIA_HELPURL = 'http://www.fing.edu.uy/inco/proyectos/butia/';
Yatay.Msg.BUTIA_MOVE_TITLE = 'mover';
Yatay.Msg.BUTIA_MOVE_FORWARD = 'adelante';
Yatay.Msg.BUTIA_MOVE_BACKWARD = 'atrás';
Yatay.Msg.BUTIA_MOVE_TOOLTIP = 'Muever el robot Butiá hacia adelante o atrás.';
Yatay.Msg.BUTIA_TRUN_TITLE = 'girar';
Yatay.Msg.BUTIA_TURN_LEFT = 'izquierda';
Yatay.Msg.BUTIA_TURN_RIGHT = 'derecha';
Yatay.Msg.BUTIA_TURN_TOOLTIP = 'Girar el robot Butiá hacia la derecha o izquierda.';
Yatay.Msg.BUTIA_STOP_TITLE = 'detener';
Yatay.Msg.BUTIA_STOP_TOOLTIP = 'Detener el robot Butiá.';
Yatay.Msg.BUTIA_GREY_TITLE = 'sensor gris';
Yatay.Msg.BUTIA_GREY_TOOLTIP = 'Obtener el valor del sensor de grises del robot Butiá.';

// Control Messages
Yatay.Msg.CONTROLS_IF_TOOLTIP = "Si la condicion es verdadera se hace lo primero, de lo contrario se hace lo segundo.";
Yatay.Msg.CONTROLS_IF_HELPURL = "";
Yatay.Msg.CONTROLS_IF_MSG_IF = "si";
Yatay.Msg.CONTROLS_IF_MSG_THEN = "entonces";
Yatay.Msg.CONTROLS_IF_MSG_ELSEIF = "sino si";
Yatay.Msg.CONTROLS_IF_MSG_ELSE = "sino";

Yatay.Msg.CONTROL_OPERATION_AND = "y";
Yatay.Msg.CONTROL_OPERATION_OR = "o";
Yatay.Msg.CONTROL_OPERATION_HELPURL = "";
Yatay.Msg.LOGIC_OPERATION_TOOLTIP_AND = "Si se cumplen ambas condiciones, el bloque será verdadero.";
Yatay.Msg.LOGIC_OPERATION_TOOLTIP_OR = "Si se cumple al menos una de las condiciones, el bloque será verdadero.";

Yatay.Msg.CONTROL_NEGATE_HELPURL = "";
Yatay.Msg.CONTROL_NEGATE_TITLE = "no %1";
Yatay.Msg.CONTROL_NEGATE_TOOLTIP = "El bloque es verdadero si se cumple lo opuesto a la condición.";

Yatay.Msg.CONTROL_BOOLEAN_TRUE = "verdadero";
Yatay.Msg.CONTROL_BOOLEAN_FALSE = "falso";
Yatay.Msg.CONTROL_BOOLEAN_HELPURL = "";
Yatay.Msg.CONTROL_BOOLEAN_TOOLTIP = "Un bloque de verdadero o de falso, sirve para comparar o para hacer una condicion siempre verdadera o falsa.";

Yatay.Msg.CONTROL_WHILE = "mientras";
Yatay.Msg.CONTROL_WHILE_TOOLTIP = "Mientras la condición sea verdadera se ejecuta lo que este dentro de este bloque.";

Yatay.Msg.CONTROL_BEHAVIOUR = "comportamiento";
Yatay.Msg.CONTROL_BEHAVIOUR_PRIORITY = "   prioridad";
Yatay.Msg.CONTROL_BEHAVIOUR_TOOLTIP = "Crea un nuevo comportamiento del robot con el nombre y prioridad elegidas.";

Yatay.Msg.CONTROL_SLEEP = "esperar";
Yatay.Msg.CONTROL_SLEEP_TOOLTIP = "El programa espera la cantidad de tiempo ingresada para continuar ejecutando.";

Yatay.Msg.CONTROL_REPEAT = "repetir " ;
Yatay.Msg.CONTROL_REPEAT_TOOLTIP = "Repetir un numero determinado de veces";

//Variable Messages
Yatay.Msg.VARIABLES_GET_TITLE = "";
Yatay.Msg.VARIABLES_GET_TAIL = "";
Yatay.Msg.VARIABLES_GET_TOOLTIP = "Obtener valor de una variable";
Yatay.Msg.VARIABLES_GET_CREATE_SET = "";
Yatay.Msg.VARIABLES_SET_TITLE = "guardar en";
Yatay.Msg.VARIABLES_SET_TAIL = "";

//Math Messages 
Yatay.Msg.MATH_CONSTRAIN_HELPURL = "";
Yatay.Msg.MATH_CONSTRAIN_TITLE = "%1 entre %2 y %3";
Yatay.Msg.MATH_CONSTRAIN_TOOLTIP = ""; 
Yatay.Msg.MATH_ROUND_OPERATOR_ROUND = "redondear";
Yatay.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "redondear arriba";
Yatay.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "redondear abajo";
Yatay.Msg.MATH_TRIG_TOOLTIP_SIN = "sen";
Yatay.Msg.MATH_TRIG_TOOLTIP_ASIN = "asen";
Yatay.Msg.MATH_SINGLE_TOOLTIP_ROOT = "raiz cuad.";
Yatay.Msg.MATH_SINGLE_TOOLTIP_ABS = "valor abs";
Yatay.Msg.MATH_SINGLE_TOOLTIP_NEG = "opuesto";
