/*
TO DO
*/

import githubIcon from './github.png';
import showNavAndLogo from './nav.js';
import showFooter from './footer.js';
import showHome from './home.js';
import switchPage from './switch-page.js'
import './style.css';

const indexModule = (() => {
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
    //github repo
    const addGitHub = (() => {
        const github = document.createElement('a');
        github.setAttribute('href', 'https://github.com/natdlc/restaurant-page');
        github.setAttribute('target', '_blank');
        document.body.appendChild(github);
        const githubImg = new Image();
        githubImg.src = githubIcon;
        github.appendChild(githubImg);
    })();

})();