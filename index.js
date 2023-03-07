let firstCard = 10
let secondCard = 10

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

console.log(sum)
let message = ""

// console.log(hasBlackJack)
// console.log(isAlive)
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")

let sumEl = document.querySelector("#sum-el")


function startGame(){

    sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card? "
    }
    
    else if (sum === 21) {
        message = " You've got the blackjack!  "
        hasBlackJack = true
    }
    
    else {
        message = "You are out of the game! "
        isAlive = false
    }
   //console.log(message)
   messageEl.textContent = message

}


//console.log()