import chickenImage1 from './chicken-grilled-1.png';
import beverage from './beverage.png';
export default function (contentBox) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('menu');
    contentBox.appendChild(wrapper);

    //create cards
    for (let i = 0; i < 5; i++) {
        const card = document.createElement('div');
        card.classList.add('menu-card');
        wrapper.appendChild(card);
    }

    const cards = wrapper.querySelectorAll('.menu-card');
    
    for(let i = 0; i < 4; i++) {
        const imageTitleWrapper = document.createElement('div');
        const grilledChickenImg1 = new Image();
        grilledChickenImg1.src = chickenImage1;
        const dish1Title = document.createElement('p');
        dish1Title.innerText = 'Savory Grilled Chicken';
    
        const descriptionWrapper = document.createElement('div');
        const descriptionText = document.createElement('p');
        descriptionText.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et rerum distinctio, odit illum eum doloremque?'
    
        descriptionWrapper.appendChild(descriptionText);
    
        imageTitleWrapper.appendChild(grilledChickenImg1);
        imageTitleWrapper.appendChild(dish1Title);
        
        cards[i].appendChild(imageTitleWrapper);
        cards[i].appendChild(descriptionWrapper);
    };
    

    const beverageImgWrapper = document.createElement('div');
    const beverageImg = new Image();
    beverageImg.src = beverage;

    const beverageTitle = document.createElement('p');
    beverageTitle.innerText = 'Beverages';

    beverageImgWrapper.appendChild(beverageImg);
    beverageImgWrapper.appendChild(beverageTitle);
    cards[4].appendChild(beverageImgWrapper);

    for(let i = 0; i < 6; i++) {
        const beverageItem = document.createElement('div');
        const beverageName = document.createElement('p');
        const beveragePrice = document.createElement('p');

        beverageName.innerText = 'Mango Juice';
        beveragePrice.innerText = '$3';

        beverageItem.appendChild(beverageName);
        beverageItem.appendChild(beveragePrice);

        cards[4].appendChild(beverageItem);
    }
};