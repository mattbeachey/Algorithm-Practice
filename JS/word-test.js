
//experiment based on the Zipf Mystery https://www.youtube.com/watch?v=fCn8zs912OE

const finalWordArray = []
const resultsObject = {};

function writeWords(wordCount){
    for(let i = 0; i < wordCount; i++){
        let word = "";
        finalWordArray.push(wordReturn(word));
    }
    return finalWordArray;
}

function wordReturn(word){
    let letterPicker = Math.floor(Math.random()*27);
    if (letterPicker == 26 && word.length > 0){
        return word;
    } else if (letterPicker < 26){
        letterPicker = Math.floor(Math.random()*25);
        word += String.fromCharCode(letterPicker + 96);
        return wordReturn(word);
    }
}


writeWords(1000);

for (let i = 0; i < finalWordArray.length; i++){
    if (finalWordArray[i] !== undefined){
        if (isNaN(resultsObject[finalWordArray[i].length])){
            resultsObject[finalWordArray[i].length] = 1;
        } else {
            resultsObject[finalWordArray[i].length] += 1;
        }
    }
}


console.log(resultsObject);
// console.log("Here comes the space" + String.fromCharCode(32) + "was it there???");