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
  
console.log(convertToRoman(36));
  
// let number = 100;
// console.log(number.toString()[0] !== "5");


function recur(num){
    let nearest = {}
    for (const [letter, val] of Object.entries(roms)){
        if (num >= (val - (val/10)) && val.toString()[0] !== "5"){
          nearest[letter] = val;
          break;
        } 
        if (num >= (val - (val/5)) && val.toString()[0] !== "1"){
            nearest[letter] = val;
            break;
          } 

      }
  
    totals[Object.keys(nearest)[0]] = Math.floor(num / Object.values(nearest)[0]);
    let remainder = num % Object.values(nearest)[0];
    remainder > 0 ? recur(remainder) : console.log("all done");
}