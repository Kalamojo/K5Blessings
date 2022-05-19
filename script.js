let btns = document.querySelector('#navigation').querySelectorAll(':scope > li > a');
let sections = document.querySelectorAll(".s1, .s2");
let check = document.querySelector('#check');


// Select active link
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        let current = document.querySelectorAll(".active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
};


document.addEventListener("scroll", function() {
    getProgress();
})
function getProgress() {					
    let topPos = window.pageYOffset;
    let preHeight = 0;
    // Alternatively, you can use document.body.scrollTop || document.documentElement.scrollTop;

    for(let i = 0; i < sections.length; i++) {
        let currentPos = sections[i].getBoundingClientRect().top;
        if(currentPos <= 200) {
            document.querySelector(".active").className = document.querySelector(".active").className.replace(" active", "");
            btns[i].className += " active";
        }
        if(window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            document.querySelector(".active").className = document.querySelector(".active").className.replace(" active", "");
            btns[4].className += " active";
        }        
    };
    // scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
    // clientHeight is the inner height of the element, including padding

}

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        check.checked = false;
    })
}
