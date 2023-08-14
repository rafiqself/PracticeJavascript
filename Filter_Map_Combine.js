const users = [
    {firstName:"Mohammed", lastName:"Rafiq", age:20},
    {firstName:"Nusrat", lastName:"Nehal", age:30},
    {firstName:"Mohammed", lastName:"Iqbal", age:24},
    {firstName:"Mohammed", lastName:"Salman", age:20}
]

const output = users.filter(user => user.age < 24).map((x) =>{ return x.lastName})
console.log(output)