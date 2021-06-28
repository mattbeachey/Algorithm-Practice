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
for (let i = 0; i < 10; i++){
    totalSets.push(pairMaker())
}

const results = {
    totalSets: 0,
    noneRight: 0,
    allRight: 0,
}

totalSets.forEach(pair => {
    const pairArray = Object.values(pair);
    let ammountRight = 0;

    for (let i = 0; i < pairArray.length; i++){
        ammountRight += (pairArray[i].charCodeAt() - 97) === i + 1 ? 1 : 0;
    }
    console.log("ammount right: ", ammountRight)
    results.totalSets++;
    results.noneRight += ammountRight === 0 ? 1 : 0;
    results.allRight += ammountRight === 12 ? 1 : 0;
})

console.log(results)