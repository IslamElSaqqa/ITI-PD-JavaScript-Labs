var sum = 0;
var stopLoop = false;

while (!stopLoop) {
    var userInput = prompt("Enter a number (Enter 0 to stop or when the sum exceeds 100):");

    if (userInput === null) {
        alert("Please enter a valid number.");
    } else {
        var number = parseFloat(userInput);
        
        if (isNaN(number)) {
            alert("Please enter a valid number.");
        } else {
            sum += number;
            stopLoop = number === 0 || sum > 100;
        }
    }
}

alert("Total sum of the entered values: " + sum);