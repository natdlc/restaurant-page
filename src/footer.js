export default function (contentBox) {
    const footer = document.createElement('div');
    const tel = document.createElement('p');
    const email = document.createElement('p');
    const address = document.createElement('p');

    footer.classList.add('footer');

    tel.innerText = 'Order now! @ 123-123-1234';
    email.innerText = 'test@grillwheeltest.com';
    address.innerText = '1234 Test Drive, Test City, CA 12345 USA';

    contentBox.appendChild(footer);
    footer.appendChild(tel);
    footer.appendChild(email);
    footer.appendChild(address);
};