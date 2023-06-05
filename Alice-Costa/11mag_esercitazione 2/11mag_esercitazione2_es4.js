
//ESERCITAZIONE 2 - es. 4
// Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
// l'età della persona
// quanti anni sono necessari per raggiungere i 100
// restituisca in output (`console.log` o `alert`) entrambi i risultati.

let annonascita = parseInt(prompt("Inserisci il tuo anno di nascita"));
let annocorrente = 2023;

let anni = annocorrente - annonascita;
let cento = 100 - anni;

alert((`Nel 2023 hai ${anni} e ti mancano ${cento} anni per diventare centenario`));

