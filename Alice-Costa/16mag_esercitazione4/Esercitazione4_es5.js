//ESERCITAZIONE 4 - es. 5
// Calcola il voto del giocatore a fantacalcio.

let baseVoto = 8;
let goalfatti = 2;
let assistEffettuati = 1;
let autogol = 0;
let ammonizione = true;
let espulsione = false;

function calcolofinale (baseVoto,goalfatti,assistEffettuati,autogol,ammonizione,espulsione) {
let totalegoal = (goalfatti) * 3;
let totaleassist = (assistEffettuati);
let totaleautogol = (autogol) *2;
let puntiammonizione = 0;
let puntiespulsione = 0;

if (ammonizione) {
    puntiammonizione = 0.5;
}

if (espulsione) {
    puntiespulsione = 1;
}

let bonus = (totalegoal + totaleassist)
let KO = (totaleautogol + puntiammonizione + puntiespulsione)

let Totale = baseVoto + (bonus - KO);
return (Totale);

}

let variabileappoggio = calcolofinale (baseVoto,goalfatti,assistEffettuati,autogol,ammonizione,espulsione);

alert (variabileappoggio);
