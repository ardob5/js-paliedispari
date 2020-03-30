// Creo gioco pari o dispari;
// L’utente sceglie pari o dispari e un numero da 1 a 5 (non è vero, come abbiam detto tutti e 2 i numeri vengono generati) quindi pc gioca contro se stesso.
// Generiamo un numero random (sempre da 1 a 5) per il computer.
//  Sommiamo i due numeri e dichiariamo chi ha vinto.
var userChoice = document.getElementById('user-select');
var postEventContainer = document.getElementById('post-event');

function numberGenerator() {
  return Math.floor((Math.random() * 5) + 1);
}

document.getElementById('check').addEventListener("click",
  function letsPlay() {
    userSelect = userChoice.value;
    var userNumber = numberGenerator();
    var botNumber = numberGenerator();
    var sumNumbers = userNumber + botNumber;
    console.log(userNumber);
    console.log(botNumber);
    if ((userSelect == "Pari" && sumNumbers % 2 == 0) || (userSelect == "Dispari") && (sumNumbers % 2 !=0)) {
      document.getElementById('output').innerHTML = "La somma è : " + sumNumbers + ". Utente 1 Vince!!";
    } else {
      document.getElementById('output').innerHTML = "La somma è : " + sumNumbers + ". Utente 2 Vince!!";
    }
    postEventContainer.style.display = "block";
  }
)



// function letsPlay() {
//   userSelect = userChoice.value;
//   var userNumber = numberGenerator();
//   var botNumber = numberGenerator();
//   var sumNumbers = userNumber + botNumber;
//   console.log(userNumber);
//   console.log(botNumber);
//   if ((userSelect == "Pari" && sumNumbers % 2 == 0) || (userSelect == "Dispari") && (sumNumbers % 2 !=0)) {
//     document.getElementById('output').innerHTML = "La somma è :" + sumNumbers + ". Utente 1 Vince!!";
//   } else {
//     document.getElementById('output').innerHTML = "La somma è :" + sumNumbers + ". Utente 2 Vince!!";
//   }
//   postEventContainer.style.display = "block";
// }
