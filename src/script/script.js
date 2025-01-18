// Mapeando elementos

const navMenu = document.querySelector('.nav-menu')
const navList = document.querySelector('.nav-list')

const showBenefits = document.querySelectorAll('.card__benefits-btn')
const benefits = document.querySelectorAll('.card__benefits')

const carousel = document.querySelector('.carousel')
const slideBtns = document.querySelectorAll('#right, #left')
const cardWidth = carousel.querySelector('.card').offsetWidth;

// Mobile menu

const displayNavList = () => {
    navList.classList.contains('nav-list__active') ? navList.classList.remove('nav-list__active') : navList.classList.add('nav-list__active')
}
const removeNavList = () => {
    if(navList.classList.contains('nav-list__active')) navList.classList.remove('nav-list__active')
}
navMenu.addEventListener('click', displayNavList)
navList.addEventListener('mouseleave', removeNavList);
document.body.addEventListener('click', removeNavList);
navMenu.addEventListener('click', (event) => {event.stopPropagation()});
navList.addEventListener('click', (event) => {event.stopPropagation()});

// Services cards

const displayBenefits0 = () => {
    benefits[0].classList.toggle('card__benefits__active')
    benefits[0].classList.contains('card__benefits__active') ? showBenefits[0].innerHTML = 'Ocultar benefícios <i class="fa-solid fa-angle-up"></i>' : showBenefits[0].innerHTML = 'Mostrar benefícios <i class="fa-solid fa-angle-down"></i>'
}
const displayBenefits1 = () => {
    benefits[1].classList.toggle('card__benefits__active')
    benefits[1].classList.contains('card__benefits__active') ? showBenefits[1].innerHTML = 'Ocultar benefícios <i class="fa-solid fa-angle-up"></i>' : showBenefits[1].innerHTML = 'Mostrar benefícios <i class="fa-solid fa-angle-down"></i>'
}
const displayBenefits2 = () => {
    benefits[2].classList.toggle('card__benefits__active')
    benefits[2].classList.contains('card__benefits__active') ? showBenefits[2].innerHTML = 'Ocultar benefícios <i class="fa-solid fa-angle-up"></i>' : showBenefits[2].innerHTML = 'Mostrar benefícios <i class="fa-solid fa-angle-down"></i>'
}
showBenefits[0].addEventListener('click', displayBenefits0)
showBenefits[1].addEventListener('click', displayBenefits1)
showBenefits[2].addEventListener('click', displayBenefits2)

// Plans slide

let isDragging = false, startX, startScrollLeft;

const dragStart = (coord) => {
    isDragging = true;
    carousel.classList.add('dragging')

    startX = coord.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (coord) => {
    if (!isDragging) return;

    carousel.scrollLeft = startScrollLeft - (coord.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove('dragging')
}
carousel.onmousedown = dragStart
carousel.onmousemove = dragging
document.onmouseup = dragStop

slideBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        carousel.scrollLeft += btn.id === 'left' ? -cardWidth : cardWidth
    })
});