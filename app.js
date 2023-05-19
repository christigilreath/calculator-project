const buttons = document.querySelectorAll('button');
const upperScreen = document.querySelector('#upper-screen');
const lowerScreen = document.querySelector('#lower-screen');

let buttonClicked;

let total = 0;
lowerScreen.innerHTML = total;

//create a function when a number is clicked it displays on the lower screen
function handleClick (e) {
    buttonClicked = e.target.innerHTML;
    console.log(typeof buttonClicked)
    
    
    updateLowerScreen();
    

};

buttons.forEach(button => button.addEventListener('click', handleClick))



function updateLowerScreen() {
    if (buttonClicked === "Clear") {
        lowerScreen.innerHTML = "0";
    } else if (buttonClicked === "Delete"){
        lowerScreen.innerHTML = '';

    }else {
        lowerScreen.innerHTML = buttonClicked;
    }
}
