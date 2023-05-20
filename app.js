const buttons = document.querySelectorAll('button');
const upperScreen = document.querySelector('#upper-screen');
const lowerDisplay = document.querySelector('#lower-screen');
const numberButtons = document.querySelectorAll("#num");
const operateButtons = document.querySelectorAll('#op');
const equalButton = document.querySelector("#equal");
const clearButton = document.querySelector('#clear');


let numberClicked;
let display = '';

let total = 0;


//create functions for add, subtract, multiply, divide

function add(a, b){
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function operate(num1, num2, operator) {
    
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply(num1, num2)
    } else if (operator === "/") {
        return divide(num1, num2)
    }
}


//create 3 variables (first number) (operator) (second number)
let num1;
let operator;
let num2;

//create a function for the clicking number buttons
function numberClick (e) {
   numberClicked = e.target.innerHTML;
    display +=`${numberClicked}`
    lowerDisplay.innerHTML = display;
    
    
}   
   
 numberButtons.forEach(number => number.addEventListener('click', numberClick))   
    
//creater a function for clicking operate buttons that takes the display values and stores the operator clicked

function operateClick(e) {
    operator = e.target.innerHTML;
    num1 = parseInt(display);
    lowerDisplay.innerHTML = '';
    display = '';
    
    
    
}
operateButtons.forEach(button => button.addEventListener('click', operateClick))


//create a function for clicking equal button that
function equalClick() {
    num2 = parseInt(display);
    let equalValue = operate(num1, num2, operator);
    lowerDisplay.innerHTML = equalValue;
    
    
}

equalButton.addEventListener('click', equalClick)



// create a function for clear button
function clearClick () {
num1 = '';
num2 = '';
operator = '';
lowerDisplay.innerHTML ="0";
display = '';
}


clearButton.addEventListener('click', clearClick)
