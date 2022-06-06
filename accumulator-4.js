const names = ['ислам','адам','Ахмад','райбек','адлан','руслан','анзор','мохьмад','расул','ризван']

const accumulator = []

for(let i = 0; i < names.length; i++){
  if(names[i][0].toUpperCase() === 'А') {
accumulator.push(names[i])
  }
} console.log(accumulator)