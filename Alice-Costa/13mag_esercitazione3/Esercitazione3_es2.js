
//ESERCITAZIONE 3 - es. 2
// Scrivi un programma che dato un numero stampi la tabellina corrispondente fino a 10.
// Esempio di output: 
// 10 x 1 = 10


let numero = parseInt(prompt("Inserisci un numero"));

for (let i = 1; i <= 10; i++) {
console.log(`x + ${i} = ${numero * i}`);
}

let i = 1;

while(i <= 20) {
console.log(`${numero} + ${i} = ${numero * i}`);
i++;
}
