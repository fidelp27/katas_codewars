
const count_number_in_range =(number, range)=>{
  let array = []
  let count = 0
  for(let i = 0; i < range; i++){
    if(i.toString().includes(number.toString())){
      array.push(i)
    }
  }
  array.forEach((elem)=> {
    elem.toString().split("").forEach((elem2)=>{
      if(elem2.toString().includes("6"))
      {
        count++
      }
    })
  })
  return count
}
