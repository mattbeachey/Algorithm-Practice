this.p = console.log


let deck = []
let suits = ["H", "C", "S", "D"]
let type = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

for (let i = 0; i < suits.length; i ++){
    for (let j = 0; j < type.length; j ++){
        deck.push({suit: suits[i], type: type[j]});
    }
}

// console.log(deck);

function dealHand(num){
    hand = [];
    for (let i = 0; i < num; i ++){
        hand.push(deck[Math.floor(Math.random()*(deck.length - 1))])
    }
    return hand;
}
// console.log(dealHand(5));

// console.log(dealHand(5))

console.log(checkHand(dealHand(5)))

function checkHand(hand){
    console.log(hand)
    const checks = {
        sums15: 0,
        run3: 0, 
        run4: 0,
        run5: 0,
        pairs: 0,
        flush: 0,
        nobs: 0
    }

    //check runs
    hand.sort((a, b) => {
        return a.type - b.type;
    })
    

    for (let i = 0; i < hand.length; i++){
        if (hand[i].type === hand[i + 1].type &&
            hand[i + 1].type === hand[i + 2].type &&
            hand[i + 2].type === hand[i + 3].type &&
            hand[i + 3].type === hand[i + 4].type){

        } else  if (hand[i].type === hand[i + 1].type &&
            hand[i + 1].type === hand[i + 2].type &&
            hand[i + 2].type === hand[i + 3].type){

        } else if (hand[i].type === hand[i + 1].type &&
            hand[i + 1].type === hand[i + 2].type ){

        }
    }

    //check pairs
    for (let i = 0; i < hand.length; i++) {
        for (let j = 0; j < hand.length; j++) {
            if (hand[i] !== hand[j]){
                if (hand[i].type === hand[j].type){
                    checks.pairs = checks.pairs + 0.5
                }    
            } 
        } 
    }
    return checks;
}
