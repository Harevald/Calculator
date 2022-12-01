function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0)
        return "ERROR";
    else
        return a/b;
}
function operate(key, a, b){
    if(key==="+"){
        return add(a,b);
    }
    else if(key==="-"){
        return subtract(a,b);
    }
    else if(key==="*"){
        return multiply(a,b);
    }
    else if(key==="/"){
        return divide(a,b);
    }
}
let a = 7, b = -2;
console.log(add(a,b));
console.log(subtract(a,b));
console.log(multiply(a,b));
console.log(divide(a,b));

console.log(operate("+", a,b));
console.log(operate("-", a,b));
console.log(operate("*", a,b));
console.log(operate("/", a,b));