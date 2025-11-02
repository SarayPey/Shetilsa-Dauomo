import { adam, aiyana, akiko, alec, alejandro, alexa, andres, brayan, brisa, cara, christian, connor, daniel, darya, diana, eleanor, eliza, eivor, emma, erin, evelyn, gavya, jacob, jadyn, jamesL, joseph, laura, luis, mariaD, maryam, melissa, michael, olexei, orfeo, serafin, violeta } from "./game/data/dataP/canon.js";
import { brayanSab, brayanRedim, adamEmo } from "./game/data/dataP/extra.js"
function idle(pieceObj){
    console.log("Llamando a " + pieceObj.nombre + " (" + pieceObj.piezanombre + ").")
    if (!pieceObj || !pieceObj.idleDialogo) return;
    const dialogos = pieceObj.idleDialogo;
    const idleD = dialogos[Math.floor(Math.random() * dialogos.length)];
    console.log(idleD)
    document.getElementById("dialogo").textContent = pieceObj.nombre + ": " + idleD;
    console.log(pieceObj.nombre + " (" + pieceObj.piezanombre + ") ha respondido")
};

function dead(pieceObj){
    pieceObj.style.animation = "none";
    console.log("¡Han matado a " + pieceObj.nombre + " (" + pieceObj.piezanombre + ")!")
    const dialogos = pieceObj.sEndDialog;
    const idleD = dialogos[Math.floor(Math.random() * dialogos.length)];
    console.log(idleD)
    pieceObj.style.animation = "die 0,25s linear"
    document.getElementById("dialogo").textContent = pieceObj.nombre + ": " + idleD;
    console.log(pieceObj.nombre + " (" + pieceObj.piezanombre + ") ha respondido")
}

