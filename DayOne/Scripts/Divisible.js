/*
Create a function that accepts three numerical values x, y and z.
The function should check if x is divisible by y only or z only or both y and z.
Example:
If user entered values are 10, 2, and 5 then the output will be: 10 is divisible by both 2 and 5.
If user entered values are 10, 2, and 4 then the output will be: 10 is divisible by 2 only.
If user entered values are 10, 5, and 4 then the output will be: 10 is divisible by 5 only.


*/

function isDivisible(x, y, z) {
    let divY = (x % y === 0); // strict equality
    let divZ = (x % z === 0);

    if (divY && divZ) {
    document.write(`${x} is divisible by both ${y} and ${z}.`);
    } else if (divY) {
    document.write(`${x} is divisible by ${y} only.`);
    } else if (divZ) {
    document.write(`${x} is divisible by ${z} only.`);
    } else {
    document.write(`${x} is not divisible by either ${y} or ${z}.`);
    }
}

let x = +prompt("Enter the value of x");
let y = +prompt("Enter the value of y");
let z = +prompt("Enter the value of z");

isDivisible(x, y, z);  
