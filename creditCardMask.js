/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "########################
*/
// return masked string
//forma 1
function maskify(cc) {
  if(cc.length > 4){
    let newString = []
    for(let i = 0; i< cc.length-4;i++){
      newString.push("#")
    }
    return newString.join("") + cc.split("").splice(-4).join("")
  }
  return cc

}
//forma 2
function maskify2(cc) {
  if(cc.length >4){
    let newString = cc.split("").splice(0, cc.length - 4).map((elem)=>elem = "#")
    return newString.join("") + cc.split("").splice(-4).join("")
  }
  return cc
}


// forma 3
function maskify3(cc){
  if(cc.length>4){
    return cc.replace(/.(?=.{4})/g, "#")
  }
  return cc
}
console.log(maskify("4556364607935616"))
console.log(maskify2("4556364607935616"))
console.log(maskify3("4556364607935616"))