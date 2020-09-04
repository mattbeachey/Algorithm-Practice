const skillz = "mppzbmbpzcbmpmczcz"

function maxCombos(skills){
    let totals = {m: 0, p: 0, z: 0, b: 0, c:0};

    for (let i = 0; i < skills.length; i++){
        totals[skills[i]]++;
    }
    
    let lowest = Number.MAX_SAFE_INTEGER;

    Object.keys(totals).forEach(char => {
        lowest = totals[char] <= lowest ? totals[char] : lowest
    })

    return lowest;
}

console.log(maxCombos(skillz));