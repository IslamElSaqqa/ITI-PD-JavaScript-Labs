var message = prompt('Enter A message: ');
const considerCase = confirm("Do you want to consider the difference between letter cases?");
considerCase ?
    countOccurence(message, considerCase) : countOccurence(message.toLowerCase(), considerCase);
    
function countOccurence(message,considerCase) {     
    if (typeof (message) === 'string' && isNaN(message)) {
        var count = 0; // initial value
        var char = prompt('Enter a letter you want to count: ');
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            const letter = considerCase ? char : char.toLowerCase();
            if (typeof (letter) === 'string' && letter.length === 1) {
            
                for (let i = 0; i < message.length; i++) {
                    if (message[i] == letter) {
                        count++;
                    }
                }
                document.write(
                    "No of occurrences of the character you entered = " + count
                );
            }
}
        else {
            alert('Please enter a character');
        }
    }
    else { 
        alert('Please Enter only a message');
    }
}

