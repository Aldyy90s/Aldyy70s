const menuNavbar = document.querySelector('.menu');


const hamburger= document.querySelector('.hamburger');
hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('is-active');
    menuNavbar.classList.toggle('menu-active');
})
