
// //ESERCITAZIONE 2 - es. 3
// creare 4 variabili temperature con valore numerico: **`tempBari**, **tempNaples**, **tempRome**, **tempMilan**`.
// stampare a console: *`la temperatura più alta è ...`*
// stampare a console: *`la temperatura più bassa è ...`*

let tempBari = 10; 
let tempNaples = 20;
let tempRome = 35;
let tempMilan = 50;

let result = Math.max(tempBari, tempMilan, tempNaples, tempRome);
let result2 = Math.min(tempBari, tempMilan, tempNaples, tempRome);

alert (`La temperatura più alta è ${result}`);
alert (`La temperatura più bassa è ${result2}`);