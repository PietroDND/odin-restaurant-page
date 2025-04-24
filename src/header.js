import logoSrc from './imgs/logo-2.png'

export const loadHeader = () => {
    const header = document.createElement('header');
    header.id = 'header';

    //Logo
    const logo = document.createElement('img');
    logo.src = logoSrc;
    logo.alt = 'Logo';
    logo.id = 'logo-btn';
    
    //Navbar
    const navbar = document.createElement('nav');
    navbar.id = 'nav-bar';

    //Links container
    const links = document.createElement('ul');
    links.classList.add('nav-links');

    //Buttons id array
    const buttonIds = ['home-btn', 'menu-btn', 'about-btn'];

    //Create link elements with button inside
    buttonIds.forEach(id => {
        const li = document.createElement('li');
        li.classList.add('nav-link');
        const button = document.createElement('button');
        button.id = id;
        button.textContent = id.replace('-btn', '').toUpperCase();
        li.appendChild(button);
        links.appendChild(li);
    });

    //Create address div
    const address = document.createElement('div');
    address.id = 'address';
    address.textContent = 'Via delle Rose 17, 00184 Roma RM, Italia';

    navbar.appendChild(links);
    header.append(logo, navbar, address);
    return header;
};