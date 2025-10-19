import { adam, adamEmo, melissa, brayanSab } from "./game/dataP.js";
function idle(pieceObj){
    console.log("Llamando a " + pieceObj.nombre + " (" + pieceObj.piezanombre + ").")
    if (!pieceObj || !pieceObj.idleDialogo) return;
    const dialogos = pieceObj.idleDialogo;
    const idleD = dialogos[Math.floor(Math.random() * dialogos.length)];
    console.log(idleD)
    document.getElementById("dialogo").textContent = pieceObj.nombre + ": " + idleD;
    console.log(pieceObj.nombre + " (" + pieceObj.piezanombre + ") ha respondido")
};

window.onload = () => {
  window.adam = adam;
  window.adamEmo = adamEmo;
  window.melissa = melissa;
  window.brayanSab = brayanSab;
  const character = [adam, adamEmo, melissa, brayanSab];

  window.idle = idle;

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

 for (let x of character){
    console.log("Iniciando iteración");
    console.log(x.varName + " (" + x.nombre + " - " + x.piezanombre + ").");
    document.getElementById(`${x.varName}`).style.background = `radial-gradient(${x.col1}, ${x.col1}, ${x.col2}, ${x.col1}, ${x.col1}, ${x.col3})`;
    document.getElementById(`${x.varName}`).textContent = x.tipAlma;
    console.log("Estilo aplicado: " + x.nombre + " (" + x.piezanombre + ").");
 };

  if (p1PiezaUno) {
    p1PiezaUno.onclick = () => idle(adam);
  };
  if (p1PiezaDos) {
    p1PiezaDos.onclick = () => idle(adamEmo);
  };
  if (p2PiezaTres) {
    p2PiezaTres.onclick = () => idle(melissa);
  };
  if (p2PiezaCuatro) {
    p2PiezaCuatro.onclick = () => idle(brayanSab);
  };
};