const numb = [1,2,3,4,-5,-6,-7,8,9,0]

let accumulator = 0
let i = 0
while(i < numb.length){
if(numb[i] > 0){
  accumulator = accumulator + numb[i]
}
  i++
}
console.log(accumulator)