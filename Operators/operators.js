// Falsy Keywords
var x = !10;
console.log(x); // false;

x = '';
console.log(Boolean(x)); // False

let exp = (10 + 112) && false && 1;
console.log("exp = " + exp);


// Concatenation and comma Operators
var firstname = "Mohamed",
lastname = "Ali",
fullname = firstname + " " + lastname;
console.log(fullname);

// Ternary Operator
var color = "Black",
    newColor = color == "Black" ? "red" : "yellow";
console.log(newColor);

// Avoid Coercions 5 == '5' => true but how?
// js internally takes 5 and turns it into string and then apply the comparison
// strict equality to avoid this ===
console.log(5 == '5'); // true
console.log(5 === '5'); // false
