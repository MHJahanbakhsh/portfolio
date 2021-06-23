
//   button ripple effect
const buttons = document.querySelectorAll('.ripple')

buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.clientX
        const y = e.clientY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        const xInside = x - buttonLeft-45
        const yInside = y - buttonTop-300

        const circle = document.createElement('span')
        circle.classList.add('circle')
        // circle.style.top = yInside + 'px'
        // circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500);
        //redirect to project.html
        
        location.replace("projects.html")
          
        
    })
})



  


//change navbar icon

//elements
const navIcon=document.getElementById('nav-icon');
const menu = document.getElementById('menu')
const intro = document.querySelector('.intro')
const introP = document.getElementById('par')
const introH1 = document.getElementById('h1')
const cards = document.querySelectorAll('.card')
const closePanel = document.querySelectorAll('.close-panel')
const panel = document.getElementsByClassName('panel')
const ReadMoreBtn = document.getElementsByClassName('projectbtn')
const header = document.querySelectorAll('header')[0]
const main = document.querySelectorAll('main')[0]
const footer = document.querySelectorAll('footer')[0]
const svgImage = document.getElementById('svg-image')



//add event listner
navIcon.addEventListener('click',toggleIcon);
navIcon.addEventListener('click',toggleMenu);
// navIcon.addEventListener('click',closeFunc);
svgImage.addEventListener('click',redirect)


function toggleIcon(e) {
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
    })
}

for (let i = 0; i < panel.length+1; i++) {

    
//open project detail 1
ReadMoreBtn[i].addEventListener('click',function() {
    panel[i].classList.remove('panel-hide');
    main.classList.add('blur');
    footer.classList.add('blur');
    panel[i].style.zIndex = 5; 
});
    //close project panel1
closePanel[i].addEventListener('click',function () {
    panel[i].classList.add('panel-hide')
    panel[i].style.zIndex = -1;
    main.classList.remove('blur');
    footer.classList.remove('blur');
});


}






//redirect to index.html
function redirect() {
    location.replace("index.html")
  }

