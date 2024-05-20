const hamburgerBtn = document.querySelector('.js-hamburger-btn');
const nav = document.querySelector(".js-nav");
const menuItems = document.querySelectorAll('.js-menu-item');

hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle("nav-active");
    hamburgerBtn.classList.toggle("active-hamburger");
});

