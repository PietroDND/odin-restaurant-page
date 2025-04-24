import espressoImg from './imgs/espresso.png';
import macchiatoImg from './imgs/macchiato.png';
import cappuccinoImg from './imgs/cappuccino.png';
import ginsengImg from './imgs/ginseng.png';

export const loadMenu = () => {
    const items = [
        {
            id: 'espresso',
            name: 'Espresso',
            description: 'A strong and bold coffee made by forcing hot water through finely-ground coffee.',
            price: '1.50€',
            image: espressoImg
        },
        {
            id: 'macchiato',
            name: 'Macchiato',
            description: 'A strong and bold coffee made by forcing hot water through finely-ground coffee.',
            price: '1.80€',
            image: macchiatoImg
        },
        {
            id: 'cappuccino',
            name: 'Cappuccino',
            description: 'A strong and bold coffee made by forcing hot water through finely-ground coffee.',
            price: '2.50€',
            image: cappuccinoImg
        },
        {
            id: 'ginseng',
            name: 'Ginseng',
            description: 'A strong and bold coffee made by forcing hot water through finely-ground coffee.',
            price: '3.00€',
            image: ginsengImg
        }
    ];
    
    const content = document.createElement('div');
    content.id = 'content';

    //Menu section
    const container = document.createElement('div');
    container.classList.add('menu-container');
    const leftColumn = document.createElement('div');
    leftColumn.classList.add('menu-left');
    const rightColumn = document.createElement('div');
    rightColumn.classList.add('menu-right');

    //Fill menu
    items.forEach(item => {
        const itemImg = document.createElement('img');
        itemImg.src = item.image;
        itemImg.alt = item.name;
        itemImg.classList.add('coffe-img');
        leftColumn.appendChild(itemImg);
        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');
        const itemNamePrice = document.createElement('div');
        itemNamePrice.classList.add('item-name-price');
        const itemName = document.createElement('div');
        itemName.textContent = item.name;
        const itemPrice = document.createElement('div');
        itemPrice.textContent = item.price;
        itemNamePrice.append(itemName, itemPrice);
        const itemDesc = document.createElement('p');
        itemDesc.textContent = item.description;
        itemInfo.append(itemNamePrice, itemDesc);
        rightColumn.append(itemInfo);
    });

    container.append(leftColumn, rightColumn);
    content.appendChild(container);
    return content;
};

//Espresso, cappuccino, ginseng, decaffeinato