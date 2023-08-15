// Freeze the data

const arr = [1,2,3,4];
Object.freeze(arr);
// arr.push(5)

let user = {
    firstName: "Mohammed"
}
Object.seal(user);
Object.isSealed(user)
user.lastName = "Rafiq"

user.age = 30;
// console.log(user.firstName)
console.log(user)

