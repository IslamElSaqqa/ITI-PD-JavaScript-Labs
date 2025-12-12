//^ Identify Variables for child and Movement positions
let childWindow, moveInterval;
let dir = 1;
let position = 0;


function createChild() {
    //& open  a child window
    childWindow = window.open("", "_blank", "width=300,height=150");

    document.write("<h2>Child Opened</h2>");
    moveInterval = setInterval(() => {
            if (childWindow.closed) {
            clearInterval(moveInterval);
            return;
            }
            
            pos += 10 * direction;

            if (pos >= window.screen.height - 200) direction = -1;
            if (pos <= 0) direction = 1;

            childWindow.moveTo(500, pos);
            childWindow.focus();

    },100)
}

function stopInterval() {
    clearInterval(moveInterval);
}