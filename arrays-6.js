const numb = [1,2,3,4,5,6,7,8,9,10]

for(let i = 0; i < numb.length; i++){
  if(numb[i] % 2 === 0){
    console.log(numb[i])
  }
}

let i = 0;
while (i < numb.length){
  if(numb[i] % 2 !== 0){
    console.log(numb[i])
  }
  i++
}