// Reversing a string using Recursion
function reverseString(str) {
    if (str === "") {   // base case
        return "";
    } else {
        return reverseString(str.substring(1)) + str.charAt(0);
    }
}

// Test the function
const string = "Hello, World!";
const reversedString = reverseString(string);
console.log(reversedString);


/*
    More concise Version
        const reverseString = str =>
        str === "" ? "" : reverseString(str.slice(1)) + str[0];
*/