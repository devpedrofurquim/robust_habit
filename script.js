const diffCards = document.getElementById('differences-cards').children;
let buttons = document.querySelectorAll('.differences__cards-item__button');

let recomendado = document.getElementById('recomendado-div');

for (let i = 0; i < diffCards.length; i++) {

        diffCards[i].addEventListener('mouseover', () => {
            buttons[i].style.backgroundColor = 'red';
            buttons[i].classList.add('hover');
        })

        diffCards[i].addEventListener('mouseout', () => {
            buttons[i].style.backgroundColor = '#222222';
            buttons[i].classList.remove('hover');
        })
}

const priceCards = document.getElementById('pricing-cards').children;
const headerCards = document.querySelectorAll('.pricing-cards-container__item-sub-header')
const btnCards = document.querySelectorAll('.pricing-cards-container__item-price-button')

console.log(btnCards)

console.log(recomendado)

for (let i = 0; i < priceCards.length; i++) {

    priceCards[1].addEventListener('mouseover', () => {
        recomendado.style.backgroundColor = 'red'
    })

    priceCards[1].addEventListener('mouseout', () => {
        recomendado.style.backgroundColor = 'black'
    })

    priceCards[i].addEventListener('mouseover', () => {
        headerCards[i].style.backgroundColor = 'red'
        btnCards[i].style.color = 'red'
        btnCards[i].style.borderColor = 'red'
    })

    priceCards[i].addEventListener('mouseout', () => {
        headerCards[i].style.backgroundColor = 'black'
        btnCards[i].style.color = 'black'
        btnCards[i].style.borderColor = 'black'
    })
}

const menuBtn = document.getElementById('mobile-menu');
const menuNav = document.querySelector('.navbar-mobile__list');
const closeMenu = document.getElementById('close-menu');
const mobileList = document.querySelector('.navbar-mobile__list').children


menuBtn.addEventListener('click', () => {
    menuNav.style.display = 'block'
    document.body.style.overflowY = 'hidden'; 
})


closeMenu.addEventListener('click', () => {
    menuNav.style.display = 'none';
    document.body.style.overflowY = 'auto';
})

for (let i = 0; i < mobileList.length; i++) {
    mobileList[i].addEventListener('click', () => {
        menuNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    })
}