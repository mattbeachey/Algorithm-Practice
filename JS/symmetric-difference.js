



//Symmetric Difference
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
/*
Create a function that takes two or more arrays and returns an array of the symmetric 
difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term 
"symmetric difference" of two sets is the set of elements which are in either of the two sets, 
but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say 
on a set D = {2, 3}), you should get the set with elements which are in either of the two the 
sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain 
only unique values (no duplicates).
*/

function sym(...args) {
    const bigArray = []
    for (const key of args){
      if (typeof(key) === "object"){
        bigArray.push(key)
      }
    }
    return recur(bigArray)
  }
  
  function recur(bigArray) {
    const nextArray = []
    for (let i = 0; i < bigArray.length; i++) {
      if (i % 2 === 0) {
        nextArray.push(symGroup(bigArray[i], bigArray[i + 1]))
      }
    }
  
    if (nextArray.length > 1){
      return recur(nextArray)
    } else if (nextArray.length === 1){
      return nextArray[0];
    }
  
  }
  
  function symGroup(array1, array2) {
  
    if (array2 === null && array1 !== null || array2 === undefined && array1 !== undefined){
      return array1;
    } else if (array2 === null && array1 === null || array2 === undefined && array1 === undefined){
      return;
    } else if (array2 !== null && array1 !== null || array2 !== undefined && array1 !== undefined){
      const first = testSym(array1, array2)
      const second = testSym(array2, array1)
      const sorted = first.concat(second).sort((a, b)=>{
        return a - b;
      });
      //easy way to remove dups from array(?!) longer form below
      const uniqArray = [...new Set(sorted)]
    //   const uniqArray = []
    //   for (let i = 0; i < sorted.length; i++) {
    //     if (uniqArray.indexOf(sorted[i]) === -1) {
    //       uniqArray.push(sorted[i])
    //     }
    //   }
      return uniqArray;
    }
  }
  
  function testSym(array1, array2, ) {
    const cloneArray = [...array1]
    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          cloneArray[i] = null
        }
      }
    }
    return cloneArray.filter(item => {
      return item !== null;
    });
  }

//Tests
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6, "the"], [1, 2, 3], [5, 3, 9, 8], [1], ["the", "quick", "brown", "fox"]))

console.log("Test 1 passed: ", arraysEqual(sym([1, 2, 3], [5, 2, 1, 4]), [ 3, 4, 5 ]));
console.log("Test 2 passed: ", arraysEqual(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5]));
console.log("Test 3 passed: ", arraysEqual(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5]));
console.log("Test 4 passed: ", arraysEqual(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5]));
console.log("Test 5 passed: ", arraysEqual(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]));
console.log("Test 6 passed: ", arraysEqual(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7]));
console.log("Test 7 passed: ", arraysEqual(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]), [1, 2, 4, 5, 6, 7, 8, 9]));


//compare arrays method for testing: https://stackoverflow.com/questions/6229197/how-to-know-if-two-arrays-have-the-same-values
function arraysEqual(_arr1, _arr2) {
    if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length)
      return false;

    var arr1 = _arr1.concat().sort();
    var arr2 = _arr2.concat().sort();

    for (var i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i])
            return false;
    }
    return true;

}

