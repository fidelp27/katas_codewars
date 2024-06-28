/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  if(string.length == 0) return {}
  let objeto = {}
  string.split("").forEach((letter)=>{
    if(!objeto[letter]){
     objeto[letter] = 1
    }else{
      objeto[letter] += 1
    }
  })
  return objeto
}

console.log(count("aba"))