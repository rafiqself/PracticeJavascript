const arr = [5,4,19,20,6,7]

// Higher order functions
const output = arr.reduce(function(accumulator, current){
    accumulator = accumulator + current;
    return accumulator;
},0)

console.log(output)

