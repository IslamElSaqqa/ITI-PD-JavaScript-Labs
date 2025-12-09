// Taking inputs
function getNumber(promptText) {
    let input = prompt(promptText);
    let number = parseFloat(input);
    while (isNaN(number)) {
        alert("Invalid input. Please enter a valid number.");
        input = prompt(promptText);
        number = parseFloat(input);
    }
    return number;
}

function getArea(r) {
    return Math.PI * Math.pow(r, 2);
}

function getSquareRoot(number) {
    return Math.sqrt(number);
}

function getCosine(degreeAngle) {
    // Convert degrees to radians
    const radianAngle = degreeAngle * (Math.PI / 180); 
    return Math.cos(radianAngle);
}

const radius = getNumber("Enter the radius of the circle:");
const area = getArea(radius);

const number = getNumber("Enter a number to calculate its square root:");
const squareRoot = getSquareRoot(number);

const angle = getNumber("Enter an angle (in degrees) to calculate its cosine value:");
const cosine = getCosine(angle);

alert(`Circle Area: The area of a circle with radius ${radius} is ${area.toFixed(2)}.`);
alert(`Square Root: The square root of ${number} is ${squareRoot.toFixed(2)}.`);
alert(`Cosine Value: The cosine of ${angle} degrees is ${cosine.toFixed(2)}.`);
