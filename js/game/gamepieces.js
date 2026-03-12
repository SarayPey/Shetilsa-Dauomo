class habilidades{
	constructor(nombreH, tipH, nivelPod, desc, dialogo, movCode){
		this.nombreH = nombreH;
		this.tipH = tipH;
		this.nivelPod = nivelPod;
		this.desc = desc;
		this.dialogo = dialogo;
		this.movCode = movCode;
	}
}

const tipoHabilidades = ["Ofensiva", "Defensiva", "Invocadora", "Curadora", "De equipo", "De sinergia", "Definitorias"]
// ------------------------- 0 ---------- 1 ---------- 2 ---------- 3 ---------- 4 ----------- 5 ------------ 6 --------- //

const nivPoder			  = ["Poderosa", "Radiante", "Valerosa", "Austera"]
// ----------------------- ULTRA ----- MYTHIC ----- RARE ---- COMMON ---------------------------------------------------- //
// ------------------------- 0 ---------- 1 -------- 2 --------- 3 ------------------------------------------------------ //

const tipoAlma				= ["⮝", "☀︎", "☁︎", "⚠︎", "◆", "★", "✿", "❤︎", "❖", "✱", "❋", "✉", "♫", "☯"]
// ---------------------- 0 --- 1 -- 2 --- 3 --- 4 -- 5 -- 6 --- 7 --- 8 -- 9 -- 10 -- 11 -- 12 - 13 -------------------- //

class pieces {
	constructor(imgIcon, col1, col2, col3, tipAlma, varName, nombre, titulo, piezanombre, Cortdesc, desc,
		idleDialogo, endingDialog, seeEndDialog, endDialogo, revivalDialog,
		habilidades, defaMov) {
		this.imgIcon = imgIcon;
		this.col1 = col1; // Color de la ficha (Normal)
		this.col2 = col2; // Color de la ficha (Oscuro)
		this.col3 = col3; // Color de la ficha (Alma)
		this.varName = varName; // Nombre de variable con fines de programación más simple
		this.tipAlma = tipAlma; //Ya que hice una ficha, el tipo de "alma" determina el símbolo que usará la ficha al centro + movimiento
		this.nombre = nombre; // Nombre de personaje
		this.titulo = titulo; // Título canon de personaje
		this.piezanombre = piezanombre; // Nombre de la pieza
		this.Cortdesc = Cortdesc; // Resumen para jugadores casuales
		this.desc = desc; // Descripción larga
		this.idleDialogo = idleDialogo; // Diálogos en momento de preparación (mínimo 5)
		this.endingDialog = endingDialog; // Díalogos cuando acaba con una ficha (mínimo 5)
		this.seeEndDialog = seeEndDialog; // Díalogos cuando ve morir a un aliado (mínimo 5)
		this.endDialogo = endDialogo; // Díalogos cuando muere (mínimo 5)
		this.revivalDialog = revivalDialog; // Díalogos cuando revive (mínimo 5)
		this.habilidades = habilidades;
		this.defaMov = defaMov;
	}
}


export{ habilidades, nivPoder, tipoHabilidades, tipoAlma, pieces }