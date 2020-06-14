

function knightMoves(pos){
    let file = (pos[0].charCodeAt(0) - 96);
    let rank = parseInt(pos[1]);
    let count = 0;
    let moves = 8;
    const middle = [3, 4, 5, 6]

    check(rank);
    check(file);

    function check(toCheck){
        if(toCheck > 4){
            toCheck = Math.abs(toCheck - 9)
        }
        while(!middle.includes(toCheck)){
            toCheck++
            count++
            if (count < 3){
                moves -= 2;
            }
            if (count > 2){
                moves -= 1;
            }
        }
    }
return moves;
}

console.log(knightMoves("a2"));//expected output 3
console.log(knightMoves("c3"));//expected output 8
console.log(knightMoves("h8"));//expected output 2

a = "value"
console.log(a)//output: value


asdf = "asdf"
asdf="fdsa"
console.log(asdf)

i = 5

for (i = 0; i < 10; i++){
    console.log(i)
}
console.log("outside " + i)

let thing;
console.log(thing)
thing = 10;
console.log(thing)
thing = "dog"
console.log(thing)