var slides = document.getElementsByClassName('slide');
var j = 0;
var active = 0;
var startPosition = 0;
var arrBtns = [];

arrBtns.push(document.getElementById('one'), document.getElementById('two'), document.getElementById('three'));

function clearActive() {
    for (var i = 0; i < arrBtns.length; i++) {
        arrBtns[i].classList.remove("active");
    }
}

function setActiveSlide() {
    for (var i = 0; i < arrBtns.length; i++) {
        if (arrBtns[i].classList.contains("active")) {
            active = i;
        }
    }
}

function nextSlide() {
    if (active < 2) {
        active++;
    } else {
        active = 0;
    }
    clearActive();
    arrBtns[active].classList.add("active");
    showSlide();
}

function showSlide() {
    switch (active) {
        case 0:
            startPosition = 0;
            break;
        case 1:
            startPosition = -100;
            break;
        case 2:
            startPosition = -200;
            break;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.left = startPosition + "%";
        startPosition += 100;
    }
}

function init() {

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.left = j + "%";
        j += 100;
    }

    for (var i = 0; i < arrBtns.length; i++) {
        arrBtns[i].onclick = function () {
            clearActive();
            this.classList.add("active");
            setActiveSlide();
            showSlide();
        }
    }
}
init();
setInterval(nextSlide, 6000);
