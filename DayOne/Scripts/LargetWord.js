var message = prompt("Enter the message here to find the largest word!");
var largestWord = checkLargestWord(message);
alert('Largest word: ' + largestWord);

function checkLargestWord(message) {
    const words = message.split(' ');

    var largestWord = '';
    var largestWordLength = 0;

    for (var i = 0; i < words.length; i++) {
        // Remove non-letters
        var word = words[i].replace(/[^a-zA-Z]/g, '');

        if (word.length > largestWordLength) {
            largestWord = word;
            largestWordLength = word.length;
        }
    }

    return largestWord;
}
