const roms = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
let totalString = "";

function convertToRoman(num) {
    recur(num);
    return totalString;
  }
  

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
        for (let i = 0; i < Math.floor(num / Object.values(nearest)[0]); i++){
            totalString += Object.keys(nearest)[0];
        }
        let remainder = num % Object.values(nearest)[0];
        remainder > 0 ? recur(remainder) : console.log("all done");
    } else {
        totalString += Object.keys(nearest)[1];
        totalString += Object.keys(nearest)[0];
        let remainder = num % (Object.values(nearest)[1] - Object.values(nearest)[0]);
        remainder > 0 ? recur(remainder) : console.log("all done");
    } 
}

console.log(convertToRoman(3999));