window.onload = function () {

    // 1. Get the original image
    const img = document.getElementById("hip2");

    // 2. Move original image to the LEFT
    img.style.position = "absolute";
    img.style.left = "50px";
    img.style.top = "200px";

    // 3. Clone the image and move it to the RIGHT
    const img2 = img.cloneNode(true);
    img2.style.position = "absolute";
    img2.style.left = "700px";   // right side
    img2.style.top = "150px";
    document.body.appendChild(img2);

    // 4. Move the original menu under the left image
    const nav = document.getElementById("navigation");
    nav.style.position = "absolute";
    nav.style.left = "120px";
    nav.style.top = "380px";

    // 5. Clone the menu for the right side
    const nav2 = nav.cloneNode(true);
    nav2.style.position = "absolute";
    nav2.style.left = "770px";   // under right image
    nav2.style.top = "350px";
    document.body.appendChild(nav2);
};
