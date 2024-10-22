

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,  
    speedAsDuration: true  
});

function changeImage(imageId, imagePath) {
    document.getElementById(imageId).src = imagePath;
}


function toggleZoom(imageId) {
    const imageElement = document.getElementById(imageId);
    if (imageElement.classList.contains('zoomed')) {
        imageElement.classList.remove('zoomed'); 
    } else {
        imageElement.classList.add('zoomed'); 
    }
}


