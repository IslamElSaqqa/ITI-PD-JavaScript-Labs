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

// Fill the array with 5 elements from the user
for (let i = 0; i < 5; i++) {
    numbers.push(getNumber(`Enter number ${i + 1}: `));
}

// Sort the array in ascending using spreading operator instead of looping on each element
let ascending = [...numbers].sort((a, b) => a - b);
// and descending order
let descending = [...numbers].sort((a, b) => b - a);


document.write( `
    <p><strong>Original Array:</strong> ${numbers.join(', ')}</p>
    <p><strong>Ascending Order:</strong> ${ascending.join(', ')}</p>
    <p><strong>Descending Order:</strong> ${descending.join(', ')}</p>
`);