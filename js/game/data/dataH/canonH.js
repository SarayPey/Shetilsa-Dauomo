import { habilidades, tipoHabilidades, nivPoder } from "../../gamepieces.js";
import { pancakesFuryMov,  cookingWarMov, hobbyChefMov, detectiveInstinctMov, admadisDawnMov, eternityMov, emergencyHealMov, diceChangeMov, absoluteEndMov } from "../movs.js";

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
		"¡Cúbrete!"
	],
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
		"¡Juntos por nuestros amigos caídos!"
	],
		admadisDawnMov()
)

// Akiko

const eternity = new habilidades("Eternidad",
	tipoHabilidades[3], nivPoder[0],
	"Si queda una ficha aliada y Akiko fue eliminada, esta habilidad se activa, haciendo\
	que esta ficha y cualquier ficha aliada Akiko regrese al tablero",
	["¡He regresado!",
		"Disculpen la demora, he vuelto",
		"¡Hola!"
	],
	eternityMov()
)

const emergencyHeal = new habilidades("Curación de emergencia",
	tipoHabilidades[3], nivPoder[0],
	"Si la ficha restante es eliminada y Akiko está fuera del tablero, esta activa su\
	curación especial, la cual revive a ese aliado y un aliado al azar con habilidades de sinergia\
	o curativas a elección.",
	["¡Es hora de despertar!",
		"¿Alguien dijo curación?",
		"Curación de emergencia"
	],
	emergencyHealMov()
)

// Eivor

const diceChange = new habilidades("Cambio de dado",
	tipoHabilidades[4], nivPoder[0],
	"Con esta habilidad, Eivor cambia el dado utilizado en el juego para\
	favor de su equipo, este efecto dura mientras esta pieza esté en juego.",
	["Propongo otro juego.",
		"No me gusta ese dado, este es mejor",
		"¿Qué opines de esto?"
	],
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
		"¡Final absoluto!"
	],
	absoluteEndMov()
)


// Exportar
export{ pancakesFury, cookingWar, hobbyChef, detectiveInstinct, admadisDawn,
	eternity, emergencyHeal,
	diceChange, absoluteEnd }