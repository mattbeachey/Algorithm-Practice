const lightswitchArray = [];
for (let i = 0; i < 100; i++){
    lightswitchArray.push(true);
}

for (let i = 2; i < lightswitchArray.length; i++){
    lightswitchArray.forEach((lightswitch, j) => {
        if ((j + 1) % i === 0){
            lightswitchArray[j] = !lightswitchArray[j];
        }
    })
}

console.log("final: ", lightswitchArray);
console.log("total switches on: ", (lightswitchArray.filter(on => on)).length);
console.log("total switches off: ", (lightswitchArray.filter(on => !on)).length);