
//ESERCITAZIONE 4 - es. 1 
// Scrivere una funzione che accetti come parametro in ingresso "num" e che controlli se questo parametro sia un numero positivo, negativo, o zero.

let num = parseInt(prompt("Inserisci un numero"));

function miafunzione () {
    if (num < 0)
{
    alert("Il numero è negativo");
} 
else if (num > 0)
{
alert("Il numero è maggiore di zero");
}
else if (num === 0)
{
    alert("Il numero è uguale a zero");
}
else 
{alert("Non hai inserito un numero")};
}

miafunzione()    

