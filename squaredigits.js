// recibo un número
// debo convertirlo en un string para poder acceder a cada uno de sus caracteres
// recorro el string y por cada caracter lo convierto en número
// lo elevo al cuadrado 
// lo agrego a un array

function squareDigits(num){
  let num_to_string = num.toString()
  let result = []
  for (let i = 0; i <num_to_string.length; i++){    
    result.push(num_to_string[i]**2)    
  }
  console.log(result.join(""))
  return result.join("")
}
squareDigits(224)


// convierto el número en string
// creo un array con el método split
// hago un map para convertir cada valor
// uno todos los resultados con el método join
// retorno un número con el método parseInt
function squareDigits2(num){
  let array_results = num.toString().split("").map((elem) => elem**2)
  let result = parseInt(array_results.join(""))
  console.log(result)
  return result
}
squareDigits2(224)