function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    
    for (let i = 0; i < arr2.length; i++){
        let inCur = {in: false, index: 0};

        for (let j = 0; j < arr1.length; j++){
            if (arr2[i][1] === arr1[j][1]){
                inCur.in = true;
                inCur.index = j;
            }
        }

        if (inCur.in === true){
            arr1[inCur.index][0] += arr2[i][0];
        } else {
            arr1.push(arr2[i]);
        }
    }
    
    arr1.sort( (a, b)=>{
        if (a[1] > b[1]){
            return 1;
        }
        if (b[1] > a[1]){
            return -1;
        }
        return 0;
    });
    
    return arr1;
}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));