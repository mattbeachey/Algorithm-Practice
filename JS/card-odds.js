let cards = [
    [ 0, 'H' ],  [ 1, 'H' ],  [ 2, 'H' ],  [ 3, 'H' ],
    [ 4, 'H' ],  [ 5, 'H' ],  [ 6, 'H' ],  [ 7, 'H' ],
    [ 8, 'H' ],  [ 9, 'H' ],  [ 10, 'H' ], [ 11, 'H' ],
    [ 12, 'H' ], [ 0, 'D' ],  [ 1, 'D' ],  [ 2, 'D' ],
    [ 3, 'D' ],  [ 4, 'D' ],  [ 5, 'D' ],  [ 6, 'D' ],
    [ 7, 'D' ],  [ 8, 'D' ],  [ 9, 'D' ],  [ 10, 'D' ],
    [ 11, 'D' ], [ 12, 'D' ], [ 0, 'S' ],  [ 2, 'S' ],
    [ 3, 'S' ],  [ 4, 'S' ],  [ 5, 'S' ],  [ 6, 'S' ],
    [ 7, 'S' ],  [ 8, 'S' ],  [ 9, 'S' ],  [ 10, 'S' ],
    [ 11, 'S' ], [ 12, 'S' ], [ 0, 'C' ],  [ 1, 'C' ],
    [ 2, 'C' ],  [ 3, 'C' ],  [ 4, 'C' ],  [ 5, 'C' ],
    [ 6, 'C' ],  [ 8, 'C' ],  [ 9, 'C' ],  [ 10, 'C' ],
    [ 11, 'C' ], [ 12, 'C' ]
  ]


let suits = ["H", "D", "S", "C"]
let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

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



function dealCards(noOfCards, cards, hand) {
    for (i = 0; i < noOfCards; i++) {
        let whichCard = Math.floor(Math.random() * 51)
        let card = cards.splice(whichCard, 1)[0]
        hand.push(card)
        if (card === undefined){
            console.log("something fucked up with card no. " + whichCard)
        }
    }
}




let winningHands = 0;
let totalHands = 0;

for (let i = 0; i < 10000; i++) {
    let hand = []
    // let newCards = [...cards]
    cards = []

    newDeck(cards);
    dealCards(2, cards, hand)

    // console.log("hand number " + i)
    // console.log(hand[0], hand[1])
    
    totalHands++
    if (hand[0][0] + hand[1][0] === 15){
        winningHands++
        // console.log(hand)
        // console.log("WIIIIINNNNNNNERRRRRR!!!!!!!")
        // console.log("this was hand number " + i)
        // console.log(" ")
    } 
}
console.log(winningHands + " out of " + totalHands + " added up to 15")

// console.log("Total hands that equal 15: " + fifteen);
// console.log("Total hands that don't equal 15: " + notFifteen);

// if (hand[0] === undefined || hand[1] === undefined){
//     console.log(" ")
//     console.log("SOMETHING FUCKED UP: ")
//     console.log(theFuckUp)
//     console.log("-------------------")
//     console.log(" ")
// }