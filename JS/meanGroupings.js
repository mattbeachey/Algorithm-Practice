//group the indexes of internal arrays by their mean, 
//return all grouped indexes in 2d array ordered by the lowest 
//present value in a given internal array
let a = [[4, 4], [2,3], [3,3,3], [2,3], [2, 4]]

function overWorld(a){
    let meanObj = objectMap(a);
    let finalArray = []
    for(array in meanObj){
        finalArray.push(meanObj[array]);
    }

    finalArray.sort((a, b) => {
        return a[0] - b[0];
    })

    return finalArray;
}
console.log(overWorld(a))

function objectMap(a){
	let obj = {};
	for(i=0; i<a.length; i++){
		let mean = 0;
		for(j=0; j<a[i].length; j++){
			mean += a[i][j];
        }
        mean /= a[i].length;
		if(isNaN(obj[mean])){
			obj[mean] = [i];
		}else{
			obj[mean].push(i);
		}

	}
	return obj;
}

