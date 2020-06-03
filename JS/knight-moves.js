





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
console.log(knightMoves("h7"));