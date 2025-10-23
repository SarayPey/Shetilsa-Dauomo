import { pieces, tipoAlma } from "./gamepieces.js";
import { pancakesFury, cookingWar, hobbyChef, detectiveInstinct, admadisDawn,
	antiLookMask, dutySense, leaderSabotage } from "./dataH.js";
import { basicOne, basicTwo, basicThree } from "./movs.js";

// Adam
const adam = new pieces("", '#fc9803', '#a15708', '#fcba35', tipoAlma[4],
	"adam", "Adam", "Aquel que desafió su destino", "Renacido de las cenízas",
	"Descripción corta",
	"Descripción",
	["Adam Carter listo para el deber.",
	 "Juntos somos más fuerte.",
	 "Traje algo de comida, espero que les guste.",
	 "Algo me dice que será un día muy pesado.",
	 "Si necesitas ayuda, puedes confíar en mí."
	],
	["Lo siento…",
	"No quería hacerlo, pero te metiste con quienes amo.",
	 "Acabar3",
	 "Acabar4",
	 "Acabar5"
	],
	["No…",
	 "AmigoTieso2",
	 "AmigoTieso3",
	 "AmigoTieso4",
	 "AmigoTieso5"
	],
	["¡Sigan sin… mí…!",
	 "Esto es vergonzoso, ¿sabes…?",
	 "Alexa…",
	 "No esta tan bien como pensaba…",
	 "Mamá… papá…"
	],
	["¿Qué…?",
	 "¿Osuke…? ¿Fuiste tú?",
	 "¡Gracias!",
	 "Tengo otra oportinidad para arreglar esto",
	 "Revive5"
	],
	[pancakesFury, cookingWar, hobbyChef, detectiveInstinct, admadisDawn],
	basicThree()
);

const adamEmo = new pieces("", '#bf6300', '#803500', '#e68a00', tipoAlma[4],
	"adamEmo", "Adam", "Aquel que desafió su destino", "Optimista impostor",
	"Descripción corta",
	"Descripción",
	["Adam Carter listo para el deber.",
	 "¿Crees que pueda?",
	 "Confío en que puedes manejarlo.",
	 "Estoy bien.",
	 "No te preocupes, estoy bien."
	],
	["Lo siento…",
	 "No debí… no debí…",
	 "Acabar3",
	 "Acabar4",
	 "Acabar5"
	],
	["No…",
	"¡Te puedo ayudar! ¡Puedo salvarte! No te vayas…",
	 "Perdóname…",
	 "¿Por qué no fui yo…?",
	 "Desierta… despierta… vamos… te necesitamos…"
	],
	["Sigan sin mí…",
	"Fallé… ¿cierto?",
	"Te dije que… era… débil…",
	"Perdón…",
	 "Por el bien… mayor…",
	 "No era necesario… después de… todo…"
	],
	["¿Qué…?",
	"¿Cómo… volví?",
	 "No lo merecía…",
	 "Revive4",
	 "Revive5"
	],
	[antiLookMask, dutySense],
	basicOne()
);

// Melissa

const melissa = new pieces("", '#660aceff', '#4a0796ff', '#9b42e4ff', tipoAlma[3],
	"melissa", "Melissa", "Título", "Detective talentosa",
	"Descripción corta",
	"Descripción",
	["Melissa Torres al deber.",
	"Deja de perder el tiempo.",
	"Es hora de trabajar",
	"Atentos a su entorno.",
	"idle5"
	],
	["El fin justifica los medio.",
	 "…",
	 "Acabar3",
	 "Acabar4",
	 "Acabar5"
	],
	["…",
	 "Descansa, compañero…",
	 "AmigoTieso3",
	 "AmigoTieso4",
	 "AmigoTieso5"
	],
	["Ya que…",
	 "Tieso2",
	 "Tieso3",
	 "Tieso4",
	 "Tieso5"
	],
	["¿Estoy de vuelta? Bueno, ya qué.",
	 "Revive2",
	 "Revive3",
	 "Revive4",
	 "Revive5"
	],
	[],
	basicOne()
);

// Brayan

