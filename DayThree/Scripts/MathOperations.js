// Function to get a number from the user
function getNumber(promptText) {
    let input = prompt(promptText);
    let number = parseFloat(input);
    while (isNaN(number)) {
        alert("Invalid input. Please enter a number.");
        input = prompt(promptText);
        number = parseFloat(input);
    }
    return number;
}

// Initialize the array
let numbers = [];

// Fill the array with 3 elements from the user
numbers.push(getNumber("Enter the first number:"));
numbers.push(getNumber("Enter the second number:"));
numbers.push(getNumber("Enter the third number:"));

// Destructure the array
let [num1, num2, num3] = numbers;

// Perform mathematical operations
let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;

// Division handling
let divisionResult;
if (num2 === 0 || num3 === 0) {
    divisionResult = "undefined (division by zero)";
} else {
    divisionResult = num1 / num2 / num3;
}

// Display the results
document.write(`
    <p>Sum of the 3 values: ${sum}</p>
    <p>Multiplication of the 3 values: ${product}</p>
    <p>Division of the 3 values: ${num1}/${num2}/${num3} = ${divisionResult}</p>
`);
