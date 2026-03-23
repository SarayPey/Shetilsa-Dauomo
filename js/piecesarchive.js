import {adam, aiyana, akiko, alec, alejandro, alexa, andres, brayan, brisa, cara, christian, connor, daniel, darya, diana, eleanor, eliza, eivor, emma, erin, evelyn, gavya, jacob, jadyn, jamesL, joseph, laura, luis, mariaD, maryam, melissa, michael, olexei, orfeo, serafin, violeta } from "./game/data/dataP/canon.js";
function infoOC(pieceObj){
	console.log("Llamando a " + pieceObj.nombre + " (" + pieceObj.piezanombre + ").")
	if (!pieceObj || !pieceObj.idleDialogo) return;
	document.getElementById("info").textContent = `${pieceObj.nombre}, ${pieceObj.titulo}
	Pieza: ${pieceObj.piezanombre}
	${pieceObj.cortDesc}`;
	console.log(pieceObj.nombre + " (" + pieceObj.piezanombre + ") ha respondido")
};

window.onload = () => {
	window.melissa   = melissa;
	window.akiko     = akiko;
	window.darya     = darya;
	window.diana     = diana;
	window.daniel    = daniel;
	window.eivor     = eivor;
	window.adam      = adam;
	window.brayan    = brayan;
	window.maryam    = maryam;
	window.jacob     = jacob;
	window.joseph    = joseph;
	window.laura     = laura;
	window.cara      = cara;
	window.eliza     = eliza;
	window.jamesL    = jamesL;
	window.andres    = andres;
	window.alejandro = alejandro;
	window.michael   = michael;
	window.connor    = connor;
	window.jadyn     = jadyn;
	window.orfeo     = orfeo;
	window.eleanor   = eleanor;
	window.serafin   = serafin;
	window.olexei    = olexei;
	window.aiyana    = aiyana;
	window.brisa     = brisa;
	window.evelyn    = evelyn;
	window.luis      = luis;
	window.alexa     = alexa;
	window.erin      = erin;

	const character = [adam, aiyana, akiko, alec, alejandro, alexa, andres, brayan, brisa, cara, christian, connor, daniel, darya, diana, eleanor, eliza, eivor, emma, erin, evelyn, gavya, jacob, jadyn, jamesL, joseph, laura, luis, mariaD, maryam, melissa, michael, olexei, orfeo, serafin, violeta];

	console.log("Iniciando iteración");
	for (let x of character){
		console.log(x.varName + " (" + x.nombre + " - " + x.piezanombre + ").");
		let perObtenido = document.getElementById(`${x.varName}`)
		if (perObtenido) {
		perObtenido.style.background = `radial-gradient(${x.col1}, ${x.col1}, ${x.col2}, ${x.col1}, ${x.col1}, ${x.col1})`;
		document.getElementById(`${x.varName}`).textContent = x.tipAlma;
		document.getElementById(`${x.varName}`).style.color = `${x.col3}`;
		console.log("Estilo aplicado: " + x.nombre + " (" + x.piezanombre + ").");
		} else {
		console.log("Ficha no existente en el tablero")
		continue;
		};
	};
};
