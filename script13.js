const img = document.getElementById('movingImage');
let topPosition = img.offsetTop;
let leftPosition = img.offsetLeft;

document.addEventListener('keydown', function(event) {
    const key = event.keyCode;

    switch(key) {
        case 37: // left arrow
            leftPosition -= 5;
            break;
        case 38: // up arrow
            topPosition -= 5;
            break;
        case 39: // right arrow
            leftPosition += 5;
            break;
        case 40: // down arrow
            topPosition += 5;
            break;
    }

    img.style.top = topPosition + 'px';
    img.style.left = leftPosition + 'px';
});
