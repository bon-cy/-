const code = ['pythone','c','c++','c#','java','PHP','GNU','bc','Euphoria','Limbo','Lua'] 
const accumulator = []

let i = 0
while(i < code.length){
if(code[i].length > 3) {
 accumulator.push(code[i])
}
  i++
}

console.log(accumulator)