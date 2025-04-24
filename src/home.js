export const loadHome = () => {
    const content = document.createElement('div');
    content.id = 'content';
    const slogan = document.createElement('h1');
    slogan.classList.add('slogan', 'raleway-bold', 'text-gradient');
    slogan.textContent = 'Savor the Simple Moments.';
    content.appendChild(slogan);
    return content;
};