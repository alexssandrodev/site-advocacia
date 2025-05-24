import { Element } from './Element.js';
import { questions } from './questions.js';

const el = new Element();

const closeIcon = el.select('.close-icon');
const menu = el.select('.menu');
const iconMenu = el.select('.icon-menu');
const accordion = el.select('.accordion');
const header = el.select('.header-container');

function createBoxQuestion() {
  questions.forEach((questionObj, index) => {
    const boxQuestion = el.create('div', 'box-question', index);
    boxQuestion.innerHTML = `
      <h2 class='question'>
        ${questionObj.question}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-down" viewBox="0 0 16 16">
          <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
        </svg>
      </h2>
      <p class='answer'>${questionObj.answer}</p>
    `;
    accordion.appendChild(boxQuestion);
  });
}

createBoxQuestion();

function openQuestion(event) {
  const answers = el.selectAll('.answer');
  answers[event.target.parentNode.id].classList.toggle('active');
}

function activateBackgroundHeader() {
  if (window.scrollY >= 150) {
    header.classList.add('active-bg');
  } else {
    header.classList.remove('active-bg');
  }
}

function closeMenu() {
  menu.classList.remove('active');
}

function openMenu() {
  menu.classList.add('active');
}

iconMenu.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
accordion.addEventListener('click', openQuestion);
document.addEventListener('scroll', activateBackgroundHeader);

