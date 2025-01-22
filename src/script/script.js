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

// Services cards benefits button

const toggleBenefits = (index) => {
  benefits[index].classList.toggle('card__benefits__active');
  showBenefits[index].innerHTML = benefits[index].classList.contains('card__benefits__active') ? 'Ocultar benefícios <i class="fa-solid fa-angle-up"></i>' : 'Mostrar benefícios <i class="fa-solid fa-angle-down"></i>';
};
showBenefits.forEach((button, index) => button.addEventListener('click', () => toggleBenefits(index)));
// Diretamente passar toggleBenefits(index) não funciona, pois executa a função imediatamente com cada index passado no forEach(). A arrow function () => toggleBenefits(index) cria uma função intermediária que será chamada apenas no momento do clique. Isso assegura que o evento de clique seja associado corretamente ao índice específico de cada botão.


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