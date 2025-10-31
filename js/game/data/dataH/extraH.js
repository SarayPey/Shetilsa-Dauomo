import { habilidades, tipoHabilidades, nivPoder } from "../../gamepieces.js";
import {antiLookMaskMov, dutySenseMov,
	leaderSabotageMov} from "../movs.js"

const antiLookMask = new habilidades("Máscara anti-miradas",
	tipoHabilidades[1], nivPoder[3],
	"<i>«¿Por qué soy tan débil…?»</i> \
	Adam crea un escudo sobre sí mismo y los compañeros que \
	estén a una celda de distancia de él. \
	\
	Si él o los aliados protegidos con \
	'Máscara anti-miradas' son atacados, el escudo absorbe \
	el daño y se destruye, sin eliminar al personaje. \
	\
	Adicionalmente, si un aliado que no sea 'Optimista impostor' \
	es atacado y tiene 'Máscara anti-miradas', Adam recibe una carga \
	emocional para 'sentido del deber'",
	["¡Yo me encargo!",
		"¿Necesitas escudo?"
	],
	antiLookMaskMov()
);

const dutySense = new habilidades("Sentido del deber",
	tipoHabilidades[3], nivPoder[0],
	"Al usar esta habilidad, Adam puede revivir a \
	una de las siguientes piezas aliadas: \
	<ul> \
	<li>Melissa, título ('Detective talentosa')</li> \
	<li>Alexa, Título ('Deportista valerosa')</li> \
	<li>Erin, Título ('Teniente investigador')</li> \
	<li>Erin, Título ('Agente de corazón')</li> \
	<li>Evelyn, Título ('Hacker de élite policial')</li> \
	<li>Luis, Título ('Defensor de niños')</li> \
	<li>Maryam, Título ('Detective de la rosa')</li> \
	<li>Maryam, Título ('Liberadora de la verdad')</li> \
	<li>Eneko, Título ('Anhelos de humanidad')</li> \
	<li>Thomas, Título ('Cazador de venganza')</li> \
	<li>Odess, Título ('Doctora de corazones')</li> \
	<li>Brayan, Título ('Especialista en sabotaje')</li> \
	<li>Brayan, Título ('Redención del saboteador')</li> \
	<li>Brayan, Título ('Bromista experto en espionaje')</li> \
	</ul> \
	Al usar esta habilidad, si tiene cargas emocionales, puede usar cada carga para \
	elegir entre revivir a otro aliado o dar a un aliado \
	cualquiera un 'Máscara anti-miradas' gratis por cada carga. \
	\
	Una vez terminado el turno, esta pieza se destruye.",
	["Estaba bien…",
		"¿No te dije que volverías…?",
		"Ellos te necesitan más que a mí…",
		"Por el bien mayor…",
		"Hasta siempre…"
	],
	dutySenseMov()
)

// Brayan saboteador

const leaderSabotage = new habilidades("Sabotaje al líder",
	tipoHabilidades[0], nivPoder[3],
	"Al activar esta habilidad, Brayan lanza una taza de café a un \
	enemigo a elección, otorgando el efecto 'Desastre empapado'. \
	Si el ataque llega una de las siguientes piezas: \
	<ul> \
	<li>Adam, Aquel que desafió su destino ('Curiosidad desbordante')</li>\
	<li>Adam, Aquel que desafió su destino ('Psicólogo con alma de detective')</li>\
	<li>Adam, Aquel que desafió su destino ('Optimista impostor')</li>\
	<li>Adam, Aquel que desafió su destino ('Caida de la máscara')</li>\
	<li>Adam, Aquel que desafió su destino ('Renacer del optimista')</li>\
	<li>Adam, Aquel que desafió su destino ('Renacido de las cenízas')</li>\
	</ul> \
	le otorga el efecto 'Intolerancia al café', lo que cancela sus efectos y\
	lo deja paralizado, si no se le quita el efecto en los siguientes 5 turnos,\
	la pieza ese destruye.",
	["¡Café a la carga!",
		"Más vale que esto llegue a Adam",
		"Conozco a alguien que caería al hospital por esto"],
	leaderSabotageMov()
)

export {antiLookMask, dutySense, leaderSabotage}