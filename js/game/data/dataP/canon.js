import { pieces, tipoAlma } from "../../gamepieces.js"
import { pancakesFury, cookingWar, hobbyChef, detectiveInstinct, admadisDawn,
	diceChange, absoluteEnd,
	eternity, emergencyHeal } from "../dataH/canonH.js";
import { basicOne, basicTwo, basicThree} from "../movs.js";

const adam = new pieces("", '#fc9803', '#ce6600', '#fdfa95', tipoAlma[4],
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
	 "No esta tan bien como pensaba…",
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
	 "AmigoTieso3",
	 "AmigoTieso4",
	 "AmigoTieso5"
	],
	["Ya que…",
	 "Laura…",
	 "Adam…",
	 "…",
	 "Supongo que…"
	],
	["¿Estoy de vuelta? Bueno, ya qué.",
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

const eivor = new pieces("", "#00105f", "#04003f", "#fff000", tipoAlma[3],
	"eivor", "Eivor", "informante del azar", "Informante de la suerte",
	"Descripción corta",
	"Descripción larga",
	["Que la suerte los acompañe… porque la tomé toda para mí.",
	 "Tengo un plan maestro para ganar",
	 "*Risas*",
	 "Idle4",
	 "Idle5"
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

const jacob = new pieces("", "#700000", "#400000", "#ff2222", tipoAlma[3],
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

const joseph = new pieces("", "#", "#", "#", tipoAlma[0],
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

const laura = new pieces("", "#", "#", "#", tipoAlma[0],
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

const cara = new pieces("", "#", "#", "#", tipoAlma[0],
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

const eliza = new pieces("", "#", "#", "#", tipoAlma[0],
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

const jamesL = new pieces("", "#", "#", "#", tipoAlma[0],
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

const andres = new pieces("", "#", "#", "#", tipoAlma[0],
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

const alejandro = new pieces("", "#", "#", "#", tipoAlma[0],
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

const michael = new pieces("", "#", "#", "#", tipoAlma[0],
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

const connor = new pieces("", "#", "#", "#", tipoAlma[0],
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

const jadyn = new pieces("", "#", "#", "#", tipoAlma[0],
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

const orfeo = new pieces("", "#", "#", "#", tipoAlma[0],
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

const eleanor = new pieces("", "#", "#", "#", tipoAlma[0],
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

const serafin = new pieces("", "#", "#", "#", tipoAlma[0],
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

const olexei = new pieces("", "#", "#", "#", tipoAlma[0],
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

const aiyana = new pieces("", "#", "#", "#", tipoAlma[0],
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

const brisa = new pieces("", "#", "#", "#", tipoAlma[0],
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

const evelyn = new pieces("", "#", "#", "#", tipoAlma[0],
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

const luis = new pieces("", "#", "#", "#", tipoAlma[0],
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

const alexa = new pieces("", "#", "#", "#", tipoAlma[0],
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

const erin = new pieces("", "#", "#", "#", tipoAlma[0],
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
export {adam, aiyana, akiko, alejandro, alexa, andres, brayan, brisa, cara, connor, darya, eleanor, eliza, eivor, erin, evelyn, jacob, jadyn, jamesL, joseph, laura, luis, maryam, melissa, michael, olexei, orfeo, serafin}
// '#481880', '#24085c', '72bb5'
