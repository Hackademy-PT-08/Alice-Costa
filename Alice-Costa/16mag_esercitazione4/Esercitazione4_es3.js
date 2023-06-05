//ESERCITAZIONE 4 - es. 3
// Scrivi una funzione che accetti come parametri di ingresso due stringhe. Il primo parametro è la “frase”, il secondo la “lettera” da controllare quante volte è presente nelle frase. In output deve restituire il conteggio finale.
// Il primo parametro relativo alla frase deve essere inserito tramite prompt.

let testo = prompt("Inserisci il primo argomento");
const letterascelta = "a";

if (isNaN(testo)) { 
    let numcaratteri = contacarattere (testo, letterascelta);
    alert (numcaratteri);
}
else {
    alert("Devi inserire una frase")
}

function contacarattere (testo, letterascelta) {
    let totale = 0;
    for(let i = 0; i < testo.length; i++) {
        let char = testo.charAt(i).toLowerCase();

        if(char === letterascelta) { 
            totale ++
        }
    }
    return (totale)
}
