import { Element } from './Element.js';

const el = new Element();

const closeIcon = el.select('.close-icon');
const menu = el.select('.menu');
const iconMenu = el.select('.icon-menu');
console.log(iconMenu);

function closeMenu() {
  menu.classList.remove('active');
}

function openMenu() {
  menu.classList.add('active');
}

iconMenu.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);

