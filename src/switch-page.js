import showHome from './home.js';
import showMenu from './menu.js';
import showContact from './contact.js';
import showFooter from './footer.js';
export default function (targetPage, contentBox) {
    document.querySelectorAll('#content > div').forEach(div => {
        div.remove();
    });
    if (targetPage == 'home') showHome(contentBox);
    else if (targetPage == 'menu') showMenu(contentBox);
    else showContact(contentBox);
    showFooter(contentBox);
};