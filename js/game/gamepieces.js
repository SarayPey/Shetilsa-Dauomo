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

const tipoAlma				= ["⮝", "☀︎", "☁︎", "⚠︎", "✿", "★", "✦", "❤︎"]
// ---------------------- 0 --- 1 -- 2 --- 3 --- 4 -- 5 -- 6 --- 7 ------------------------------------------------------ //

class pieces {
	constructor(imgIcon, col1, col2, col3, tipAlma, varName, nombre, titulo, piezanombre, Cortdesc, desc,
		idleDialogo, endingDialog, seeEndDialog, sEndDialogo, revivalDialog,
		habilidades, defaMov) {
		this.imgIcon = imgIcon;
		this.col1 = col1;
		this.col2 = col2;
		this.col3 = col3;
		this.varName = varName;
		this.tipAlma = tipAlma; //Ya que hice una ficha, el tipo de "alma" determina el símbolo que usará la ficha al centro
		this.nombre = nombre;
		this.titulo = titulo,
		this.piezanombre = piezanombre;
		this.Cortdesc = Cortdesc;
		this.desc = desc;
		this.idleDialogo = idleDialogo;
		this.endingDialog = endingDialog;
		this.seeEndDialog = seeEndDialog;
		this.sEndDialogo = sEndDialogo;
		this.revivalDialog = revivalDialog;
		this.habilidades = habilidades;
		this.defaMov = defaMov
	}
}


export{ habilidades, nivPoder, tipoHabilidades, tipoAlma, pieces }