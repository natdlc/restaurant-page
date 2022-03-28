import showHome from './home.js';
import showFooter from './footer.js';
export default function (callback, clickedPage) {
    for (let i = 0; i < 2; i++) {
        document.querySelector('#content > div:nth-child(2)').remove();
    }
    console.log(callback);
    showFooter(document.querySelector('#content'));
};