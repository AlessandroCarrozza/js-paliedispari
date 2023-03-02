
// chiedo all'utente di inserire una parola
const userWord = prompt("Inserisci una parola e ti dirò se è palindroma.");


// creo la function
function palindromaSiNo (word) {

    let reverse = "";

    for (let i = (word.length - 1); i >= 0 ; i--) {
        
        reverse += word[i];     
        
    }

    return reverse;
}

// invoco la function
let reverseWord = palindromaSiNo(userWord);


// collegamento con il DOM 
const resultDom = document.getElementById("result");

// output condizionale
if (userWord == reverseWord) {
    resultDom.innerHTML += `La parola "${userWord}" è palindroma`;
} else {
    resultDom.innerHTML += `La parola "${userWord}" non è palindroma`;
}