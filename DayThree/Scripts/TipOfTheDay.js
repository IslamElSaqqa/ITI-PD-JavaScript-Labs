/*
Create array that contain some tips about JavaScript
(Array of 10 strings, each string is tip about JS),
and show random tip for the user each time he opens the page "Tip of the day". 
*/

// 10 JavaScript tips from chatGPT to be honest
const tips = [
    "Always use === instead of == for strict comparison.",
    "Use const and let instead of var.",
    "Name your variables clearly and meaningfully.",
    "Use template literals instead of string concatenation.",
    "Understand the difference between null and undefined.",
    "Use array methods like map(), filter(), and reduce() effectively.",
    "Learn how promises and async/await work.",
    "Avoid global variables as much as possible.",
    "Use console.log() for debugging.",
    "Break your code into small reusable functions."
];

// get random index
const randomIndex = Math.floor(Math.random() * tips.length);

// Write the tip to the page
document.write("<h2>Tip of the Day</h2>");
document.write("<p>" + tips[randomIndex] + "</p>");