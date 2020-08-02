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

// hand = [
//     { suit: 'C', type: 1 },
//     { suit: 'H', type: 2 },
//     { suit: 'D', type: 3 },
//     { suit: 'D', type: 4 },
//     { suit: 'H', type: 5 }
//   ]
// console.log(checkHand(hand))

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
        if (i === 0){
            if (i === 0 &&
                hand[i].type + 1 === hand[i + 1].type &&
                hand[i + 1].type + 1 === hand[i + 2].type &&
                hand[i + 2].type + 1 === hand[i + 3].type &&
                hand[i + 3].type + 1 === hand[i + 4].type){
                    console.log("straight")
            } 
        }     
        if (i < 2 ) {      
            if (hand[i].type + 1  === hand[i + 1].type &&
                hand[i + 1].type + 1  === hand[i + 2].type &&
                hand[i + 2].type + 1  === hand[i + 3].type){
                console.log("med straight")
            }  
        }
        if (i < 3){
            if (hand[i].type + 1  === hand[i + 1].type &&
                hand[i + 1].type + 1  === hand[i + 2].type){
                console.log("small straight")
            }
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
