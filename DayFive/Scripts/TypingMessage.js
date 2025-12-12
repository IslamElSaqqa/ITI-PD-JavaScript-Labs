function showTyping() {
    let msg = "Hello, This is Islam! ";
    let i = 0;

    let win = window.open("", "", "width=400,height=200");
    win.document.write("<pre id='msg'></pre>");

    let interval = setInterval(() => {
        if (win.closed) return;

        win.document.getElementById("msg").textContent += msg[i];
        i++;

        if (i === msg.length) {
            clearInterval(interval);

            setTimeout(() => {
                win.close();
            }, 2000);
        }
    }, 80);
}
