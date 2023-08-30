const rotatingImage = document.getElementById('rotating-image');
let rotationAngle = 0;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Adjust the rotation angle based on the scroll amount
    rotationAngle = scrollY * 0.5; // You can adjust the rotation speed here

    // Apply the rotation transform to the image
    rotatingImage.style.transform = `rotate(${rotationAngle}deg)`;
});
