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
let num1 = "";
let num2 = "";
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
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const quotient = document.querySelector("#quotient");
const product = document.querySelector("#product");


// update display function
const display = document.querySelector("div#display");
const displayText = document.createElement('p');
displayText.textContent = "";

// variables for num1, num2, and operator displayText; 
// when a button is selected, have a switch/if condition to determine if it's num1 or num2
// append the number to display as displayText


display.appendChild(displayText);
// function updateDisplay() {
//     displayText.textContent = 
// }

// button event handlers for various numbers/operators
const buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (event) => {
    let target = event.target;
    let digit = target.textContent;
    

    // number logic
    if (target.className == "number") {
        // find digit via target.textContent (the text on btn)
        // if operator is empty, append to num1; else to num2
        if (operator == "") {
            num1 += digit;
        } else {
            num2 += digit;
        }
        
    } 
    if (target.className == "operator") {
        operator = target.textContent
    }
    
    displayText.textContent = num1 + operator + num2


    }
    
    // ${operator} ${num2}
)






console.log(operate(10, "/", 2))
