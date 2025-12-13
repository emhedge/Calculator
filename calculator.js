// basic calculations
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


// button functions
const numZero = document.querySelector("#0");
const numOne = document.querySelector("#1");
const numTwo = document.querySelector("#2");
const numThree = document.querySelector("#3");
const numFour = document.querySelector("#4");
const numFive = document.querySelector("#5");
const numSix = document.querySelector("#6");
const numSeven = document.querySelector("#7");
const numEight = document.querySelector("#8");
const numNine = document.querySelector("#9");

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

let num1 = 0;
let num2 = 0;
let operator = "";

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

console.log(operate(10, "/", 2))
