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
    name.onblur = () => validateName();
    p2.onblur = validatePasswords;

    const form = document.getElementById("regForm");
    form.onsubmit = function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const validName = validateName();
        const validPass = validatePasswords();

        if (validName && validPass) {
            // Store data in cookies
            document.cookie = "fullname=" + encodeURIComponent(document.getElementById("fullname").value);
            document.cookie = "password=" + encodeURIComponent(document.getElementById("password").value);
            
            // If validation is successful, submit the form
            alert("Form Submitted Successfully");
            form.submit(); // Actually submit the form if validation is successful
        } else {
            // Show error message
            alert("Please correct the validation errors first.");
        }
    };
}

window.onload = setupEvents;
