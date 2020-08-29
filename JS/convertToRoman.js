const roms = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
let totals = {}

function convertToRoman(num) {
 
    recur(num);



    console.log(totals);
    return num;
  }
  
  convertToRoman(3900);
  

function recur(num){
    let nearest = {}
    for (const [letter, val] of Object.entries(roms)){
        if (num >= val){
            
          nearest[letter] = val;
          break;
        } 
      }
  
    totals[Object.keys(nearest)[0]] = Math.floor(num / Object.values(nearest)[0]);
    let remainder = num % Object.values(nearest)[0];
    remainder > 0 ? recur(remainder) : console.log("all done");
}