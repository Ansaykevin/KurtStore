document.addEventListener('DOMContentLoaded', function () {
    
    const menuIcon = document.querySelector('.header-rigth');
    const menuSection = document.querySelector('.section-jscript');

    if (menuIcon && menuSection) {
        menuIcon.addEventListener('click', function () {

            menuSection.classList.toggle('active');
         
        });
    
    }
});

document.addEventListener('DOMContentLoaded', function () {
    
    const menuIcon = document.querySelector('.aside-flex');
    const menuSection = document.querySelector('.menu-flex');

    if (menuIcon && menuSection) {
        menuIcon.addEventListener('click', function () {

            menuSection.classList.toggle('active');
         
        });
    
    }
});