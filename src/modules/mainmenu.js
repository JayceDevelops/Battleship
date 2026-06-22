import AiIcon from '../assets/AI.svg';
import PlayerIcon from '../assets/Player.svg';

export const MainMenu = () => {

    const body = document.querySelector('body');

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const heading = document.createElement('h1');
    heading.textContent = 'BATTLESHIP';
    menu.appendChild(heading);

    const subheading = document.createElement('h2');
    subheading.textContent = 'SELECT DEPLOYMENT MODE';
    menu.appendChild(subheading);

    const options = document.createElement('div');
    options.classList.add('options');
    menu.appendChild(options);

    const PVA = document.createElement('div');
    PVA.classList.add('pvsa');

    PVA.appendChild(AiIcon);
    PVA.innerHTML += '<h1>PLAYER VS AI</h1>';
    options.appendChild(PVA);

    const PVP = document.createElement('div');
    PVP.appendChild(PlayerIcon);
    PVP.innerHTML += '<h1>PLAYER VS PLAYER</h1>';
    options.appendChild(PVP);

    menu.appendChild(options);

    body.appendChild(menu);
};