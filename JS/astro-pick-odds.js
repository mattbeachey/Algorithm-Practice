function pairMaker(){
    const pairs = {}
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
    for (let i = 1; i <= 12; i++){
        const pick = Math.floor(Math.random() * letters.length);
        pairs[i] = letters[pick];
        letters.splice(pick, 1);
    } 
    return pairs;
}

const totalSets = [];
console.time("total time")
let progress = ">"
for (let i = 0; i < 1000000; i++){
    if (i % 100000 === 0){
        console.log(progress);
        progress += ">";
    }
    totalSets.push(pairMaker())
}
console.timeEnd("total time")
// totalSets.push(    {
//     '1': 'a',
//     '2': 'b',
//     '3': 'c',
//     '4': 'd',
//     '5': 'e',
//     '6': 'f',
//     '7': 'g',
//     '8': 'h',
//     '9': 'i',
//     '10': 'j',
//     '11': 'k',
//     '12': 'l'
//   })

const results = {
    totalSets: 0,
    noneRight: 0,
    allRight: 0,
    meanRight: 0, 
    highestRight: 0,
    tenRight: 0,
    nineRight: 0,
    eightRight: 0
}

let runningRight = 0;

totalSets.forEach(pair => {
    const pairArray = Object.values(pair);
    let ammountRight = 0;

    for (let i = 0; i < pairArray.length; i++){
        ammountRight += (pairArray[i].charCodeAt() - 97) === i ? 1 : 0;
    }
    runningRight += ammountRight;
    results.totalSets++;
    results.noneRight += ammountRight === 0 ? 1 : 0;
    results.allRight += ammountRight === 12 ? 1 : 0;
    results.highestRight = ammountRight > results.highestRight ? ammountRight : results.highestRight;
    results.tenRight += ammountRight === 10 ? 1 : 0;
    results.nineRight += ammountRight === 9 ? 1 : 0;
    results.eightRight += ammountRight === 8 ? 1 : 0;
    if (ammountRight >= 9){
        console.log(pair)
    }
})

results.meanRight = (runningRight/results.totalSets)

console.log(results.allRight >= 1 ? "!!!!!!!!!!!!!!!!!!WINNER!!!!!!!!!!!!!!!!!!" : "")
console.log(results)