const brayanSab = new pieces("", '#256637', '#0d401b', '#2f9151', tipoAlma[0],
	"brayanSab", "Brayan", "Título", "Especialista en sabotaje",
	"Descripción",
	"Descripción Larga",
	["¡Prepárate para comer polvo!",
	 "Un café y una taza siempre a la mano. *Risas*",
	 "Idle3",
	 "Idle4",
	 "Idle5"
	],
	["¡Para la próxima no te metas conmigo!",
	 "Solo era una bromita.",
	 "Acabar3",
	 "Acabar4",
	 "Acabar5"
	],
	["Ah, ok.",
	 "¿Terminaste tu drama?",
	 "Va a despertar en un rato.",
	 "AmigoTieso4",
	 "AmigoTieso5"
	],
	["Ok…",
	 "Tieso2",
	 "Tieso3",
	 "Tieso4",
	 "Tieso5"
	],
	["No dejan descansar…",
	 "Revive2",
	 "Revive3",
	 "Revive4",
	 "Revive5"
	],
	[leaderSabotage],
	basicTwo()
);

const brayanRedim = new pieces("", '#42a667', '#14783b', '#44c976', tipoAlma[0],
	"brayanRedim", "Brayan", "Título", "Redención del saboteador",
	"Descripción",
	"Descripción",
	["Es hora de arreglar mis errores",
	 "Idle2",
	 "Idle3",
	 "Idle4",
	 "Idle5"
	],
	["Por el bien común",
	 "Acabar2",
	 "Acabar3",
	 "Acabar4",
	 "Acabar5"
	],
	["AmigoTieso1",
	 "AmigoTieso2",
	 "AmigoTieso3",
	 "AmigoTieso4",
	 "AmigoTieso5"
	],
	["Tieso1",
	 "Tieso2",
	 "Tieso3",
	 "Tieso4",
	 "Tieso5"
	],
	["Revive1",
	 "Revive2",
	 "Revive3",
	 "Revive4",
	 "Revive5"
	],
	[],
	basicTwo()
);

const brayan = new pieces("", '#2eab47', '#226f2f', '#61ed82 ', tipoAlma[3],
	"brayan", "Brayan", "Título", "Bromista experto en espionaje",
	"Descripción",
	"Descripción",
	["Que buen momento para ser un espía.",
	 "Idle2",
	 "Idle3",
	 "Idle4",
	 "Idle5"
	],
	["Por el bien común.",
	 "¿Estás vivo?",
	 "Acabar3",
	 "Acabar4",
	 "Acabar5"
	],
	["AmigoTieso1",
	 "AmigoTieso2",
	 "AmigoTieso3",
	 "AmigoTieso4",
	 "AmigoTieso5"
	],
	["Tieso1",
	 "Tieso2",
	 "Tieso3",
	 "Tieso4",
	 "Tieso5"
	],
	["Revive1",
	 "Revive2",
	 "Revive3",
	 "Revive4",
	 "Revive5"
	],
	[],
	basicTwo()
);

new pieces("", "#", "#", "#", tipoAlma[0],
	"var", "base", "titulo", "nameP",
	"Descripción corta",
	"Descripción larga",
	["Idle1",
	 "Idle2",
	 "Idle3",
	 "Idle4",
	 "Idle5"
	],
	["Acabar1",
	 "Acabar2",
	 "Acabar3",
	 "Acabar4",
	 "Acabar5"
	],
	["AmigoTieso1",
	 "AmigoTieso2",
	 "AmigoTieso3",
	 "AmigoTieso4",
	 "AmigoTieso5"
	],
	["Tieso1",
	 "Tieso2",
	 "Tieso3",
	 "Tieso4",
	 "Tieso5"
	],
	["Revive1",
	 "Revive2",
	 "Revive3",
	 "Revive4",
	 "Revive5"
	],
	[],
	basicOne()
);

const akiko = new pieces("", "#efe000", "#c49f00", "#fff777", tipoAlma[6],
	"akiko", "Akiko", "El sol brillante", "Sanadora de la hoja dorada",
	"Descripción corta",
	"Descripción larga",
	["Idle1",
	 "Idle2",
	 "Idle3",
	 "Idle4",
	 "Idle5"
	],
	["Acabar1",
	 "Acabar2",
	 "Acabar3",
	 "Acabar4",
	 "Acabar5"
	],
	["AmigoTieso1",
	 "AmigoTieso2",
	 "AmigoTieso3",
	 "AmigoTieso4",
	 "AmigoTieso5"
	],
	["Tieso1",
	 "Tieso2",
	 "Tieso3",
	 "Tieso4",
	 "Tieso5"
	],
	["Revive1",
	 "Revive2",
	 "Revive3",
	 "Revive4",
	 "Revive5"
	],
	[],
	basicOne()
);


// Exportar
export {adam, akiko, melissa, brayan, brayanSab, brayanRedim, adamEmo}
// '#481880', '#24085c', '#772bb5'
