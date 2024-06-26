/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
function pigIt(str) {
  return str.split(" ").map((elem) => {
    // Verifica si el elemento es una palabra (alfabética)
    if (elem.match(/^[a-zA-Z]+$/)) {
      // Mueve la primera letra al final y añade "ay"
      return elem.substring(1) + elem[0] + "ay";
    } else {
      // Si el elemento no es una palabra (es un signo de puntuación), no lo modifica
      return elem;
    }
  }).join(" ")
}

console.log(pigIt('Pig latin is cool !'))

// forma 2
function pigIt2(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
/*

El Patrón de Reemplazo "\$2\$1ay\$3"
\$2: Se refiere al segundo grupo de captura, que contiene todos los caracteres de la palabra excepto el primero.
\$1: Se refiere al primer grupo de captura, que contiene el primer carácter de la palabra.
ay: Se añade literalmente después del primer carácter movido al final.
\$3: Se refiere al tercer grupo de captura, que contiene el espacio en blanco o el final de la cadena.
*/