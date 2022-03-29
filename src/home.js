import showMenu from './menu.js';
import switchPage from './switch-page.js';
export default function (contentBox) {
    const heroContainer = document.createElement('div');
    const heroTextWrapper = document.createElement('div');
    const heroTextUpper = document.createElement('p');
    const heroTextLower = document.createElement('p');
    const cta = document.createElement('button');

    heroTextUpper.innerText = 'Satisfy Your Cravings';
    heroTextLower.innerText = 'With The Best Grilled Recipes In The City';
    cta.innerText = 'Menu';

    cta.addEventListener('click', () => switchPage('menu',contentBox));

    heroTextWrapper.classList.add('hero-text-wrapper');
    heroContainer.classList.add('hero-container');

    contentBox.appendChild(heroContainer);
    heroContainer.appendChild(heroTextWrapper);
    heroTextWrapper.appendChild(heroTextUpper);
    heroTextWrapper.appendChild(heroTextLower);
    heroTextWrapper.appendChild(cta);
}