// With Clousers 
for(var i=0;i<5;i++){
    (function(x){
        setTimeout(() => {
            console.log(x)
        },x*1000)
    })(i);
}


// Without Clousures
 for(var i=0;i<5;i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000)
 }


    
