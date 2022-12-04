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

const operators = document.querySelectorAll(".operator"); 
const operands = document.querySelectorAll(".operand");
let display = document.getElementById("display-number");
let activeBtn = false;
let a="", b="";
let sign = "";

operands.forEach(operand => {
    operand.addEventListener("click", () =>{
        
        a+=operand.value;
        console.log(operand);
        console.log(a);
        display.innerText = a;
    })
})
operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
            if(!operator.classList.contains('selected')){
                operator.classList.add('selected');
                activeBtn = e.target;
                operators.forEach(operator =>{
                    if(operator!==activeBtn){
                        operator.classList.remove('selected');
                    } 
                })
            }
            
    })
})
