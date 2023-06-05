//ESERCITAZIONE 4 - es. 7
// Il giocatore dovrà indovinare se il numero generato casualmente è pari o dispari. Il gioco fornirà il risultato corretto e mostrerà se il giocatore ha indovinato o meno. Usando le funzioni.
// TIP
// per sapere se il numero generato è pari: numeroCasuale % 2 === 0;
// usare prompt("Inserisci 'Pari' o 'Dispari':"); come richiesta all'utente

function numerocasuale ()
{
    let numero = (prompt("Inserisci un numero Pari o dispari"));
if (isNaN(numero))
{ 
    alert(numero + " non è un numero.");
}
else if (parseInt(numero) % 2 === 0)
{ 
    alert("Numero Pari");
}
else if (Number(numero) % 2 != 0)
{
    alert ("Numero Dispari");
}
}
numerocasuale ();
