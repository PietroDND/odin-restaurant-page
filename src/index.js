import './styles.css'
import { loadHeader } from './header.js';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

document.body.append(loadHeader(), loadHome());

//Buttons logic and module loading
document.body.addEventListener('click', (e) => {
    if(e.target.id === 'home-btn') {
        document.body.innerHTML = '';
        document.body.append(loadHeader(), loadHome());
    }
    if(e.target.id === 'logo-btn') {
        document.body.innerHTML = '';
        document.body.append(loadHeader(), loadHome());
    }
    if(e.target.id === 'menu-btn') {
        document.body.innerHTML = '';
        document.body.append(loadHeader(), loadMenu());
    }
    if(e.target.id === 'about-btn') {
        document.body.innerHTML = '';
        document.body.append(loadHeader(), loadAbout());
    }
});