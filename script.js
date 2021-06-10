//change navbar icon

//elements
const navIcon=document.getElementById('nav-icon');
const menu = document.getElementById('menu')
const intro = document.querySelector('.intro')
const introP = document.getElementById('par')
const introH1 = document.getElementById('h1')
const cards = document.querySelectorAll('.card')

//add event listner
navIcon.addEventListener('click',toggleFunc);
navIcon.addEventListener('click',toggleMenu);


function toggleFunc(e) {
    e.target.classList.toggle('fa-times')
}

function toggleMenu() {
    menu.classList.toggle('menu-show')
}

window.addEventListener('load',opacityFunc);
function opacityFunc() {
    intro.style.opacity=1;
    introP.style.transform='translateX(0)';
    introH1.style.transform='translateX(0)';

}

window.addEventListener('load',showCards);

function showCards(){
    cards.forEach(element=>{
        element.style.opacity='100';
        console.log(element)
    })
}