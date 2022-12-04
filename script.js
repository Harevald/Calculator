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
function opposite(a){
    return -1 * a;
}
function percentage(a){
    return 1/100 * a;
}
function operate(sign, a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    if(sign==="+"){
        return add(a,b);
    }
    else if(sign==="-"){
        return subtract(a,b);
    }
    else if(sign==="*"){
        return multiply(a,b);
    }
    else if(sign==="/"){
        return divide(a,b);
    }
}
const operators = document.querySelectorAll(".operator"); 
const operands = document.querySelectorAll(".operand");
const equals = document.getElementById("equals");
const decimal = document.getElementById("decimal");
const clear = document.getElementById("clear");
const percent = document.getElementById("percent");
let display = document.getElementById("display-number");
let activeBtn = "";
let a="", b="";
let sign = "";
equals.addEventListener("click", () =>{
    if(a!=="" && b!=="" && sign !==""){
        display.innerText = operate(sign, a, b);
        a = display.innerText;
        b = "";
    }
})
clear.addEventListener("click", () =>{
    a = "";
    b = "";
    sign = "";
    display.innerText = 0;
    activeBtn.classList.remove("selected");
    activeBtn = "";
})

operands.forEach(operand => { //What happens when you click number
    operand.addEventListener("click", () =>{
        if(activeBtn === ""){ //If operator isn't selected store value of  first number and display it
            a+=operand.value;
            display.innerText = a;
            console.log(operand);
            console.log("a = " + a);
        }          
        else{
            b+=operand.value; //Once operator is selected store value of second number and display it
            display.innerText = b;
            console.log(operand);
            console.log( "b = " + b);
        }
        if(b!==""){ //Once you press the number after selecting operator, unselect operator
            activeBtn.classList.remove('selected');
        }
    })
})

operators.forEach(operator => { //What happens when you click operator
    operator.addEventListener("click", (e) => {
            if(!operator.classList.contains('selected') && a!==""){ //When you press operator after storing any number, select it
                operator.classList.add('selected');
                sign = operator.innerText;     
                activeBtn = e.target;
                operators.forEach(operator =>{ //Remove selection of other operators to prevent clicking two or more at the same time
                    if(operator!==activeBtn){
                        operator.classList.remove('selected');
                    } 
                })
                if(a!=="" && b!==""){ //When you press operator after pressing two numbers, display outcome of operation and make it a first number of next equation
                    display.innerText = operate(sign, a, b);
                    a = display.innerText;
                    b = "";
                }
            }  
    })
})
