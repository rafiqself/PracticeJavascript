function outerVariable(outer){
    var url = "https://simple.rafta.com"
    return function innerVariable(inner){
        console.log("Outer Variable", outer);
        console.log("Inner Variable", inner);
    }
}

const newVariable = outerVariable("outer");
newVariable("inner");