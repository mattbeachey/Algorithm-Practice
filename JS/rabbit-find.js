let pos = Math.floor(100 * Math.random());
let len = 100;
function step (){
    const prev = pos;
    if (Math.random() > 0.5){
        // console.log("going up")
        pos = pos < len ? pos + 1 : pos - 1;
    } else {
        pos = pos > 1 ? pos - 1 : pos + 1;
    }

    console.log("rabbit moving from ", prev, " to ", pos);
}

let found = false;



direction = "up";

maxIterations = 1000;
currentIteration = 0;

function guessPosition(guess){
    console.log("current iteration:", currentIteration)
    if (currentIteration === maxIterations){
        console.log("ran out of tried positions");
        return;
    }
    currentIteration++;

    console.log("checking at hole ", guess, ", actually at ", pos);

    if (guess === pos){
        found = true;
        console.log("found the rabbit at ", pos, " on iteration ", currentIteration);
        return;
    }

    step();

    // guessing algorithm 
    if (direction === "wait"){
        console.log("got wait")
        direction = "down";
    }

    if (guess === len && direction !== "down"){
        direction = "wait";
    }

    if (direction === "up"){
        guess++;
        guessPosition(guess);
    } else if (direction === "wait"){
        guessPosition(guess);
    } else if (direction === "down"){
        guess--;
        guessPosition(guess);
    }
    
}

guessPosition(1);

if (!found){
    console.log("no rabbit found");
}
