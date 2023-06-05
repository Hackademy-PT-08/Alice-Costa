
//ESERCITAZIONE 3 - es. 4
// Scrivi un programma che per il seguente testo conti quante occorrenze ci sono per ogni vocale e quante vocali ci sono in tutto:
// // .charAt() e .toLowerCase() potrebbero farvi comodo!


let testo = "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.”"

let vocale_a = 0;
let vocale_e = 0;
let vocale_i = 0;
let vocale_o = 0;
let vocale_u = 0;

let totaleVocali = 0;

for(let i = 0; i < testo.length; i++) {
let char = testo.charAt(i).toLowerCase();

switch(char) {
case "a":
    vocale_a += 1;
    totaleVocali += 1;
    break;
case "e":
    vocale_e += 1;
    totaleVocali += 1;
    break;
case "i":
    vocale_i += 1;
    totaleVocali += 1;
    break;
case "o":
    vocale_o += 1;
    totaleVocali += 1;
    break;
case "u":
    vocale_u += 1;
    totaleVocali += 1;
    break;
    }
}
console.log ("Totale a: " + vocale_a)
console.log ("Totale e: " + vocale_e)
console.log ("Totale i: " + vocale_i)
console.log ("Totale o: " + vocale_o)
console.log ("Totale u: " + vocale_u)
console.log("Totale vocali: " + totaleVocali);
