// here is hamburger
var burger = document.getElementById('nav-burger');
var menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    menu.classList.toggle("is-open");
})

// here is get started rotation
const element = document.getElementById('get_started');
let rotation = 0; // start with rotation of 0 degrees
setInterval(() => {
    rotation = (rotation + 1) % 20;

    element.style.transform = `rotate(${rotation}deg)`;

}, 60); // rotate every 50 milliseconds

// Tabs starting
var btn_one = document.getElementById('btn_one');
var btn_two = document.getElementById('btn_two');
var btn_three = document.getElementById('btn_three');
// For content
var content_one = document.getElementById('content_one');
var content_two = document.getElementById('content_two');
var content_three = document.getElementById('content_three');

// setInterval(() => {
btn_one.addEventListener('click', () => {
    content_one.style.display = 'block';
    content_two.style.display = 'none';
    content_three.style.display = 'none';
})
btn_two.addEventListener('click', () => {
    content_two.style.display = 'block';
    content_one.style.display = 'none';
    content_three.style.display = 'none';
})
btn_three.addEventListener('click', () => {
        content_three.style.display = 'block';
        content_one.style.display = 'none';
        content_two.style.display = 'none';
    })
    // })