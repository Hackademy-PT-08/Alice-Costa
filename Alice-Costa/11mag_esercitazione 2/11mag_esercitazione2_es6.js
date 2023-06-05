
//ESERCITAZIONE 2 - es. 6
// Tramite il prompt memorizzare il nome di “utente 1” e di “utente 2” in delle rispettive variabili. 
// Creare una variabile per il risultato finale che contenga il check sulla condizione se il nome dell’utente 1 è uguale al nome dell’utente 2 e restituisca in **`console.log`** un booleano (`true/false`).

let numTel = parseInt(prompt("Inserisci il numero di telefono. Massimo 10 caratteri"));
numTel = numTel.slice(0, 7).replace(/\d/g, '*');

alert(numTel);
