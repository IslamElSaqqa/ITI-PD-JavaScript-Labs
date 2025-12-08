var Name = prompt("Enter your name: ");
const nameRegex = /^[A-Z][a-z]+$/;
var flag = false;

while (!flag) {
  if (!nameRegex.test(Name) || typeof Name !== "string") {
    alert("Enter your name correctly!");
    Name = prompt("Enter your name: ");
  } else {
    flag = true;
  }
}

var phoneNum = prompt("Enter your phone: ");
flag = false;
const phoneRegex= /^\d{8}$/;

while (!flag) {
  if (phoneRegex.test(phoneNum)) {
    alert("Enter your phone number correctly (8 digits)!");
    phoneNum = prompt("Enter your phone: ");
  } else {
    flag = true;
  }
}

var mobileNum = prompt("Enter your mobile Number: (11 numbers) only");
const mobileRegex = /^01(0|1|2|5)[0-9]{8}$/
flag = false;

while (!flag) {
  if (!mobileRegex.test(mobileNum) || mobileNum.length !== 11) {
    alert("Enter your Mobile Number correctly!");
    mobileNum = prompt("Enter your mobile Number: (11 numbers) only");
  } else {
    flag = true;
  }
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var email = prompt("Enter your email: (abc@gmail.com)");
flag = false;

while (!flag) {
  if (!emailRegex.test(email) || typeof email !== "string") {
    alert("Enter your email correctly!");
    email = prompt("Enter your email: (abc@gmail.com)");
  } else {
    flag = true;
  }
}

// user color choice: 
let color = prompt("Choose a color for display: red, green, or blue").toLowerCase();

while (color !== "red" && color !== "green" && color !== "blue") {
  alert("Please choose only: red, green, or blue");
  color = prompt("Choose a color for display: red, green, or blue").toLowerCase();
}

// Get today's date
var today = new Date().toLocaleDateString();


document.write(`<h2 style="color:${color}">Welcome! Today's date is ${today}</h2>`);

document.write(`<p style="color:${color}"><b>Name: </b>${Name}</p>`);
document.write(`<p style="color:${color}"><b>Phone number: </b>${phoneNum}</p>`);
document.write(`<p style="color:${color}"><b>Mobile number: </b>${mobileNum}</p>`);
document.write(`<p style="color:${color}"><b>Email: </b>${email}</p>`);
