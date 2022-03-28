import showNavAndLogo from './nav.js';
import showFooter from './footer.js';
import showHome from './home.js';
import showMenu from './menu.js';
import showContact from './contact.js';
import switchPage from './switch-page.js'
import './style.css';

const contentBox = document.getElementById('content');

showNavAndLogo(contentBox);
showHome(contentBox);
showFooter(contentBox);

const menuBtns = document.querySelectorAll('.menu-btn');

menuBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.innerText == 'home') {
            console.log(e.target.innerText);
            switchPage(showHome, 'home');
        }
        else if (e.target.innerText == 'menu') {
            switchPage('menu');
        }
        else {
            switchPage('contact');
        };
    });
});

/* figure out flow of modules */