//Symmetric Difference
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
//TODO: has to be able to take more than two arguments: shit.

//add all params into an array
//loop thru array - group pairs together to run thru test: 0 and 1, 2 and 3, etc.
//if one of a pair equals null, bypass the test and just return the other array
//if both equal null, just return;

function symGroup(array1, array2) {
  
    const first = testSym(array1, array2)
    const second = testSym(array2, array1)
    const sorted = first.concat(second).sort(function(a, b){
      return a - b;
    });
    const uniqArray = []
    for (let i = 0; i < sorted.length; i++) {
         if (uniqArray.indexOf(sorted[i]) === -1){
           uniqArray.push(sorted[i])
         }
    }
    return uniqArray;
  }
  
  function testSym(array1, array2, ){
    const cloneArray =[...array1]
      for (let i = 0; i < array1.length; i++){
            for (let j = 0; j < array2.length; j++){
                if (array1[i] === array2[j]){
                  cloneArray[i] = null
                } 
            }
    }
    return cloneArray.filter(function(item){
      return item !== null;
    });
  }
  
  console.log(symGroup([1, 2, 3, 3], [5, 2, 1, 4]))