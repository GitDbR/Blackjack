let player = {
    name: "Damini",
    chips: 148
}

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
// console.log(hasBlackJack)
// console.log(isAlive)
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let cards = []

let playerEl = document.getElementById("player-el") 
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {

    //if 1-->    return 11
    //if 11-13-->return 10q 
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if(randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
function renderGame() {
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }

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

function newCard() {
    //use yhe getRandomCard() to set the value of card
    if( isAlive === true && sum < 21){  //or you can write: hasBlackjack === true instead of sum < 21

    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    }
    
    
    
    

}


//console.log()