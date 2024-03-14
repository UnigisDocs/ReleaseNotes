function newFunction() {
    if (document.documentElement.classList.contains('theme-dark')) {
        document.querySelector('.light-mode-icon').style.display = 'none';
        document.querySelector('.dark-mode-icon').style.display = 'inline';
    } else {
        document.querySelector('.light-mode-icon').style.display = 'inline';
        document.querySelector('.dark-mode-icon').style.display = 'none';
    }
}


