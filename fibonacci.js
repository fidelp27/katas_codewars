
function fibonacci(f,s,q){
  let arr = [f,s]
  while( arr.length < q ){
    let next_number = arr[arr.length - 1] + arr[arr.length - 2]
    arr.push(next_number)
  }
  console.log(arr)
}
fibonacci(2,5,5)