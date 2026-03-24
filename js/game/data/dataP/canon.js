import { pieces, tipoAlma } from "../../gamepieces.js"
import { pancakesFury, cookingWar, hobbyChef, detectiveInstinct, admadisDawn,
	diceChange, absoluteEnd,
	eternity, emergencyHeal } from "../dataH/canonH.js";
import { basicOne, basicTwo, basicThree} from "../movs.js";

const adam = new pieces("", '#fc9803', '#ce6600', '#fdfa95', tipoAlma[8],
	"adam", "Adam", "Aquel que desafió su destino", "Renacido de las cenizas",
	"Descripción corta",
	"Descripción",
	["Adam Carter listo para el deber.",
	 "Juntos somos más fuerte.",
	 "Traje algo de comida, espero que les guste.",
	 "Algo me dice que será un día muy pesado.",
	 "Si necesitas ayuda, puedes confiar en mí."
	],
	["Lo siento…",
	 "No quería hacerlo, pero te metiste con quienes amo.",
	 "Me acabo de acordar que casi me pasa algo así una vez.",
	 "Acabar4",
	 "Acabar5"
	],
	["No…",
	 "No lo merecía… ¡No lo merecía!",
	 "AmigoTieso3",
	 "AmigoTieso4",
	 "AmigoTieso5"
	],
	["¡Sigan sin… mí…!",
	 "Esto es… vergonzoso, ¿sabes…?",
	 "Alexa…",
	 "¿Cuando fue la última vez que terminé… así…?",
	 "Mamá… papá…"
	],
	["¿Qué…?",
	 "¿Osuke…? ¿Fuiste tú?",
	 "¡Gracias!",
	 "Tengo otra oportunidad para arreglar esto",
	 "He vuelto porque hice una promesa: cuidar a quienes amo."
	],
	[pancakesFury, cookingWar, hobbyChef, detectiveInstinct, admadisDawn],
	basicThree()
);

const melissa = new pieces("", '#5009ae', '#2a0766', '#0e0118', tipoAlma[3],
	"melissa", "Melissa", "Título", "Detective talentosa",
	"Descripción corta",
	"Descripción",
	["Melissa Torres al deber.",
	"Deja de perder el tiempo.",
	"Es hora de trabajar",
	"Atentos a su entorno.",
	"…"
	],
	["El fin justifica los medios.",
	 "…",
	 "Eres peor que una araña",
	 "Acabar4",
	 "Acabar5"
	],
	["…",
	 "Descansa, compañero…",
	 "No había calculaod esto.",
	 "AmigoTieso4",
	 "AmigoTieso5"
	],
	["Ya que…",
	 "Laura…",
	 "Adam…",
	 "Esto no estaba en los planes…",
	 "Supongo que…",
	 "Michael…	"
	],
	["¿Estoy de vuelta?",
	 "Gracias a los primordiales",
	 "Revive3",
	 "Revive4",
	 "Revive5"
	],
	[],
	basicOne()
);

