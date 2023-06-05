
//ESERCITAZIONE 3 - es. 3
// Validazione password
// Scrivi un programma che, data una stringa, da usare come ipotetica password, faccia i seguenti controlli
//almeno 6 caratteri
// non più di 20 caratteri
// deve contenere almeno uno dei seguenti simboli; “!”, “_”, “-”
// deve contenere almeno un numero
// utilizzare includes
// // && (and), || (or), ! (not) potrebbero fare al caso vostro! 

const password = (prompt("Inserisci una password"));

if (password.length <6 || password.length>20) {
alert("La password deve avere almeno 6 caratteri ma meno di 20.");
}
//per verificare che ci siano i simboli richiesti
else if (!password.includes("!") && !password.includes("_") && !password.includes("-")) {
alert("La password deve contenere almneo uno di questi caratteri ! _ -");
}
//per verificare che sia presente almeno un numero
else if (!/\d/.test(password)) {
alert("La password deve contenere almeno un numero");
}
else {
alert("Password inserita correttamente e validata")
}
