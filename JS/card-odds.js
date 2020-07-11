
let suits = ["H", "D", "S", "C"]
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

let fifteenHands = []



function newDeck(cards) {
    suits.forEach(suit => {
        nums.forEach(num => {
            cards.push([num, suit])
        })
    })
}



let fifteen = 0;
let notFifteen = 0;

// for (let i = 0; i < cards.length; i++) {
//     for (let j = 0; j < cards.length; j++) {
//         if (cards[i][0] + cards[j][0] === 15) {
//             fifteenHands.push([cards[i], cards[j]])
//             fifteen++;
//         } else {
//             notFifteen++;
//         }
//     }
// }


let recurTimes = 0;
function dealCards(noOfCards, cards, hand) {
    for (i = 0; i < noOfCards; i++) {
        let whichCard = Math.floor(Math.random() * 51)
        let card = cards.splice(whichCard, 1)[0]
        if (card !== undefined){
            hand.push(card)
        }
        
        if (card === undefined){
            dealCards(1, cards, hand)
            recurTimes++
            // console.log("something fucked up with card no. " + whichCard)
            // console.log(cards)
        }
    }
}





let winningHands = 0;
let totalHands = 0;

for (let i = 0; i < 1000; i++) {
    let hand = []
    // let newCards = [...cards]
    let cards = []

    newDeck(cards);
    dealCards(3, cards, hand)

    // console.log("hand number " + i)
    // console.log(hand[0], hand[1], hand[2])
    
    totalHands++
    if (hand[0][0] + hand[1][0] + hand[2][0] === 21){
        winningHands++
        // console.log(hand)
        // console.log("WIIIIINNNNNNNERRRRRR!!!!!!!")
        // console.log("this was hand number " + i)
        // console.log(" ")
    } 
}
console.log(winningHands + " out of " + totalHands + " added up to 21")
console.log("we used recursion to fix it " + recurTimes + " times!!!")

// console.log("Total hands that equal 15: " + fifteen);
// console.log("Total hands that don't equal 15: " + notFifteen);

// if (hand[0] === undefined || hand[1] === undefined){
//     console.log(" ")
//     console.log("SOMETHING FUCKED UP: ")
//     console.log(theFuckUp)
//     console.log("-------------------")
//     console.log(" ")
// }