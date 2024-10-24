const cursisten = [
  {
    spreek: () => {
      console.log("Jordy is cool!");
    },
    naam: "Angelique",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is hip!");
    },
    naam: "Arne",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is de beste!");
    },
    naam: "Domenico",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is hilarisch!");
    },
    naam: "Ian",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is grappig!");
    },
    naam: "Jochen",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is funny!");
    },
    naam: "Jorg",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is stoer!");
    },
    naam: "Marco",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo cool!");
    },
    naam: "Marvi",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo hip!");
    },
    naam: "Michelle",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo hilarisch!");
    },
    naam: "Romy",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo grappig!");
    },
    naam: "Simone",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo funny!");
    },
    naam: "Tony",
    score: 0,
  },
  {
    spreek: () => {
      console.log("Jordy is zo stoer!");
    },
    naam: "Yoeri",
    score: 0,
  },
];
const docent = {
  spreek: (eersteDeel) => {
    return `${eersteDeel} cool, hip, hilarisch, grappig, funny en stoer!`;
  },
  naam: "Jordy",
};

function hackDeScore(gewijzigdeScore) {
  let i = 0;
  while (i < cursisten.length) {
    cursisten[i].score = gewijzigdeScore;
    console.log(cursisten);
    i++;
  }
}

function printInformatieCursisten(alleCursisten) {
  for (i = 0; i < alleCursisten.length; i++) {
    console.log(`Mijn naam is: ${alleCursisten[i].naam}`);
    console.log(`Mijn score is: ${alleCursisten[i].score}`);
    alleCursisten[i].spreek();
  }
}
function printMeningDocent(mening) {
  return docent.spreek(mening);
}
/*
 * Pas onderstaande code NIET aan.
 * Indien alle bovenstaande code goed is geïmplementeerd en alle code
 * wordt in één JavaScript-bestand (of snippet) geplaatst.
 * Dan zal het uitvoeren van de code zorgen voor het resultaat
 * dat terug te zien is bij 'verwachte uitkomst'.
 */
hackDeScore(69);
printInformatieCursisten(cursisten);
console.log(`Docent zegt: ${printMeningDocent("Alle curisten zijn")}`);
