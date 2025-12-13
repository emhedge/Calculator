// basic calculations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// const sum = function(arr) {return arr.reduce(((acc, obj) => acc + obj), 0)}

// const power = (a, b) => a ** b;

// function factorial(a) {
// // prevent negatives
//   if (a < 0) return "ERROR";
// // work with 0 and 1
//   if (a === 0 || a === 1) return 1;
// // work with numbers > 1
//   if (a > 1) {
//     let result = 1;
//     for (let i = a; i > 1; i--) {
//     result *= i
//     } 
//   return result
//   }
// }

// init declaration of numbers and operator
let num1 = 0;
let num2 = 0;
let operator = "";

// operate function
function operate(num1, operator, num2) {
    if (operator == "+") {
        return add(num1, num2)
    } else if (operator === "-") {
        return subtract(num1, num2)
    } else if (operator === "*") {
        return multiply(num1, num2)
    } else if (operator === "/") {
        return divide(num1, num2)
    } else return "ERROR";
    
    
}

// button variables
const numZero = document.querySelector("#numZero");
const numOne = document.querySelector("#numOne");
const numTwo = document.querySelector("#numTwo");
const numThree = document.querySelector("#numThree");
const numFour = document.querySelector("#numFour");
const numFive = document.querySelector("#numFive");
const numSix = document.querySelector("#numSix");
const numSeven = document.querySelector("#numSeven");
const numEight = document.querySelector("#numEight");
const numNine = document.querySelector("#numNine");




// update display function
const display = document.querySelector("div#display");
const displayText = document.createElement('p');
displayText.textContent = "";

display.appendChild(displayText);
// function updateDisplay() {
//     displayText.textContent = 
// }

// button event handlers for various numbers/operators
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    let target = event.target;

    switch(target.id) {
        case "numZero":
            displayText.textContent = "0"
            break;
        case "numOne":
            displayText.textContent = "1"
            break;
        case "numTwo":
            displayText.textContent = "2"
            break;
        case "numThree":
            displayText.textContent = "3"
            break;
        case "numFour":
            displayText.textContent = "4"
            break;
        case "numFive":
            displayText.textContent = "5"
            break;
        case "numSix":
            displayText.textContent = "6"
            break;
        case "numSeven":
            displayText.textContent = "7"
            break;
        case "numEight":
            displayText.textContent = "8"
            break;
        case "numNine":
            displayText.textContent = "9"
            break;
    }
})






console.log(operate(10, "/", 2))
