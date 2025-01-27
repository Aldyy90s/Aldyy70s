const menuNavbar = document.querySelector('.menu-navbar');


const hamburger= document.querySelector('.hamburger');
hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('is-active');
    menuNavbar.classList.toggle('menu-active');
})
