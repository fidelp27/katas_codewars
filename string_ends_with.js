/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/
// forma 1
function solution(str, ending){
  return str.endsWith(ending)
}

// forma 2
function solution2(str, ending){
  let str_length = str.length
  let ending_length = ending.length
  let str_ending = str.substring(str_length - ending_length)
  return str_ending === ending
}

// forma 3
function solution3(str, ending){
  str_length = str.length
  ending_length = ending.length
  str_ending = str.slice(str_length - ending_length)
  return str_ending === ending
}