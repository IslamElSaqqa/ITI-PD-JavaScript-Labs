let message = prompt("Enter The message here to find the largest one!");
let largestWord = checkLargestWord(message);

function checkLargestWord(message) {
    // Split the message
    const words = message.split(' ');

    var largestWord = '';
    var largestWordLength = 0;

    for (var i = 0; i < words.length; i++) {    
        // Remove any non-alphabetic characters
        var word = words[i].replace(/[^a-zA-Z]/g, '');

        // Check if this word is the largest
        if (word.length > largestWordLength) {
            largestWord = word;
            largestWordLength = word.length;
        }
    }

    return largestWord;
}

alert('Largest word: ' + largestWord);

