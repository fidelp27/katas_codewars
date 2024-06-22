// sort O(n^2)
const arr = [6, 8, 19, 48, 9, 90, 1 , 20, 38, 22]
// let times = 0;
// for(let i =0; i < arr.length; i++){
//   let temp = arr[i]
//   for(let j = i + 1; j < arr.length; j++){
//     if(arr[j]< temp){
//       temp = arr[j]
//       arr[j] = arr[i]
//       arr[i] = temp
//       times++
//     }
//   }
// }

// sort recursivo
let counter = 0
while(counter < arr.length){
  let temp = arr[counter]
  for(let j = counter + 1; j < arr.length; j++){
    if(arr[j]< temp){
      temp = arr[j]
      arr[j] = arr[counter]
      arr[counter] = temp
    }
  }
  counter++
}
console.log(arr)