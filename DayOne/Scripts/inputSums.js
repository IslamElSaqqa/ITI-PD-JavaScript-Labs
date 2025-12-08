let sum = 0;
let number;

do {
    let userInput = prompt("Enter a number (Enter 0 to stop or when the sum exceeds 100):");

    if (userInput === null) {
        alert("Input cancelled. Exiting.");
        break;
    }

    number = parseFloat(userInput);

    // This is an additional check 
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        continue; 
    }

    sum += number;

    if (sum > 100) {
        alert("Sum exceeded 100.");
        break;
    }

} while (number !== 0);

alert("Total sum of the entered values: " + sum);
