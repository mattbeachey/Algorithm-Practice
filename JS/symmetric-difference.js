//Symmetric Difference
// https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
//TODO: has to be able to take more than two arguments: shit.

//add all params into an array
//loop thru array - group pairs together to run thru test: 0 and 1, 2 and 3, etc.
//if one of a pair equals null, bypass the test and just return the other array
//if both equal null, just return;
//will need recursion


function sym(a, b, c, d, e, f, g, h) {
    a = a || null;
    b = b || null;
    c = c || null;
    d = d || null;
    e = e || null;
    f = f || null;
    g = g || null;
    h = h || null;
  
    const bigArray = []
    bigArray.push(a, b, c, d, e, f, g, h)
  
    return recur(bigArray)
  }
  
  function recur(bigArray) {
    const nextArray = []
    for (let i = 0; i < bigArray.length; i++) {
      if (i % 2 === 0) {
        nextArray.push(symGroup(bigArray[i], bigArray[i + 1]))
      }
    }
  
    const noUnd = nextArray.filter(function (item) {
      return item !== undefined;
    });
  
    if (noUnd.length > 1){
      return recur(noUnd)
    } else if (noUnd.length === 1){
      return noUnd[0];
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
      const sorted = first.concat(second).sort(function (a, b) {
        return a - b;
      });
      const uniqArray = []
      for (let i = 0; i < sorted.length; i++) {
        if (uniqArray.indexOf(sorted[i]) === -1) {
          uniqArray.push(sorted[i])
        }
      }
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
    return cloneArray.filter(function (item) {
      return item !== null;
    });
  }
  
  console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))