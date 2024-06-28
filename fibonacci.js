
function fibonacci(f,s,q){
  let arr = [f,s]
  while( arr.length < q ){
    let next_number = arr[arr.length - 1] + arr[arr.length - 2]
    arr.push(next_number)
  }
  console.log(arr)
}
fibonacci(2,5,5)

// forma 2
let fibo=(a,b,q)=>{
  let arr = []
  for(let i = 0; i<q; i++){
    if(i == 0){
      arr.push(a)
    }else if(i == 1){
      arr.push(b)
    }else(i > 1)
    {
      arr.push(arr[i-1] + arr[i-2])
    }
    
  }
  return arr
}
console.log(fibo(2,4,6))