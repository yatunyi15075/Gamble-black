let sum=0
let hasBlackjack=false
let isAlive=false
let Message=""
let MessageEl=document.getElementById("message-el")
let sumEl =document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let player={
    name:"brian",
    chip: 500
}
 
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+ ": $"+player.chip

function getRandom(){
    return randomNumber=Math.floor(Math.random()*13)+1
    if(randomNumber > 10){
        return 10
    }else if(randomNumber===1){
        return 11
    }else {
        return randomNumber
    }
}

function startGame(){
    let isAlive=true
    let firstCard=getRandom()
    let secondCard=getRandom()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
}

function renderGame(){
    cardsEl.textContent ="cards: "

    for(let i=0 ;i < cards.length ;i++){
        cardsEl.textContent +=cards[i]+ " " 
    }

    sumEl.textContent="sum: " + sum
    if (sum<=20){
        Message="Do you want to draw a new card"
        isAlive=true
        hasBlackjack=false
    }
    else if(sum===21){
    Message="woooh! You have got blackjack"
    hasBlackjack=true
    isAlive=true
}
    else{
    Message="your out of the game"
    isAlive=false
    hasBlackjack=false
    }

MessageEl.textContent=Message
}
function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let card = getRandom()
        sum +=card
        cards.push(card)
        renderGame()
    }
    
}







