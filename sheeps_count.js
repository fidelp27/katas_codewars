/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/
// forma 1
function countSheeps(sheep) {
  return sheep.reduce((acc, sheep) => {
    return sheep ? acc + 1 : acc;
  }, 0);
}

// forma 2
function countSheeps2(sheep) {
  return sheep.reduce((acc, sheep) => sheep ? acc + 1 : acc, 0);
}
//forma 3
function countSheeps3(sheep) {
  let count = 0
  sheep.forEach((elem) => elem == true ? count++ : count)
  return count
}
