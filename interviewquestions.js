console.log("1"); 
setTimeout(() => { 
    console.log("2"); 
}, 2000); 
Promise.resolve().then(() => console.log("5")); 
setTimeout(() => { 
    console.log("3"); }, 0); 
console.log("4");


14352

function fun1() { 
    // let a = "test"; 
    return 
    function fun2() { 
        console.log(`result is ${a}`); 
    }; 
} 
let a = "test2"; 
const c = fun1(); 
c(); 
console.log(a);



var obj = { a: "hello world", b: 42, }; 
var b = "a"; 
obj[b]; 
obj["b"];



function doSomething() { 
    x = 33; 
    console.log(x); 
    var x; 
}



let arr = [12, 13, 8, 9, 10]
let arr1 = arr.sort(
    function(a,b){
        return a - b;
    }
)
console.log(arr1[arr1.length - 1])