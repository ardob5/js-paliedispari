// Chiedo a utente di inserire come input una parola
// tramite una funzione (creata da te) verifico se la parola inserita è palindroma o meno;
// dò output a utente dicendogli che ho verificato;
// qui sicuramente da cercare ci sarà il come revertare una parola.

var inputUser = document.getElementById('users-input');
var postEventContainer = document.getElementById('post-event');
var outputUser = document.getElementById('output');

document.getElementById('check').addEventListener("click",
  function reverseString() {
    var splittedInput = inputUser.value.split("");
    var revertedArray = splittedInput.reverse();
    var newString = revertedArray.join("");
    console.log(newString);

    if (inputUser.value === newString) {
      outputUser.innerHTML = "La parola è palindroma";
    } else {
      outputUser.innerHTML = "La parola non è palindroma";
    }
    
    postEventContainer.style.display = "block";
  }
);
