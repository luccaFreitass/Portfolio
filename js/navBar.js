window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header');
    var scrolled = window.scrollY > 0;
  
    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menuList = document.querySelector('.list_header');

    menuIcon.addEventListener('click', function() {
        menuList.classList.toggle('active');
    });
});