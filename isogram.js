/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/
// convertir todos los caracteres a minúsuclas
// crear un array con split
// crear un nuevo array sin repeticiones con [...newSet]
// comparar el tamaño del arrayh_ original con el nuevo
function isIsogram(str){
  let array = str.toLowerCase().split("");
  let unique = [...new Set(array)]
  if(array.length === unique.length) return true
  return false
}

//solucion 2
function isIsogram2(str){
  let array = str.toLowerCase().split("");
  for(let i= 0; i < array.length; i++){
    for(let j=0; j < array.length; j++){
      if(i !== j && array[i] === array[j]){
        console.log("hay concidencia")
        return false
      }
    }
  }
  console.log("No hay coincidencias")
  return true
  
}
isIsogram2("loveo")