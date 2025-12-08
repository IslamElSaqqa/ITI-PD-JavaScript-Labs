var message = prompt("Enter a word to check whether it is Palindrom or not:");
var considerCase = confirm("Do you want to consider the case sensitivity?");

// Check if the entered string is a palindrome
var checkPalindrom = isPalindrome(message, considerCase);

// Display the result
if (checkPalindrom) {
        alert(message+' is palindrom')
} else {
    alert(message + ' is not palindrom');

}

function isPalindrome(message, considerCase) {
    const messageAfterConsider = considerCase ? message : message.toLowerCase();
    // Base case that my recursive condition stops at !
    if (messageAfterConsider.length <= 1) {
        return true;
    }

    // Check if the first and last characters are the same like MOOM
    if (messageAfterConsider[0] === messageAfterConsider[messageAfterConsider.length - 1]) {
        // take the remaining characters
        return isPalindrome(messageAfterConsider.slice(1, messageAfterConsider.length - 1), considerCase);
    } else {
        return false;
    }
}