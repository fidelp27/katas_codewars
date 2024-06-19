/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.


*/

//forma uno
function countPositivesSumNegatives(input) {
  if(!input || input.length ===0) return []
  let arr_positives = input.filter((elem)=> elem > 0)
  let arr_negatives = input.filter((elem)=> elem < 0)
  let negatives = arr_negatives && arr_negatives.length > 0 ? arr_negatives.reduce((a,b)=> a+ b) : []
  let positives = arr_positives.length
  return [positives , negatives]

}

// forma 2
function countPositivesSumNegatives2(input){
  if(!input || input.length === 0 ) return []
  let positives_count = 0
  let negatives_sum = 0
  input.forEach((elem)=>{
    if(elem>0){
      positives_count++
    }else{
      negatives_sum += elem
    }
      
  })
  return [positives_count, negatives_sum]
}

