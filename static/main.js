let preloader = document.getElementById('preloader');

window.addEventListener('load', function() {
    preloader.style.opacity = 0;
    preloader.style.zIndex = -1;
})

let button = document.getElementById('my_btn')

button.addEventListener('click', () => {
    preloader.style.opacity = .7;
    preloader.style.zIndex = 99999;
})