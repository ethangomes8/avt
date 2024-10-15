/*
function changeImage(imageSrc) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageSrc;
}
    */

// Function to change the main image
function changeImage(imageId, imagePath) {
    document.getElementById(imageId).src = imagePath;
}

// Function to toggle zoom on the clicked image
function toggleZoom(imageId) {
    const imageElement = document.getElementById(imageId);
    if (imageElement.classList.contains('zoomed')) {
        imageElement.classList.remove('zoomed'); // Remove zoom
    } else {
        imageElement.classList.add('zoomed'); // Apply zoom
    }
}
