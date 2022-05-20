let btns = document.querySelector('#navigation').querySelectorAll(':scope > li > a');
let sections = document.querySelectorAll(".s1, .s2");
let check = document.querySelector('#check');
let logo = document.querySelector('.logo');
let headings = document.querySelectorAll('.heading');


// Select active link
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.querySelectorAll(".active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
};


window.addEventListener("scroll", function() {
    getProgress();
})
function getProgress() {					
    let topPos = window.pageYOffset;
    // Alternatively, you can use document.body.scrollTop || document.documentElement.scrollTop;

    for(let i = 0; i < sections.length; i++) {
        let currentPos = sections[i].getBoundingClientRect().top;
        let j = i - 1;
        if(j < 0)
            j = 0;

        if(currentPos <= 200) {
            document.querySelector(".active").className = document.querySelector(".active").className.replace(" active", "");
            btns[i].className += " active";
        }
        if(currentPos <= 600) {
            document.querySelector(".head").classList.toggle('head');
            headings[j].classList.toggle('head');
        }
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            document.querySelector(".active").className = document.querySelector(".active").className.replace(" active", "");
            btns[4].className += " active";
            document.querySelector(".head").classList.toggle('head');
            headings[3].classList.toggle('head');
        }        
    };
    // scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
    // clientHeight is the inner height of the element, including padding

}

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => check.checked = false);
}

logo.addEventListener('click', () => check.checked = false);