const brayan = new pieces("", '#2eab47', '#226f2f', '#80ff9d ', tipoAlma[3],
	"brayan", "Brayan", "Título", "Bromista experto en espionaje",
	"Descripción",
	"Descripción",
	["Que buen momento para ser un espía.",
	 "¿Quieres ver un disfraz de dinosaurio que me robé para una misión? No le digas al teniente, ¿sí?",
	 "Algún día seré una ✨princesa✨",
	 "La parte de hacerse pasar por gente cualquiera en misiones es distinto",
	 "Podría ser un marinero, un ladrón, un muerto, un árbol… debería ser un tren."
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

const akiko = new pieces("", "#efd000", "#c48f00", "#feffcb", tipoAlma[6],
	"akiko", "Akiko", "El sol brillante", "Sanadora de la hoja dorada",
	"Descripción corta",
	"Descripción larga",
	["¿Hay EnergyCandy?",
	 "¡Hola!",
	 "*Comiendo dulces*",
	 "*Cuidando una planta*",
	 "¿Has visto a Lía?"
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
	[eternity, emergencyHeal],
	basicOne()
);

const darya = new pieces("", "#f48410", "#c05200", "#632001", tipoAlma[0],
	"darya", "Darya", "titulo", "nameP",
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

const eivor = new pieces("", "#0c1e75", "#09053b", "#fff000", tipoAlma[3],
	"eivor", "Eivor", "informante del azar", "Informante de la suerte",
	"Descripción corta",
	"Descripción larga",
	["Que la suerte los acompañe… porque la tomé toda para mí.",
	 "Tengo un plan maestro para ganar",
	 "*Risas*",
	 "No se preocupen, el juego está a nuestro favor",
	 "Sigan mis pasos y ganaremos"
	],
	["La suerte no estuvo a tu favor",
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
	[diceChange, absoluteEnd],
	basicOne()
);

const maryam = new pieces("", "#1c9218", "#056612", "#76f366", tipoAlma[0],
	"maryam", "Maryam", "titulo", "Liberadora de la rosa",
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

const jacob = new pieces("", "#5f0606", "#240303", "#ff2222", tipoAlma[3],
	"jacob", "Jacob", "titulo", "El mago de dos mundos",
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

const joseph = new pieces("", "#ca2323", "#860f0f", "#380404", tipoAlma[0],
	"joseph", "Joseph", "titulo", "nameP",
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

const laura = new pieces("", "#25bd20", "#048f22", "#74fc70ff", tipoAlma[6],
	"laura", "Laura", "titulo", "nameP",
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

const cara = new pieces("", "#8b0b8b", "#550950", "#e363e7", tipoAlma[11],
	"cara", "Cara", "titulo", "nameP",
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

const eliza = new pieces("", "#008fff", "#005f9f", "#aadfff", tipoAlma[2],
	"eliza", "Eliza", "titulo", "nameP",
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

const jamesL = new pieces("", "#509000", "#196000", "#101200", tipoAlma[2],
	"jamesL", "James", "titulo", "nameP",
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

const andres = new pieces("", "#0050ff", "#00307f", "#50d0f0", tipoAlma[0],
	"andres", "Andrés", "titulo", "nameP",
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

const alejandro = new pieces("", "#ffef77", "#e0b525", "#9e5a00ff", tipoAlma[7],
	"alejandro", "Alejandro", "titulo", "nameP",
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

const michael = new pieces("", "#00afff", "#006aaa", "#aaffff", tipoAlma[9],
	"michael", "Michael", "titulo", "nameP",
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

const connor = new pieces("", "#67b424", "#297c0f", "#092502ff", tipoAlma[5],
	"connor", "Connor", "titulo", "nameP",
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

const jadyn = new pieces("", "#a19bff", "#5653db", "#0c0a1f", tipoAlma[4],
	"jadyn", "Jadyn", "titulo", "nameP",
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

const orfeo = new pieces("", "#47341d", "#271a15", "#b3744f", tipoAlma[0],
	"orfeo", "Orfeo", "titulo", "nameP",
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

const eleanor = new pieces("", "#f56715", "#c5480e", "#ffba7a", tipoAlma[0],
	"eleanor", "Eleanor", "titulo", "nameP",
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

const serafin = new pieces("", "#9b765b", "#70533b", "#e2c8a0", tipoAlma[3],
	"serafin", "Serafín", "titulo", "nameP",
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

const olexei = new pieces("", "#78c545", "#4a8b0e", "#1f6411", tipoAlma[5],
	"olexei", "Olexei", "titulo", "nameP",
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

const aiyana = new pieces("", "#2a52d6", "#172d91", "#479ff1", tipoAlma[5],
	"aiyana", "Aiyana", "titulo", "nameP",
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

const brisa = new pieces("", "#a32b2b", "#790b0b", "#ff775f", tipoAlma[3],
	"brisa", "Brisa", "titulo", "nameP",
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

const evelyn = new pieces("", "#e42fa7", "#b1116e", "#ff8ed0", tipoAlma[9],
	"evelyn", "Evelyn", "titulo", "nameP",
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

const luis = new pieces("", "#c41616", "#6e0909", "#ff8777", tipoAlma[7],
	"luis", "Luis", "titulo", "nameP",
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

const alexa = new pieces("", "#df4545", "#a32424", "#491212", tipoAlma[0],
	"alexa", "Alexa", "titulo", "nameP",
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

const erin = new pieces("", "#6d4416", "#221403", "#c9973b", tipoAlma[0],
	"erin", "Erin", "titulo", "nameP",
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

const diana = new pieces("", "#00aacc", "#006699", "#aaffff", tipoAlma[12],
	"diana", "Diana", "titulo", "nameP",
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

const daniel = new pieces("", "#ff55aa", "#bb3366", "#ffccee", tipoAlma[10],
	"daniel", "Daniel", "titulo", "nameP",
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

const emma = new pieces("", "#a86ff3", "#782bd1", "#e3c0ff", tipoAlma[12],
	"emma", "Emma", "titulo", "nameP",
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

const violeta = new pieces("", "#7638bd", "#4f1388", "#cc96ff", tipoAlma[8],
	"violeta", "Alec", "titulo", "nameP",
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

const alec = new pieces("", "#d46a13", "#94440e", "#ffc75e", tipoAlma[7],
	"alec", "Alec", "titulo", "nameP",
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

const christian = new pieces("", "#1949af", "#0a2d6e", "#80b5f1", tipoAlma[4],
	"christian", "Christian", "titulo", "nameP",
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

const mariaD = new pieces("", "#5c8343", "#355814", "#badf83", tipoAlma[0],
	"mariaD", "Maria", "titulo", "nameP",
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

const gavya = new pieces("", "#29af7c", "#137a53", "#abffe3", tipoAlma[12],
	"gavya", "Gavya", "titulo", "nameP",
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


// Exportar
export {adam, aiyana, akiko, alec, alejandro, alexa, andres, brayan, brisa, cara, christian, connor, daniel, darya, diana, eleanor, eliza, eivor, emma, erin, evelyn, gavya, jacob, jadyn, jamesL, joseph, laura, luis, mariaD, maryam, melissa, michael, olexei, orfeo, serafin, violeta}
// '#481880', '#24085c', '#672bb5'
// const los20          = [akiko, alejandro, alexa, andres, cara, connor, daniel, darya, diana, eliza, jacob, jamesL, joseph, laura, melissa, michael, emma, violeta, alec, christian];
// const sector970      = [adam, melissa, brayan, luis, evelyn]
// const sector1        = [orfeo, eleanor, mariaD, gavya, jadyn]
// const sector43       = [maryam, brisa, olexei, serafin, aiyana]
// const sInvestigacion = [sector1, sector43, sector970, erin]
// const adamAmigos     = [sInvestigacion, los20]