import './assets/scss/style.scss';
import { tns } from "tiny-slider";

const burgerBtn = document.querySelector('.burger-btn');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const blackout = document.querySelector('.fogging');

burgerBtn.addEventListener('click', function () {
    if (burgerBtn.classList.contains('active')) {
        burgerBtn.classList.remove('active');
        navMenu.classList.remove('open-nav');
        body.classList.remove('hidden');
        blackout.classList.remove('active-fogging');
    } else {
        burgerBtn.classList.add('active');
        navMenu.classList.add('open-nav');
        body.classList.add('hidden');
        blackout.classList.add('active-fogging');
    }
});

tns({
    container: '.slider',
    items: 1,
    slideBy: 'page',
    controlsContainer: "#customize-controls",
    mouseDrag: true,
    swipeAngle: false,
    speed: 400,
    responsive: {
        640: {
        },
        700: {
        },
        1400: {

        }
    }
});