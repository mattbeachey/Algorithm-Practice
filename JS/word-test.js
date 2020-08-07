
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
    } else {
        letterPicker = Math.floor(Math.random()*26);
        word += String.fromCharCode(letterPicker + 97);
        return wordReturn(word);
    }
}


writeWords(1000);

for (let i = 0; i < finalWordArray.length; i++){
    if (isNaN(resultsObject[finalWordArray[i].length])){
        resultsObject[finalWordArray[i].length] = 1;
    } else {
        resultsObject[finalWordArray[i].length] += 1;
    }
}

for (let i = 0; i < Object.keys(resultsObject).length; i++){
    if (resultsObject[i+1] !== undefined){
        continue;
    } else {
        resultsObject["firstNonOccurence"] = (i + 1) + " letter word";
        break;
    }
}

return resultsObject;