
let theme = localStorage.getItem('theme');
let switcher = document.querySelector('#swiss');

if(theme == null) {
    setTheme('light');
    switcher.checked = false;
}
else {
    setTheme(theme);
}


switcher.addEventListener('change', function() {
    let mode = ''
    if(!switcher.checked) {
        mode = 'light'
    }
    else {
        mode = 'dark'
    }
    console.log("Option clicked:", mode);
    setTheme(mode);
})


function setTheme(mode) {
    if(mode == 'dark') {
        document.querySelector('#theme-style').href = 'dark.css';
        switcher.checked = true;
    }
    else {
        document.querySelector('#theme-style').href = 'style.css';
        switcher.checked = false;
    }
    
    localStorage.setItem('theme', mode);
}



