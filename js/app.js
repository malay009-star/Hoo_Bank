var burger = document.getElementById('nav-burger');
var menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    menu.classList.toggle("is-open");
})