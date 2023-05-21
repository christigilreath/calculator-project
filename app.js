const buttons = document.querySelectorAll('button');
const upperDisplay = document.querySelector('#upper-screen');
const lowerDisplay = document.querySelector('#lower-screen');
const numberButtons = document.querySelectorAll("#num");
const operateButtons = document.querySelectorAll('#op');
const equalButton = document.querySelector("#equal");
const clearButton = document.querySelector('#clear');

lowerDisplay.innerHTML = "0";
let numberClicked;
let display = '';
let timesClicked = 0;
let equalValue;




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
    } else if (operator === "x") {
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
   if (timesClicked === 0) {
      numberClicked = e.target.innerHTML;
      display +=`${numberClicked}`
      lowerDisplay.innerHTML = display;
      upperDisplay.innerHTML = display;
   } else {
    display = '';
    numberClicked = e.target.innerHTML;
    display += `${numberClicked}`;
    lowerDisplay.innerHTML = display;
    upperDisplay.innerHTML += display;
   }
    
    
}   
   
 numberButtons.forEach(number => number.addEventListener('click', numberClick))   
    
//creater a function for clicking operate buttons that takes the display values and stores the operator clicked

function operateClick(e) {
    if (timesClicked === 0) {
      operator = e.target.innerHTML;
      num1 = parseInt(display);
      lowerDisplay.innerHTML = '';
      upperDisplay.innerHTML += operator;
      display = '';
      timesClicked++;
    } else {
        num2 = parseInt(display);
        lowerDisplay.innerHTML = "";
        equalValue = operate(num1, num2, operator);
        lowerDisplay.innerHTML = equalValue;
        num1 = equalValue;
        operator = e.target.innerHTML;
        display = equalValue;
        upperDisplay.innerHTML += operator;
    }
    
    
    
}
operateButtons.forEach(button => button.addEventListener('click', operateClick))


//create a function for clicking equal button that
function equalClick() {
    num2 = parseInt(display);
    equalValue = operate(num1, num2, operator);
    lowerDisplay.innerHTML = equalValue;
    upperDisplay.innerHTML = `${upperDisplay.innerHTML} = ${equalValue}`;
    
    
}

equalButton.addEventListener('click', equalClick)



// create a function for clear button
function clearClick () {
num1 = '';
num2 = '';
operator = '';
lowerDisplay.innerHTML ="0";
display = '';
timesClicked = 0;
equalValue = '';
upperDisplay.innerHTML = '';
}


clearButton.addEventListener('click', clearClick)
