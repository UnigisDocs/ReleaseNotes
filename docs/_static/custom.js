// custom.js

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.wy-logo img');
    const darkLogoPath = '_static/logodark.svg';
    const lightLogoPath = '_static/logoblanco.svg';
    
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (prefersDarkMode) {
        logo.src = darkLogoPath;
    } else {
        logo.src = lightLogoPath;
    }
});
