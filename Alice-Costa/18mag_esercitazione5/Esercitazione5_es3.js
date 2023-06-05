
//ESERCITAZIONE 5 - es. 3
// Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri positivi.
// Nota: se non c'è nulla da sommare, la somma è predefinita a 0.

let serienumeri = [1 , 4 , 7 , 8 , -5]

function miafunzione (prova) {
    let somma = 0;
    for (let i = 0; i < prova.length; i++) {
        if(prova[i]>=0){
            somma += prova[i];    
        }    
    }
    return console.log(somma);

} 
miafunzione(serienumeri);
