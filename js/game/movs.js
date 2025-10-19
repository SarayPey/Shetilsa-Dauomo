//							Variables: cargas y estados por habilidad 																			                                                   //
let emotionalCharge 		   	 		= 0 				 		 // Cargas para Sentido del deber
let dulceVigorizante 	        	= false 			   // Estado al activar Chef por pasatiempo
let wetDisaster                 = false          // Estado al activar Sabotaje al líder
let defiCond										= false					 // Condición para habilidades definitorias
let active												= false

//										 Variables: debilidades																										                                                   //
let coffeeIntolerance 	        = false 			 // Debilidad especial para Adam
let peanutButterAlergy 	        = false 			 // Debilidad especial para Akiko
let catAlergy 									= false 			 // Debilidad especial para Brayan

//																		Movimientos básicos																				                                                   //
function basicOne(){
	// Movimiento vertical
}

function basicTwo() {
	// Movimiento horizontal
}

function basicThree() {
	// Movimiento diagonal
}

// • Otras ideas de movimientos básicos pueden ser ingresadas aquí •

//																Movimientos especiales																				        //

function pancakesFuryMov(){

}
function cookingWarMov(){

}
function hobbyChefMov(){
	dulceVigorizante = true
}
function detectiveInstinctMov(){

}
function antiLookMaskMov(){
	emotionalCharge++
}
function dutySenseMov(){

}

function leaderSabotageMov() {
// 	let objetivo = ""
// 	wetDisaster = true
// 	if (objetivo.name === "Adam") {
// 			const dialg = ["¿Café?", "Oh no…", "*Tose* ¿Quién fue?", "No es un buen momento para esto, Brayan,"]
// 			const reaccion = dialg[Math.floor(Math.random() * dialg.length)];
// 	document.getElementById("dialogo").textContent = objetivo.nombre + ": " + reaccion;
// 		}
// 		else {
// 						const dialg = ["¿Café?", "…"]
// 			const reaccion = dialg[Math.floor(Math.random() * dialg.length)];
// 	document.getElementById("dialogo").textContent = objetivo.nombre + ": " + reaccion;

// 		}
}
// Comentado porque esto debo mejorarlo después porque inmediatamente activa diálogo
// (Eso o saber bien cómo agregar los movimientos a los personajes)

function eternityMov() {

}

function emergencyHealMov() {

}

function diceChangeMov() {

}

function absoluteEndMov() {
}

function admadisDawnMov() {

}

export { basicOne, basicTwo, basicThree, pancakesFuryMov, cookingWarMov, hobbyChefMov, detectiveInstinctMov,
	antiLookMaskMov, dutySenseMov, leaderSabotageMov, eternityMov, emergencyHealMov,
	diceChangeMov, absoluteEndMov, admadisDawnMov }