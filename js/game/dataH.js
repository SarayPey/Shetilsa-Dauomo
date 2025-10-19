import { habilidades, tipoHabilidades, nivPoder } from "./gamepieces.js";
import { pancakesFuryMov,  cookingWarMov, hobbyChefMov, detectiveInstinctMov, admadisDawnMov,
	antiLookMaskMov, dutySenseMov,
	leaderSabotageMov, eternityMov, emergencyHealMov, diceChangeMov, absoluteEndMov } from "./movs.js";

// Adam

const pancakesFury = new habilidades("Panqueques furiosos",
	tipoHabilidades[2], nivPoder[1],
	"Adam lanza unos panqueques que se colaron en su bolso. \
	misteriosamente, son radioactivos y tienen más enojo que Adam.",
	["¿Alguien quiere panqueques?",
		"Creo que me equivoqué de glaseado.",
		"¡No te quemes!",
		"Estoy cocinando, ven más tarde.",
		"¡No se rebelen, panqueques traviesos!"
	],
	pancakesFuryMov()
);

const cookingWar = new habilidades("Guerra cocinera",
	tipoHabilidades[0], nivPoder[0],
	"Al activar, Adam lanza un postre al azar a \
	un aliado cercano, lo que le otorga un efecto 'Pastelito gratis' \
	el cual le otorga un movimiento a cualquier enemigo o a una esquina \
	del tablero mientras exista un Adam Carter en el tablero. \
	Además, manda lanza un utensilio de cocina a un enemigo, el cual \
	lo paraliza, otorgándole el movimiento 'piedad o cocina a ciegas',\
	con la posibilidad de atacar al enemigo o retroceder dos casillas.",
	["Hay un pequeño desastre, espera un poco",
		"¡Requiero limpieza en la cocina!"
	],
	cookingWarMov()
);

const hobbyChef = new habilidades("Chef por pasatiempo",
	tipoHabilidades[0], nivPoder[2],
	"Al activar, puede revivir a cualquier aliado de la mesa con un pastel\
	Adicional, tanto él como el aliado revivido reciben 'Dulce vigorizante',\
	el cual sube el poder de las habilidades en uno hasta que Adam active la\
	habilidad 'alba del admadis' o reciba el efecto 'intolerancia al café'.",
	["*Sonríe* Un pequeño pasatiempo no mata a nadie.",
		"¡Ya viene la comida!"
	],
	hobbyChefMov()
);

const detectiveInstinct = new habilidades("Instinto detectivesco",
	tipoHabilidades[1], nivPoder[3],
	"(Se activa de forma automática) \
	Si un enemigo está cercana a un personaje aliado, Adam activa esta \
	habilidad, la que hace retroceder al enemigo cinco celdas y le otorga \
	al aliado el efecto 'Detective de corazón'",
	["¡Cuidado!",
		"Algo no anda bien…",
		"¡Cúbrete!"],
	detectiveInstinctMov()
)
const admadisDawn = new habilidades("Alba del admadis",
	tipoHabilidades[6], nivPoder[0],
	"*Condición: Al menos un estado o efecto activo en el juego, además, deben quedar 0-3 fichas aliadas \
	para jugar esta habilidad.* \
	Al activar, Adam elimina todos los efectos del tablero y genera el estado 'La casa de las admadices',\
	el cual le otorga inmunidad a 'Intolerancia al café', aumenta en dos el nivel de poder de sus aliados \
	y disminuye en uno el de sus enemigos.",
	["En la película, hubo un Adam que no pudo proteger lo que amaba, pero yo lo haré.",
		"Les recuerdo que 'Adam' significa 'aquel admadis que enseña a volar'",
		"¡Juntos por nuestros amigos caídos!"],
		admadisDawnMov()
)

// Adam emo

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
		"¿Necesitas escudo?"],
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
		"Hasta siempre…"],
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

// Akiko

const eternity = new habilidades("Eternidad",
	tipoHabilidades[3], nivPoder[0],
	"Si queda una ficha aliada y Akiko fue eliminada, esta habilidad se activa, haciendo\
	que esta ficha y cualquier ficha aliada Akiko regrese al tablero",
	["¡He regresado!", "Disculpen la demora, he vuelto", "¡Hola!"],
	eternityMov()
)

const emergencyHeal = new habilidades("Curación de emergencia",
	tipoHabilidades[3], nivPoder[0],
	"Si la ficha restante es eliminada y Akiko está fuera del tablero, esta activa su\
	curación especial, la cual revive a ese aliado y algún aliado con habilidades de sinergia\
	o curativas a elección.",
	["¡Es hora de despertar!",
		"¿Alguien dijo curación?",
		"Curación de emergencia"],
	emergencyHealMov()
)

// Eivor

const diceChange = new habilidades("Cambio de dado",
	tipoHabilidades[4], nivPoder[0],
	"Con esta habilidad, Eivor cambia el dado utilizado en el juego para\
	favor de su equipo, este efecto dura mientras esta pieza esté en juego.",
	["Propongo otro juego.",
		"No me gusta ese dado, este es mejor",
		"¿Qué opines de esto?"],
	diceChangeMov()
)

const absoluteEnd = new habilidades("Final absoluto",
	tipoHabilidades[6], nivPoder[0],
	"Condición: Solo queda Informante de la suerte como ficha aliada.\
	Al activar, Eivor crea un campo de dados por su camino, si algún enemigo\
	intenta acercarse al campo, tiene un 50% de probabilidad de ser eliminado o\
	ser empujado a una esquina del tablero.",
	["Atrévete ahora.",
		"Bueno, bueno, ¿soy solo yo?",
		"¡Final absoluto!"],
	absoluteEndMov()
)


// Exportar
export{ pancakesFury, cookingWar, hobbyChef, detectiveInstinct, admadisDawn,
	antiLookMask, dutySense,
	leaderSabotage,
	eternity, emergencyHeal,
	diceChange, absoluteEnd }