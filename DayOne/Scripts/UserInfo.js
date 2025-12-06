var Name = prompt("Enter your name: ");
// Tracker
var flag = false;

while (!flag) {
  if (typeof Name !== "string") {
    alert("Enter your name correctly!");
    Name = prompt("Enter your name: ");
  } else {
    flag = true;
  }
}
flag = false;

// Prompt for birth year and validate it's a number,
//  it's 4 digits, and less than 2010
var bYear = +prompt("Enter your birth year: ");

while (!flag) {
  if (isNaN(bYear) || bYear.toString().length !== 4 || bYear >= 2010) {
    alert("Enter your birth year correctly! (It should be a number and less than 2010)");
    bYear = +prompt("Enter your birth year: ");
  } else {
    flag = true;
  }
}

//get the age from the current year using the date constructor
var currentYear = new Date().getFullYear();
var age = currentYear - bYear;

//Showing all data (Name, Birth Year, and Age) on the page
document.write(`<p><b><u>Name: </u></b>${Name}</p>`);
document.write(`<p><b><u>Birth Year: </u></b>${bYear}</p>`);
document.write(`<p><b><u>Age:</u></b>${age}</p>`);