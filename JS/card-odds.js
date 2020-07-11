
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
        let whichCard = Math.floor(Math.random() * cards.length)
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
let straights = 0;
let flushes = 0;
let totalHands = 0;
let winningCondition;

for (let i = 0; i < 10000000; i++) {
    let hand = []
    let cards = []

    totalHands++

    newDeck(cards);
    dealCards(5, cards, hand)
    
    // if (hand[0][0] + hand[1][0] + hand[2][0] === 21){
    //     winningHands++;
    //     winningCondition = " added up to 21";
    // } 

    let straight = false;
    let flush = false;
    
    if (hand[0][1] === hand[1][1] && 
        hand[1][1] === hand[2][1] && 
        hand[2][1] === hand[3][1] &&
        hand[3][1] === hand[4][1]){
            flush = true;
            flushes++
            // winningHands++
            // winningCondition = " were a flush"
            // console.log(hand[0], hand[1], hand[2], hand[3], hand[4])
        }
        
    
    if (hand[0][0] + 1 === hand[1][0] && 
        hand[1][0] + 1 === hand[2][0] && 
        hand[2][0] + 1 === hand[3][0] &&
        hand[3][0] + 1 === hand[4][0]){
            straight = true;
            straights++
            // winningHands++
            // winningCondition = " were a straight"
            // console.log(hand[0], hand[1], hand[2], hand[3], hand[4])
        }

    if (flush === true && straight === true){
        winningHands++
        console.log(hand[0], hand[1], hand[2], hand[3], hand[4])
    }

    winningCondition = " were a straight flush"
}
console.log(winningHands + " out of " + totalHands + winningCondition);
console.log("There were " + flushes + " vanilla flushes");
console.log("There were " + straights + " vanilla straights");
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