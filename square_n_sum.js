/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 

*/
#forma 1
function squareSum(numbers){
  return numbers.reduce((acc, num)=> acc + (num**2),0)
}

//forma 2
function squareSum2(numbers){
  let sum = 0
  numbers.forEach((elem)=> sum += elem**2)
  return sum
}

//forma 3
function squareSum3(numbers){
  let sum = 0
  for(let i =0; i<numbers.length; i++){
    sum += numbers[i]**2
  }
  return sum
}