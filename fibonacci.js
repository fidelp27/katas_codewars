
function fibonacci(q){
  let arr = [0,1]
  while( arr.length < q ){
    let next_number = arr[arr.length - 1] + arr[arr.length - 2]
    arr.push(next_number)
  }
  console.log(arr)
}
fibonacci(5)