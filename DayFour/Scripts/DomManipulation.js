/* 
1.Use HTML Dom, to do the following:
    a. Create image node (using document.createElement()).
    b. Set it source image (using setAttribute()).
    c. Append it to a div on the page (Try appendChild() and insertBefore(), what’s the difference)?	
    d. After appending the image, alert the number of child nodes to the div (Use element.childNodes.length), what are the count of div child nodes? And Why?
    e. Remove the added image (using removeChild()).
*/
function manipulateDOM()
{
     // a. Create image node
    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    // b. Set its source using setAttribute()
    img1.setAttribute("src", "https://res.cloudinary.com/dr9yx1tod/image/upload/v1754521042/user_profile/profile-image-1754520974222.jpg");
    img1.setAttribute("alt", "image");


    img2.setAttribute("src", "https://res.cloudinary.com/dr9yx1tod/image/upload/v1750440448/Sessions_uploads/image-1750440443995.png");
    img2.setAttribute("alt", "image");
    // c. Append it to a div
    var div = document.getElementById("container");

    // Try appendChild()
    div.appendChild(img1)
    div.appendChild(img2);;

    // d. After appending → alert number of child nodes
    alert("childNodes length = " + div.childNodes.length);

    // e. Remove the second Image
    div.removeChild(img2);
}

function useInsertBefore() {
    var img = document.createElement("img");
    img.src = "https://res.cloudinary.com/dr9yx1tod/image/upload/v1749685108/user_profile/profile-image-1749685053531.jpg";
    img.alt = "Inserted Image";

    var div = document.getElementById("container");

    // Insert image BEFORE the first child (the <p>)
    div.insertBefore(img, div.firstChild);

    alert("childNodes length = " + div.childNodes.length);

    // div.removeChild(img);
}
