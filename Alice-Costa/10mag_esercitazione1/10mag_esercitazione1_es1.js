
//ESERCITAZIONE 1 - es. 1
// Dichiara una variabile chiamata movieTitle e valorizzala (es: ‘Pulp fiction’).
// Dichiara una variabile chiamata **movieYear** e valorizzala (es: 1994).
// Dichiara una variabile chiamata **movieDirector** e valorizzala (es: ‘Quentin Tarantino’).
// Stampa nella console il valore di ognuna di queste in 3 righe differenti. L’output dovrà essere come questo:
// movie: Pulp Fiction
// year: 1994
// director: Quentin Tarantino
// Stampa nella console il valore di ognuna in un’unica riga usando questo formato: “Pulp fiction (1994 - Quentin Tarantino)”
// TIP: per mandare a capo una stringa \n

let movieTitle = "Pulp fiction";
let movieYear = 1994;
let movieDirector = "Quentin Tarantino";

//console.log("movie:" + movieTitle + "\nYear:" + movieYear + "\ndirector:" + movieDirector);  
alert(movieTitle + " (" + movieYear + "-" + movieDirector+")");