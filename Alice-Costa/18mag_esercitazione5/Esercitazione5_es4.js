
//ESERCITAZIONE 5 - es. 4
// Dato un array di prodotti:

let arrayx = ["Smartphone","Auricolari","Bluetooth" ];
let y = prompt("Quale prodotto vuoi cercare?");

function isFound(arrayx, y) {
    let trovato=false;
    let index = 0;
    for (index = 0; index < arrayx.length; index++) {
        // let char = arrayx.charAt(index).toLowerCase();
        if (arrayx[index] === y){
            trovato = true;
            break
       }      
    }
        if (trovato)     
        alert ("Ho trovato il valore nella posizione " + index)
        else alert ("Non ho trovato il valore")
}
isFound(arrayx, y);
