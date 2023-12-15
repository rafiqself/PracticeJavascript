const arr = [11,2,33,44,2]
const arr1 = [3,221,33,22,10]

var newArr = [...arr,...arr1]
// console.log(newArr)

newArr = new Set(newArr)

console.log(newArr)