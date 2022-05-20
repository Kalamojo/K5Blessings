let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let images = document.querySelectorAll('.content');

let index = 0;

prev.addEventListener('click', function() {
    let current = document.querySelector(".current");
    index = parseInt(current.id) - 1;
    if(index < 0) {
        index = images.length - 1;
    }
    current.classList.toggle('current');
    images[index].classList.toggle('current');
})

next.addEventListener('click', function() {
    let current = document.querySelector(".current");
    index = parseInt(current.id) + 1;
    if(index >= images.length) {
        index = 0;
    }

    current.classList.toggle('current');
    images[index].classList.toggle('current');
})



