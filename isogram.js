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
