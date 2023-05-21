const buttons = document.querySelectorAll('button');
const upperDisplay = document.querySelector('#upper-screen');
const lowerDisplay = document.querySelector('#lower-screen');
const numberButtons = document.querySelectorAll("#num");
const operateButtons = document.querySelectorAll('#op');
const equalButton = document.querySelector("#equal");
const clearButton = document.querySelector('#clear');
const decimalButton = document.querySelector('#decimal');
const deleteButton = document.querySelector("#delete");

lowerDisplay.innerHTML = "0";
let numberClicked;
let displayValue = '';
let timesClicked = 0;
let equalValue;
let numClickedTimes = 0;
let decClickedTimes = 0;
let decimalClicked;




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
    

while (numClickedTimes === 0) {
    displayValue = '';
    numClickedTimes++;
}

    
    if (timesClicked === 0) {
      numberClicked = e.target.innerHTML;
      displayValue +=`${numberClicked}`;
      lowerDisplay.innerHTML = displayValue;
      upperDisplay.innerHTML += numberClicked;
   } else {
    
    numberClicked = e.target.innerHTML;
    console.log(numberClicked);
    displayValue += `${numberClicked}`;
    
    lowerDisplay.innerHTML = displayValue;
    upperDisplay.innerHTML += numberClicked;
   }
    
    
}   
   
 numberButtons.forEach(number => number.addEventListener('click', numberClick));   
    
//creater a function for clicking operate buttons that takes the display values and stores the operator clicked

function operateClick(e) {
    
    if (timesClicked === 0) {
      operator = e.target.innerHTML;
      num1 = parseFloat(displayValue);
      lowerDisplay.innerHTML = '';
      upperDisplay.innerHTML += operator;
      displayValue = '';
      timesClicked++;
      numClickedTimes = 0;
      decClickedTimes = 0;
      
    } else {
        
        
        num2 = parseFloat(displayValue);
        console.log(num2)
        lowerDisplay.innerHTML = "";
        equalValue = operate(num1, num2, operator);
        lowerDisplay.innerHTML = equalValue;
        num1 = equalValue;
        operator = e.target.innerHTML;
        displayValue = equalValue;
        upperDisplay.innerHTML += operator;
        numClickedTimes = 0;
        decClickedTimes = 0;
    }
    
    
    
};
operateButtons.forEach(button => button.addEventListener('click', operateClick));


//create a function for clicking equal button that
function equalClick() {
    num2 = parseFloat(displayValue);
    equalValue = +(operate(num1, num2, operator)).toFixed(2);
    lowerDisplay.innerHTML = equalValue;
    upperDisplay.innerHTML = `${upperDisplay.innerHTML} = ${equalValue}`;
    numberButtons.forEach(number => number.removeEventListener('click', numberClick)); 
    operateButtons.forEach(button => button.removeEventListener('click', operateClick));
    
    
}

equalButton.addEventListener('click', equalClick);



// create a function for clear button
function clearClick () {
num1 = '';
num2 = '';
operator = '';
lowerDisplay.innerHTML ="0";
displayValue = '';
timesClicked = 0;
equalValue = '';
upperDisplay.innerHTML = '';
numClickedTimes = 0;
decClickedTimes = 0;
numberButtons.forEach(number => number.addEventListener('click', numberClick));
operateButtons.forEach(button => button.addEventListener('click', operateClick)); 
}


clearButton.addEventListener('click', clearClick);


// create a function for the decimal button
 
function decimalClick (e) {
    while (decClickedTimes === 0) {
      decimalClicked = e.target.innerHTML;
      console.log(decimalClicked);
      displayValue +=`${decimalClicked}`;
      lowerDisplay.innerHTML = displayValue;
      upperDisplay.innerHTML += decimalClicked;
      decClickedTimes++
    }
}

decimalButton.addEventListener('click', decimalClick);

// create a function for the delete button that deletes the last character entered

function deleteClick () {
    displayValue = `${displayValue}`;
    displayValue = displayValue.slice(0, -1);
    lowerDisplay.innerHTML = displayValue;
    upperDisplay.innerHTML = upperDisplay.innerHTML.slice(0, -1);
}

deleteButton.addEventListener('click', deleteClick);