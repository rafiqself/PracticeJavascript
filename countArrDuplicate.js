const arr = [7,5,1,7,8,5,11,2,6,2,11,7]

for(var key in arr){
    count = {};
    count = (count[key] || 0) + 1;
}

console.log(count)