function changeImage(imageSrc) {
    let img = document.querySelector(".imageDisplay");
    img.src = imageSrc;
}

document.querySelector(".buttonA").addEventListener("click", function () {
    changeImage("images/pixel-black.png");
});

document.querySelector(".buttonB").addEventListener("click", function () {
    changeImage("images/pixel-white.png");
});