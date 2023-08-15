// Call method is used to invoke the function directly by passing variable
// Apply is same as Call but only difference is secong arrgument is array
// Bind is same as Call but it creates the copy of the function, later we can invoke

const user = {
    firstName : "Mohammed",
    lastName:"Rafiq"
}

const printDetails = function(country){
    console.log("My full name is : "+ this.firstName +" "+ this.lastName+","+ country);
}

printDetails.call(user, "India");

printDetails.apply(user, ["India"])


var bindVal = printDetails.bind(user, "India")
console.log(bindVal);
bindVal();