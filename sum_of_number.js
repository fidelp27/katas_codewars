/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)
(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
Your function should only return a number, not the explanation about how you get that number.
*/

const { get } = require("http");

//forma 1
function getSum(a, b){
  let init;
  let range;
  if(b<a ){
    init = b;
    range = a;
  } else{
    init = a;
    range = b;
  }
  let total = 0
   for(let i=init; i<=range; i++)
     {
       total += i
     }
  return total;
}
//forma 2 -> Progresión aritmética
function getSum2(a, b){
  let min = Math.min(a,b)
  let max = Math.max(a,b)
  return (max - min + 1)*(min + max) / 2
}
