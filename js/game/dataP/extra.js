import{	antiLookMask, dutySense, leaderSabotage } from "../dataH.js";
import { basicOne, basicTwo, basicThree} from "../movs.js";
const adamEmo = new pieces("", '#bf6300', '#803500', '#1f1210', tipoAlma[4],
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

const brayanSab = new pieces("", '#256637', '#0d401b', '#011408', tipoAlma[0],
	"brayanSab", "Brayan", "Título", "Especialista en sabotaje",
	"Descripción",
	"Descripción Larga",
	["¡Prepárate para comer polvo!",
	 "Un café y una taza siempre a la mano. *Risas*",
	 "El detective va a caer.",
	 "Idle4",
	 "Idle5"
	],
	["¡Para la próxima no te metas conmigo!",
	 "Solo era una bromita.",
	 "¡Y es solo el inicio!",
	 "Uno menos antes del jefe",
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

export {brayanSab, brayanRedim, adamEmo}