export default function (contentBox) {
    const contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contact-wrapper');

    const contactForm = document.createElement('form');

    const legend = document.createElement('legend');
    legend.innerText = 'Contact Us';
    
    const name = document.createElement('input');
    name.setAttribute('placeholder', 'Your Name');
    
    const email = document.createElement('input');
    email.setAttribute('placeholder', 'Your Email');

    const phone = document.createElement('input');
    phone.setAttribute('placeholder', 'Your Phone Number');

    const textArea = document.createElement('textarea');
    textArea.setAttribute('placeholder', 'Your Message');

    const button = document.createElement('button');
    button.innerText = 'Submit';

    contactForm.appendChild(legend);
    contactForm.appendChild(name);
    contactForm.appendChild(email);
    contactForm.appendChild(phone);
    contactForm.appendChild(textArea);
    contactForm.appendChild(button);
    
    contactWrapper.appendChild(contactForm);

    contentBox.appendChild(contactWrapper);
}