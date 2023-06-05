
//ESERCITAZIONE 2 - es. 7
// Scrivi un programma che dato:
// Un numero totale di gatti
// Il numero dei gatti presenti in ogni fila
// Restituisca in output:
// Il numero totale delle file
// il numero di gatti mancanti per completare una nuova fila

const TotGatti = 10;
const GattiFila = 2;

let numerofile=(TotGatti/GattiFila);

let missingCats = GattiFila - (TotGatti % GattiFila);

console.log("Numero totale di file: " + numerofile);
console.log("Numeri dei gatti mancanti: " + missingCats);
