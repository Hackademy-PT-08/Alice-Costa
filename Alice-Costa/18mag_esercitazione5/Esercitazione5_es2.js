
//ESERCITAZIONE 5 - es. 2
// Dato un array x e un valore y. Tutto ciò che dovete fare, tramite la funzione, è verificare se l'array fornito contiene il valore.
// L'array può contenere numeri o stringhe. Y può essere uno dei due.

let arrayx = ["ciao", "prova", "casa"];
let y = "casa";

function isFound(arrayx, y) {
    let trovato=false;
    let index =0;
    for (index = 0; index < arrayx.length; index++) {
        if (arrayx[index] === y){
            trovato = true;
            break
       }      
    }
        if (trovato)     
        console.log ("Ho trovato il valore nella posizione " + index)
        else console.log ("Non ho trovato il valore")
}
isFound(arrayx, y);