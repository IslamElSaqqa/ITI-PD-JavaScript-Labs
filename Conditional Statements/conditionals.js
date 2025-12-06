// If else & Switch statements
/*
Example, we need the user to choose a color from a list of colors
and Based on his choice, we display the color for him.
*/

var color;
var favColor = prompt("Choose a color from the Given list: \n1.RED\n2.BLUE\n3.YELLOW.\n4.BLACK");
let flag = 1;
switch (favColor)
{
    case "1":
        case "red":
            color = "RED";
            break;
    
    
    case "2":
        case "blue":
            color = "BLUE";
            break;
    
    
    case "3":
        case "yellow":
        color = "YELLOW";
        break;
    
    
    case "4":
        case "black":
        color = "BLACK";
        break;
    
    default:
        flag = 0;
        alert("Your choice is not from the given list!");
        break;
}
if (flag)
document.write("Your favourite Color: "+color);