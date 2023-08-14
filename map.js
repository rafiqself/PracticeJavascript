const arr = [5,4,19,20,6,7]
const users = [
    {firstName:"Mohammed", lastName:"Rafiq", age:20},
    {firstName:"Nusrat", lastName:"Nehal", age:30},
    {firstName:"Mohammed", lastName:"Iqbal", age:24}
]

// Higher order functions
const output = users.map(function(user){
    user = user.firstName + " " + user.lastName;
    return user;
})


console.log(output)

