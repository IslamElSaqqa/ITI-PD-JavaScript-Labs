// B.1 ASCII code + modifier key detection
document.addEventListener("keydown", function (event) {

    /* 
        ASCII code
        true if ALT pressed
        true if CTRL pressed
        true if SHIFT pressed
    */
    let ascii = event.keyCode;      
    let isAlt = event.altKey;       
    let isCtrl = event.ctrlKey;     
    let isShift = event.shiftKey;   

    let message =
        "ASCII Code: " + ascii +
        "\nAlt Pressed: " + isAlt +
        "\nCtrl Pressed: " + isCtrl +
        "\nShift Pressed: " + isShift;

    alert(message);
});

// B.2 Prevent context menu on right-click
document.addEventListener("contextmenu", function (event) {
    event.preventDefault();  
    alert("Right-click is disabled.");
});

