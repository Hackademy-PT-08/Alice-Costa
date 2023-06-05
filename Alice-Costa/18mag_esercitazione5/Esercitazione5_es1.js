
//ESERCITAZIONE 5 - es. 1 
// Scrivi una funzione che accetti come parametri in ingresso:

const array1 = [3, 7, 2, 5, 8, 1];
const array2 = [9, 3, 1, 4, 7, 10];

function calculate(array1, array2, operation = "addizione"){
const resultArray = [];

for(let i = 0; i < array2.length; i++) {
    let result;
switch(operation) {
case "addizione":
    result = array1[i] + array2[i];
console.log(result);
    break;
case "sottrazione":
    result = array1[i] - array2[i];
    break;

case "moltiplicazione":
    result = array1[i] * array2[i];
    break;

case "divisione":
    result = array1[i] / array2[i];
    break;

default:
    console.log("operazione non trovata!");
    return;

}

resultArray.push(result);

}

return resultArray;

}

const result = calculate(array1, array2, "pluto");
console.log(result);
