const users = [
    {firstName:"Mohammed", lastName:"Rafiq", age:20},
    {firstName:"Nusrat", lastName:"Nehal", age:30},
    {firstName:"Mohammed", lastName:"Iqbal", age:24},
    {firstName:"Mohammed", lastName:"Salman", age:20}
]

// Higher order functions
const output = users.reduce(function(acc, current){
    if(acc[current.age]){
        acc[current.age] = ++acc[current.age]
    }
    else{
        acc[current.age] = 1;
    }
    return acc;
},{})


console.log(output)

