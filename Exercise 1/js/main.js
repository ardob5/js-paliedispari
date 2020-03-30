// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.

var inputUser = document.getElementById('users-input');
var valueUser = inputUser.value;


console.log(valueUser);

document.getElementById('check').addEventListener("click",
  function reverseString() {
    var splitString = valueUser.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    console.log(joinArray);
  }
);
