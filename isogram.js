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
// comparar el tamaño del array original con el nuevo
function isIsogram(str){
  let array = str.toLowerCase().split("");
  let unique = [...new Set(array)]
  if(array.length === unique.length) return true
  return false
}
