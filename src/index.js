import showNavAndLogo from './nav.js';
import showFooter from './footer.js';
import showHome from './home.js';
import switchPage from './switch-page.js'
import './style.css';

const contentBox = document.getElementById('content');

showNavAndLogo(contentBox);
showHome(contentBox);
showFooter(contentBox);

const menuBtns = document.querySelectorAll('.menu-btn');

menuBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.innerText == 'Home') {
            switchPage('home', contentBox);
        }
        else if (e.target.innerText == 'Menu') {
            switchPage('menu', contentBox);
        }
        else {
            switchPage('contact', contentBox);
        };
    });
});