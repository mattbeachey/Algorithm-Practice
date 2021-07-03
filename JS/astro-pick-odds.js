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

const results = {
    totalSets: 0,
    highestRight: 0,
    allRight: 0,
    tenRight: 0,
    nineRight: 0,
    eightRight: 0,
    sevenRight: 0,
    sixRight: 0,
    fiveRight: 0,
    fourRight: 0,
    threeRight: 0,
    twoRight: 0,
    oneRight: 0,
    noneRight: 0,
    meanRight: 0, 
}

function runSets(setNum){
    const totalSets = [];
    console.time("building totalSets")
    let progress = ">"
    for (let i = 0; i < setNum; i++){
        if (i % 100000 === 0){
            console.log(progress);
            progress += ">";
        }
        totalSets.push(pairMaker())
    }
    console.timeEnd("building totalSets")
    return totalSets;
}

function checkSets(totalSets){
    console.time("checking totalSets")
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
        results.sevenRight += ammountRight === 7 ? 1 : 0;
        results.sixRight += ammountRight === 6 ? 1 : 0;
        results.fiveRight += ammountRight === 5 ? 1 : 0;
        results.fourRight += ammountRight === 4 ? 1 : 0;
        results.threeRight += ammountRight === 3 ? 1 : 0;
        results.twoRight += ammountRight === 2 ? 1 : 0;
        results.oneRight += ammountRight === 1 ? 1 : 0;
        if (ammountRight >= 9){
            console.log(pair)
        }
    })
    console.timeEnd("checking totalSets")
}


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



let runningRight = 0;
console.time("total run time")
for(let i = 0; i <10; i++) {
    checkSets(runSets(1000000));
}


results.meanRight = (runningRight/results.totalSets)

console.log(results.allRight >= 1 ? "!!!!!!!!!!!!!!!!!!WINNER!!!!!!!!!!!!!!!!!!" : "")
console.log(results)
console.timeEnd("total run time")