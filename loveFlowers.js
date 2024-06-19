/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// comprobar si el número de pétalos de cada flor es par
// comprobar las posibles condiciones 1 par 2 impar o 1 impar 2 par
function lovefunc(flower1, flower2){
  let flower1_isOdd;
  let flower2_isOdd;
  if(flower1 % 2 == 0){
    flower1_isOdd = true;
  }
  if(flower2 % 2 == 0){
    flower2_isOdd = true;
  }
  if((flower1_isOdd && !flower2_isOdd) || (!flower1_isOdd && flower2_isOdd)) return true
  return false


}
// otra solución 
// comprobar que no sean iguales las operaciones % 2
function lovefunc2(flower1, flower2){
  console.log(flower1 % 2 != flower2 % 2)
  return flower1 % 2 != flower2 % 2
}
