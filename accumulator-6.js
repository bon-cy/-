const numb = [1,2,3,4,5,6,7,8,9,10]
const accumulatorOdd = []

for(let i = 0; i < numb.length; i++){
    if(numb[i] % 2 !== 0){
        accumulatorOdd.push(numb[i])
    }
  }