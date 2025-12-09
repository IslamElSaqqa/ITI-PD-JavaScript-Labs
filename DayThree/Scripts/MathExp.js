// 1. Ask the user for a math expression
var expression = prompt("Enter a math expression (like 3+4*5):");

function calculate(expr) {
    // remove spaces
    expr = expr.replace(/\s+/g, "");

    // split into numbers and operators
    let numbers = expr.split(/[\+\-\*\/]/).map(Number);
    let operators = expr.split(/[0-9\.]+/).filter(op => op !== "");

    // first handle * and /
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === "*" || operators[i] === "/") {
            let result = operators[i] === "*"
                ? numbers[i] * numbers[i + 1]
                : numbers[i] / numbers[i + 1];

            // replace numbers
            numbers.splice(i, 2, result);
            operators.splice(i, 1);
            i--; 
        }
    }

    // then handle + and -
    for (let i = 0; i < operators.length; i++) {
        let result = operators[i] === "+"
            ? numbers[i] + numbers[i + 1]
            : numbers[i] - numbers[i + 1];

        numbers.splice(i, 2, result);
        operators.splice(i, 1);
        i--;
    }

    return numbers[0];
}

// 3. Calculate
var result = calculate(expression);

// 4. Show result
alert("You entered: " + expression + ", and the result is: " + result);
