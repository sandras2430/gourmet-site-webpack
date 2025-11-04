import maki from './assets/images/maki.jpg';
import mix from './assets/images/mix.jpg';
import roll from './assets/images/roll.jpg';
import sushivariedad from './assets/images/sushivariedad.jpg';
import uramaki from './assets/images/uramaki.jpg';
import sushisalmon from './assets/images/sushisalmon.jpg';

export function createhomePage(){
    const menu = document.querySelector('.content');
    menu.innerHTML = '';   
    const menuCont = document.createElement('div');
    menuCont.classList.add('menuContenedor');
    menuCont.style.backgroundColor = 'black';
    menuCont.style.color = ' rgb(218, 230, 207)';      
    const titulo = document.createElement('h1');
    const subtitulo = document.createElement('h3');
    subtitulo.textContent = "MENU";
    titulo.textContent = "PAGODA";    
    const divCuerpo = document.createElement('div');
    divCuerpo.classList.add('divCuerpo');

    divCuerpo.innerHTML=`
    <div class = "cell">
        <img src = "${maki}">
        <p>Maki con wasabi</p>
        <p>わさび入り巻き</p>
    </div>
    <div class = "cell">
        <img src = "${mix}">
        <p>Mix de Sushi con salsa</p>
        <p>盛り合わせ寿司とソース</p>
    </div>
    <div class = "cell">
        <img src = "${sushivariedad}">
        <p>Sushi variedad</p>
        <p>盛り合わせ寿司</p>
    </div>
    <div class = "cell">
        <img src = "${roll}">
        <p>Roll Sashimi</p>
        <p>刺身巻き</p>
    </div>
    <div class = "cell">
        <img src = "${uramaki}">
        <p>Uramaki</p>
        <p>裏巻き</p>
    </div>
    <div class = "cell">
        <img src = "${sushisalmon}">
        <p>Sushi de Salmon</p>
        <P>サーモン寿司</p>
    </div>
    `;
    menuCont.appendChild(titulo);
    menuCont.appendChild(subtitulo);
    menu.appendChild(menuCont);
    menu.appendChild(divCuerpo);



}