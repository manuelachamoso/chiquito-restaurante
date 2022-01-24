let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

menu.onscroll = () => {
    window.classList.remove('fa-times');
    window.classList.remove('active');
}
