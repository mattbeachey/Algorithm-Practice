

/*------------------------------------------
-------Using JS objects like a HashMap:-----
------------------------------------------*/

const obj = {};

for (let i = 0; i < 10; i++){
    const key = (Math.floor(Math.random() * 10)+ 10);
    console.log(key)
    obj[key] = i;
    console.log(obj)
}

for (let i = 0; i < 10; i++){

    if (i % 3 === 0 && i > 0){
        obj[i] = "skipped"
        const value = Math.floor(Math.random() * 10);
        obj[i-1] += value;
        console.log("adding " + value + " to index " + (i-1))
    } else {
        const value = Math.floor(Math.random() * 10);
        obj[i] = value;
        console.log("adding " + value + " to index " + i)
    }
}


// obj.thing1 = 5;
obj.thing2 = 10;
obj.thing1 ? obj.thing1 += 3 : obj.thing1 = 3;


const thisThing = "that"
obj.thisThing = "something else"

console.log(obj)