const fs = require('fs')
const bytes = "Hola mundo cruel"
const path = "fs/text.txt"
let texto = "";
fs.readFile(path, (err, data) =>{
  if(err) return "Ha ocurrido el error " + err
  console.log(data.toString())
  texto = data

  let newTexto = texto + "\n Hola mundo bueno"
  fs.writeFile(path, newTexto, (err) =>{
    if(err) return "Ha ocurrido el error " + err
    console.log("File created")
  })
})




