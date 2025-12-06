// String creation using literal
var mystr = "Islam"; 

// using Constructor
var str = new String("Mohamed");

// Using Object 
var strr = String("Abraham");

var word = "This is my new tutorial.";
console.log(typeof mystr); // string
console.log(typeof str);   // Object
console.log(typeof strr);  // string

console.log(strr.length);
console.log(mystr.charAt(0));
console.log(mystr.indexOf("s"));
console.log(mystr.substring(1, 4));

console.log(word.split(" ")); // return an array of each word
console.log(word.split("")); // return an array of each character



