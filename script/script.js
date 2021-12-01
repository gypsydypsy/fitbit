'use strict';

// -- DOM ELEMENTS

const burgerBtn = document.getElementById('burger-btn');
const menuMob = document.getElementById('menu-mob');

// -- FONCTIONS

function onClickToggleMenu()
{
    menuMob.classList.toggle('show-hide');
    burgerBtn.classList.toggle('fa-times');
}


// -- EVENTS

burgerBtn.addEventListener('click', onClickToggleMenu);