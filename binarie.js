const getBinary=(number)=>{
  const binary = number.toString(2)
  console.log(binary)
  return binary
}

const getBinary2=(number)=>{
  let binario = [(number % 2).toString()]
  while(number > 1){    
    number = Math.floor(number / 2)
    binario.push((number%2).toString())
  }
  console.log(binario.reverse().join(""))
}
//getBinary(2)
getBinary2(2)