/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

//Forma 1
function positiveSum(arr) {
  return arr.filter((elem) => elem > 0).reduce((acc,b)=> acc + b, 0);
}

// forma 2
function positiveSum2(arr){
  return arr.reduce((acc, b) => acc + (b > 0 ? b : 0), 0)
}

// forma 3
function positiveSum3(arr){
  let total = 0
  arr.length > 0 && arr.forEach((elem)=> elem > 0 ? total += elem : total)
  return total
}