let btns = document.querySelector('#navigation').querySelectorAll(':scope > li > a');
let sections = document.querySelectorAll(".s1, .s2");


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
    let topPos = document.body.scrollTop;
    // Alternatively, you can use document.body.scrollTop || document.documentElement.scrollTop;

    for(let i = 0; i < sections.length; i++) {
        if(sections[i].getBoundingClientRect().top <= topPos + 250 && sections[i].getBoundingClientRect().top + sections[i].getBoundingClientRect().height > topPos) {
            document.querySelector(".active").className = document.querySelector(".active").className.replace(" active", "");
            btns[i].className += " active";
        } else {
            btns[i].className.replace(" active", "");
        }
    };
    // scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
    // clientHeight is the inner height of the element, including padding

}

