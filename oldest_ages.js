/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):
*/

//forma 1

function twoOldestAges(ages){
  let l = ages.length
  let sorted_ages = ages.sort((a, b)=> a-b,0 )
  return [sorted_ages[l-2], sorted_ages[l-1]]
}

//forma 2
function twoOldestAges2(ages){
  return ages.sort((a,b)=> a-b).slice(-2)
}

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]))
console.log(twoOldestAges2([1, 5, 87, 45, 8, 8]))