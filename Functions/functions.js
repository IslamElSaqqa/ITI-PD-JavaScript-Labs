/* 
    Built in Functions
    1) isNaN()
    2) isFinite()
    3) ParseInt()
    4) ParseFloat()
    5) decodeURI()
    6) encodeURI()
    7) decodeURIComponent()
    8) encodeURIComponent()
*/

let num1 = parseInt(prompt("Enter num 1: "));
let num2 = parseInt(prompt("Enter num 2: "));

// using arrow function
const add = (n1=0, n2=0) => n1 + n2;

// using normal function prototype.
function addThreeNums(n1=0, n2=0, n3=0)
{
    return n1 + n2 + n3;
}

const result = add(num1, num2);
document.write("Result=  " + result);

// Function Hoisting
// to solve this we can define the function using the function keyword
console.log(subtract(21, 20));
const subtract = (num1, num2) => num1 - num2;
