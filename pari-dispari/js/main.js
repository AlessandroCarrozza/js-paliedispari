
// chiedo all'utente di scegliere pari o dispari
const pariDispariUser = prompt('Inserisci "pari" o "dispari".');

// chiedo all'utente di inserire un numero da 1 a 5
const numberUser = parseInt(prompt("Inserisci un numero da 1 a 5."));

console.log(pariDispariUser);
console.log(numberUser);


// dichiaro variabile con cui andrò a lavorare nella function
let numberComputer = "";

// creo la function dei numeri casuali
function casualNumber (min, max) {
    numberComputer = Math.floor(Math.random() * max) + min;
    
    return numberComputer
}

// invoco la function dei numeri casuali
casualNumber(1, 5);
console.log(numberComputer);


// dichiaro variabile con cui andrò a lavorare nella function
let sommaPlayers = "";

// creo la function per la somma
function somma (firstNumber, secondNumber) {
    sommaPlayers = firstNumber + secondNumber;

    return sommaPlayers;
}

// invoco la function per la somma
somma (numberUser, numberComputer);
console.log(sommaPlayers);



// collegamento al DOM
const resultDom = document.getElementById("result");

// output condizionale
if (sommaPlayers % 2 == 0 && pariDispariUser == "pari") {
    resultDom.innerHTML += `Hai vinto!!! </br> Hai scelto pari e la somma dei due numeri è ${sommaPlayers}.`;
} else if (sommaPlayers % 2 !== 0 && pariDispariUser == "dispari") {
    resultDom.innerHTML += `Hai vinto!!! </br> Hai scelto dispari e la somma dei due numeri è ${sommaPlayers}.`;
} else if (sommaPlayers % 2 == 0 && pariDispariUser == "dispari") {
    resultDom.innerHTML += `Hai perso! </br> Hai scelto dispari ma la somma dei due numeri è ${sommaPlayers}`;
} else {
    resultDom.innerHTML += `Hai perso! </br> Hai scelto pari ma la somma dei due numeri è ${sommaPlayers}`;
}


