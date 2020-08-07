initSum = 3050;
payAmount = 300;
int = 1.0125;
period = 12;
transferFee = 1.05;
transfers = 1;

function regs(initSum){
    let intPaid = 0;
    for (let i = 0; i < period; i++){
        if(initSum > 0){
            initSum -= payAmount;
            let temp = initSum;
            initSum *= int;
            intPaid += (initSum - temp);
            continue;
        }
        break;
    }
    return {
        left: initSum,
        totalPaid: (payAmount*period),
        tolatInterestPaid: intPaid
    }
}

function transfer(initSum){
    let temp = initSum;
    initSum *= Math.pow(transferFee, transfers);
    let fees = initSum - temp;
    for (let i = 0; i < period; i++){
        if(initSum > 0){
            initSum -= payAmount;
            continue;
        }
        break;
    }
    return {
        left: initSum,
        totalPaid: (payAmount*period),
        totalFeesPaid: fees
    }
}

console.log(regs(3050));
console.log(transfer(3050));