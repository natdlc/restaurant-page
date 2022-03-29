export default function (contentBox) {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    const logo = document.createElement('div');
    const logoUpper = document.createElement('p');
    const logoLower = document.createElement('p');

    home.innerText = 'Home';
    menu.innerText = 'Menu';
    contact.innerText = 'Contact';

    home.classList.add('menu-btn');
    menu.classList.add('menu-btn');
    contact.classList.add('menu-btn');

    logo.classList.add('logo');    
    logoUpper.innerText = 'Grill';
    logoLower.innerText = 'Wheel';

    contentBox.appendChild(nav);

    nav.appendChild(logo);
    logo.appendChild(logoUpper);
    logo.appendChild(logoLower);

    nav.appendChild(ul);
    ul.appendChild(home);
    ul.appendChild(menu);
    ul.appendChild(contact);
};