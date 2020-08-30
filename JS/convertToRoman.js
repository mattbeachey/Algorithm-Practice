const roms = {ê: 100000, ï: 50000, ↂ: 10000, ↁ: 5000, M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
let finalString = "";

function convertToRoman(num) {
    finalString = "";
    recur(num);
    return finalString;
  }
  

function recur(num){
    let nearest = {}
    let leftPrecede = false;
    let getPrecede = false;
    for (const [letter, val] of Object.entries(roms)){
        //this happens until it has been determined that a left-preceding nubmer is needed
        if (getPrecede === false){
            //narrows down which base to begin with and adds that to nearest object
            if (num >= val){
                nearest[letter] = val;
                break;
            } 
            //determines if numeral will need left-proceeder - ie. IX, CD, etc.
            if (num >= (val - (val/10)) && val.toString()[0] !== "5"){
                leftPrecede = true;
                nearest[letter] = val;
                getPrecede = true;
            } 
            if (num >= (val - (val/5)) && val.toString()[0] !== "1"){
                leftPrecede = true;
                nearest[letter] = val;
                getPrecede = true;
            } 
        }
        //this guarantees that only non-5 numbers will be added for left-preceders. If it is a 5 it skips to the next 
        else if(val.toString()[0] !== "5"){
            nearest[letter] = val;
            break;
        } else {
            continue;
        }

    }

    //if there is no left-preceding number, add value to the finalString, find remainder and start again with remainder
    if (leftPrecede === false){
        for (let i = 0; i < Math.floor(num / Object.values(nearest)[0]); i++){
            finalString += Object.keys(nearest)[0];
        }
        let remainder = num % Object.values(nearest)[0];
        remainder > 0 ? recur(remainder) : console.log();
    } else { //if there is left-preceding number, add both to finalString and start again with remainder
        finalString += Object.keys(nearest)[1];
        finalString += Object.keys(nearest)[0];
        let remainder = num % (Object.values(nearest)[1] - Object.values(nearest)[0]);
        remainder > 0 ? recur(remainder) : console.log();
    } 
}

console.log(convertToRoman(112000));

// let oneThruThou = {};
// for (let i = 1; i < 1000; i++){
//     oneThruThou[i] = convertToRoman(parseInt(i));
// }
// console.log(oneThruThou);

