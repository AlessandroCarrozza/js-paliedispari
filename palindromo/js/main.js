
// chiedo all'utente di inserire una parola
const userWord = prompt("Inserisci una parola e ti dirò se è palindroma.");

// dichiaro una variabile con cui lavorerò nella function
let reverseWord = "";


// creo la function
function palindromaSiNo (word) {
    for (let i = (word.length - 1); i >= 0 ; i--) {
        
        reverseWord += word[i];     
        
    }

    return reverseWord;
}

// invoco la function
palindromaSiNo(userWord);



// collegamento con il DOM 
const resultDom = document.getElementById("result");

// output condizionale
if (userWord == reverseWord) {
    resultDom.innerHTML += `La parola "${userWord}" è palindroma`;
} else {
    resultDom.innerHTML += `La parola "${userWord}" non è palindroma`;
}