window.onload = () => {
  window.idle = idle;

  window.melissa   = melissa;
  window.brayanSab = brayanSab;
  window.akiko     = akiko;
  window.darya     = darya;
  window.diana     = melissa;
  window.daniel    = daniel;
  window.eivor     = eivor;
  window.adam      = adam;
  window.adamEmo   = adamEmo;
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

  const character = [adam, aiyana, akiko, alec, alejandro, alexa, andres, brayan, brisa, cara, christian, connor, daniel, darya, diana, eleanor, eliza, eivor, emma, erin, evelyn, gavya, jacob, jadyn, jamesL, joseph, laura, luis, mariaD, maryam, melissa, michael, olexei, orfeo, serafin, violeta, brayanSab, brayanRedim, adamEmo];


  // Jugador 1
  const p1PiezaUno = document.querySelector('.pieza.p1.uno');
  const p1PiezaDos = document.querySelector('.pieza.p1.dos');
  const p1PiezaTres = document.querySelector('.pieza.p1.tres');
  const p1PiezaCuatro = document.querySelector('.pieza.p1.cuatro');
  const p1PiezaCinco = document.querySelector('.pieza.p1.cinco');
  const p1PiezaSeis = document.querySelector('.pieza.p1.seis');
  const p1PiezaSiete = document.querySelector('.pieza.p1.siete');
  const p1PiezaOcho = document.querySelector('.pieza.p1.ocho');
  const p1PiezaNueve = document.querySelector('.pieza.p1.nueve');
  const p1PiezaDiez = document.querySelector('.pieza.p1.diez');
  const p1PiezaOnce = document.querySelector('.pieza.p1.once');
  const p1PiezaDoce = document.querySelector('.pieza.p1.doce');
  const p1PiezaTrece = document.querySelector('.pieza.p1.trece');
  const p1PiezaCatorce = document.querySelector('.pieza.p1.catorce');
  const p1PiezaQuince = document.querySelector('.pieza.p1.quince');
  const p1PiezaDieciseis = document.querySelector('.pieza.p1.dieciseis');

  const p1Array = [p1PiezaUno, p1PiezaDos, p1PiezaTres, p1PiezaTres, p1PiezaCuatro, p1PiezaCinco, p1PiezaSeis, p1PiezaSiete, p1PiezaOcho,
             p1PiezaNueve, p1PiezaDiez, p1PiezaOnce, p1PiezaDoce, p1PiezaTrece, p1PiezaCatorce, p1PiezaQuince, p1PiezaDieciseis];
 // Jugador 2

  const p2PiezaUno = document.querySelector('.pieza.p2.uno');
  const p2PiezaDos = document.querySelector('.pieza.p2.dos');
  const p2PiezaTres = document.querySelector('.pieza.p2.tres');
  const p2PiezaCuatro = document.querySelector('.pieza.p2.cuatro');
  const p2PiezaCinco = document.querySelector('.pieza.p2.cinco');
  const p2PiezaSeis = document.querySelector('.pieza.p2.seis');
  const p2PiezaSiete = document.querySelector('.pieza.p2.siete');
  const p2PiezaOcho = document.querySelector('.pieza.p2.ocho');
  const p2PiezaNueve = document.querySelector('.pieza.p2.nueve');
  const p2PiezaDiez = document.querySelector('.pieza.p2.diez');
  const p2PiezaOnce = document.querySelector('.pieza.p2.once');
  const p2PiezaDoce = document.querySelector('.pieza.p2.doce');
  const p2PiezaTrece = document.querySelector('.pieza.p2.trece');
  const p2PiezaCatorce = document.querySelector('.pieza.p2.catorce');
  const p2PiezaQuince = document.querySelector('.pieza.p2.quince');
  const p2PiezaDieciseis = document.querySelector('.pieza.p2.dieciseis');

  const p2Array = [p2PiezaUno, p2PiezaDos, p2PiezaTres, p2PiezaTres, p2PiezaCuatro, p2PiezaCinco, p2PiezaSeis, p2PiezaSiete, p2PiezaOcho,
    p2PiezaNueve, p2PiezaDiez, p2PiezaOnce, p2PiezaDoce, p2PiezaTrece, p2PiezaCatorce, p2PiezaQuince, p2PiezaDieciseis];

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
  if (p1PiezaUno) {
      p1PiezaUno.onclick = () => idle(adam);
  };
  if (p1PiezaDos) {
      p1PiezaDos.onclick = () => idle(adamEmo);
  };
  if (p1PiezaTres) {
      p1PiezaTres.onclick = () => idle(maryam);
  };
  if (p1PiezaCuatro) {
      p1PiezaCuatro.onclick = () => idle(brayan);
  };
  if (p1PiezaCinco) {
      p1PiezaCinco.onclick = () => idle(evelyn);
  };
  if (p1PiezaSeis) {
      p1PiezaSeis.onclick = () => idle(luis);
  };
  if (p1PiezaSiete) {
      p1PiezaSiete.onclick = () => idle(erin);
  };
  if (p1PiezaOcho) {
      p1PiezaOcho.onclick = () => idle(alexa);
  };
  if (p1PiezaNueve) {
      p1PiezaNueve.onclick = () => idle(eivor);
  };
  if (p1PiezaDiez) {
      p1PiezaDiez.onclick = () => idle(jadyn);
  };
  if (p1PiezaOnce) {
      p1PiezaOnce.onclick = () => idle(orfeo);
  };
  if (p1PiezaDoce) {
      p1PiezaDoce.onclick = () => idle(eleanor);
  };
  if (p1PiezaTrece) {
      p1PiezaTrece.onclick = () => idle(serafin);
  };
  if (p1PiezaCatorce) {
      p1PiezaCatorce.onclick = () => idle(olexei);
  };
  if (p1PiezaQuince) {
      p1PiezaQuince.onclick = () => idle(aiyana);
  };
  if (p1PiezaDieciseis) {
      p1PiezaDieciseis.onclick = () => idle(brisa);
  };

  if (p2PiezaUno) {
      p2PiezaUno.onclick = () => idle(jacob);
  };
  if (p2PiezaDos) {
      p2PiezaDos.onclick = () => idle(joseph);
  };
  if (p2PiezaTres) {
      p2PiezaTres.onclick = () => idle(melissa);
  };
  if (p2PiezaCuatro) {
      p2PiezaCuatro.onclick = () => idle(brayanSab);
  };
  if (p2PiezaCinco) {
      p2PiezaCinco.onclick = () => idle(laura);
  };
  if (p2PiezaSeis) {
      p2PiezaSeis.onclick = () => idle(cara);
  };
  if (p2PiezaSiete) {
      p2PiezaSiete.onclick = () => idle(eliza);
  };
  if (p2PiezaOcho) {
      p2PiezaOcho.onclick = () => idle(jamesL);
  };
  if (p2PiezaNueve) {
      p2PiezaNueve.onclick = () => idle(akiko);
  };
  if (p2PiezaDiez) {
      p2PiezaDiez.onclick = () => idle(darya);
  };
  if (p2PiezaOnce) {
      p2PiezaOnce.onclick = () => idle(andres);
  };
  if (p2PiezaDoce) {
      p2PiezaDoce.onclick = () => idle(alejandro);
  };
  if (p2PiezaTrece) {
      p2PiezaTrece.onclick = () => idle(michael);
  };
  if (p2PiezaCatorce) {
      p2PiezaCatorce.onclick = () => idle(connor);
  };
  if (p2PiezaQuince) {
      p2PiezaQuince.onclick = () => idle(diana);
  };
  if (p2PiezaDieciseis) {
      p2PiezaDieciseis.onclick = () => idle(daniel);
  };
};
