
//ESERCITAZIONE 3 - es. 1
// Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo queste regole:
// v < 18: insufficiente
// 18 >= v < 21: sufficiente
// 21 >= v < 24: buono
// 24 >= v < 27: distinto
// 27 >= v <= 29: ottimo
// v = 30: eccellente


let v = parseInt(prompt("Inserisci un voto numerico"));

if (v < 18) {
 alert("Insufficiente");
}
else if (v >= 18 && v <21) {
    alert("Sufficiente" );
   }
else if (v >= 21 && v <24) {
    alert("Buono");
   }
else if (v >= 24 && v <27) {
    alert("Distinto");
   }
else if (v >= 27 && v <=29) {
    alert("Ottimo");
   }
else if (v === 30) {
    alert("Eccellente");
   }
else if (v>30) {
    alert("Voto non registrato");
   }
