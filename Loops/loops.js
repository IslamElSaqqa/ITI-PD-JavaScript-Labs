// we need to ask the user to enter how many headings he wants to display

var headingNo = ParseInt(prompt("Enter No of heading from 1 to 6:"));
document.write("<hr>");
if (headingNo > 0 && headingNo < 7) {
    for (let i = 1; i <= headingNo; i++) {
        document.write("<h" + (i) + "> heading " + (i) + "</h" + i + ">");
    }
}
else
{
    alert("Wrong input!");
}