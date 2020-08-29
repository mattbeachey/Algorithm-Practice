const roms = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
let totals = {}

function convertToRoman(num) {
    recur(num);
    let finalString = "";
    for (const [letter, quantity] of Object.entries(totals)){
        for (let i = 0; i < quantity; i++){
            finalString += letter;
        }
    }

    return finalString;
  }
  
console.log(convertToRoman(988));
  
// let number = 100;
// console.log(number.toString()[0] !== "5");


function recur(num){
    let nearest = {}
    let leftPrecede = false;
    let getPrecede = false;
    for (const [letter, val] of Object.entries(roms)){
        if (getPrecede === false){
            if (num >= val){
                nearest[letter] = val;
                break;
            } 
    
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
        } else if(val.toString()[0] !== "5"){
            nearest[letter] = val;
            break;
        } else {
            continue;
        }

    }

    if (leftPrecede === false){
        totals[Object.keys(nearest)[0]] = Math.floor(num / Object.values(nearest)[0]);
        let remainder = num % Object.values(nearest)[0];
        remainder > 0 ? recur(remainder) : console.log("all done");
    } else {
        totals[Object.keys(nearest)[1]] = 1;
        totals[Object.keys(nearest)[0]] = 1;
        let remainder = num % (Object.values(nearest)[1] - Object.values(nearest)[0]);
        remainder > 0 ? recur(remainder) : console.log("all done");
    } 
}