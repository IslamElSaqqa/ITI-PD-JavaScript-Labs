// VALIDATE NAME
function validateName() {
    const name = document.getElementById("fullname");
    const msg = document.getElementById("nameError");

    if (!name.value.trim()) {
        msg.style.display = "inline";
        msg.textContent = "Name cannot be empty!";
        name.style.backgroundColor = "gray";
        name.focus();
        name.select();
        return false;
    } else if (name.value.trim().length <= 3) {
        msg.style.display = "inline";
        msg.textContent = "Name must be more than 3 characters!";
        name.style.backgroundColor = "gray";
        name.focus();
        name.select();
        return false;
    } else {
        msg.style.display = "none";
        name.style.backgroundColor = "white";
        return true;
    }
}

// VALIDATE PASSWORD MATCH
function validatePasswords() {
    const p1 = document.getElementById("password");
    const p2 = document.getElementById("repeatPassword");
    const msg = document.getElementById("passError");

    if (p1.value === "" || p2.value === "" || p1.value !== p2.value) {
        msg.style.display = "inline";
        p2.style.backgroundColor = "gray";
        return false;
    } else {
        msg.style.display = "none";
        p2.style.backgroundColor = "white";
        return true;
    }
}

function setupEvents() {
    const name = document.getElementById("fullname");
    const p2 = document.getElementById("repeatPassword");

    name.onfocus = () => name.style.border = "solid 1px blue";
    name.onblur = () => {
        name.style.border = "";
        validateName();
    };

    p2.onblur = validatePasswords;

    const form = document.getElementById("regForm");
    form.onsubmit = function (event) {
        event.preventDefault(); // Prevent default form submission

        const validName = validateName();
        const validPass = validatePasswords();

        if (validName && validPass) {
            const fullname = document.getElementById("fullname").value;
            window.location = "Thanks.html?name=" + encodeURIComponent(fullname);
        }

        return false;
    };
}

window.onload = setupEvents;
