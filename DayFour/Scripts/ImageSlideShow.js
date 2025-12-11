var next = document.getElementById('next');
next.onclick = nextImage;

var slider = document.getElementById('slider');
slider.onclick = imageSlider;

var freeze = document.getElementById('stop');
freeze.onclick = stopSlider;

var previous = document.getElementById('prev');
previous.onclick = getPreviousImage;

let currentImageIndex = 0;

// ARRAY OF OBJECTS (Associative Array)
const images = [
    { src: "./images/SlideShow/1.jpg", desc: "Beautiful sunrise over the mountains" },
    { src: "./images/SlideShow/2.jpg", desc: "Calm beach with crystal blue water" },
    { src: "./images/SlideShow/3.jpg", desc: "Green forest pathway with tall trees" },
    { src: "./images/SlideShow/4.jpg", desc: "City skyline at night with glowing lights" },
    { src: "./images/SlideShow/5.jpg", desc: "Golden desert dunes during sunset" },
    { src: "./images/SlideShow/6.jpg", desc: "Snowy mountain peaks under cloudy sky" }
];

function updateSlider() {
    const current = images[currentImageIndex];
    document.getElementById("move").src = current.src;
    document.getElementById("desc").textContent = current.desc;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateSlider();
}

var Interval;
function imageSlider() {
    Interval = setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateSlider();
    }, 1000);
}

function stopSlider() {
    clearInterval(Interval);
}

function getPreviousImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = images.length - 1;
    }
    updateSlider();
}

updateSlider();
