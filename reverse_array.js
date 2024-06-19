/*
Convert number to reversed array of digits
35231 => [1,3,2,5,3]
0 => [0]
*/
// convertir número en string
// crear un array con split
// aplicar reverse
// convertir cada valor en número con map
function digitize(n) {
  console.log(n.toString().split("").reverse().map((elem) => parseInt(elem)))
  return n.toString().split("").reverse().map((elem) => parseInt(elem))
}

// otra forma
// convierto en un string, luego en una lista porque el string es inmutable
// genero la lógica del reverse con i = 0 y j por el total de elementos -1
// la variable temporal se queda con el valor actual de i 
// mientras i sea menor a j muevo los valores de i y j
function digitize2(n) {
  let number_to_array = n.toString().split("")
  let i = 0
  let j = (number_to_array.length) - 1
  while(i<j){
    let temp = parseInt(number_to_array[i])
      number_to_array[i] = parseInt(number_to_array[j])
      number_to_array[j] = temp
    i++
    j--
  }
  return number_to_array  
}
digitize2(123456)