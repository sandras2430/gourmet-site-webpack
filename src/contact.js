export function contact(){
    const menu = document.querySelector('.content');
    //menu.innerHTML = '';
    const dialog = document.createElement('dialog');
    dialog.classList.add('class-dialog');
    const formu = document.createElement('form');
    formu.classList.add('formu');
    const divTextForm = document.createElement('div');
    divTextForm.classList.add('divTextForm');
    divTextForm.innerHTML=`
    <p>Name:</p><input type = 'text'>
    <p>Surname:</p><input type = 'text'>
    `;
    const secTextForm = document.createElement('div');
    secTextForm.classList.add('secTextForm');
    secTextForm.innerHTML=`
    <p>Phone:</p><input type = 'phone' placeholder = 'XXX-XXXXXXX'>
    <p>Email:</p><input type = 'email'>    
    `;
    const botones = document.createElement('div');
    botones.classList.add('botones');
    botones.innerHTML=`
    <button type='button' class = 'btnEnter'>Enter</button>
    <button type = 'button' class = 'btnCancel'>Cancel</button>
    `;

    formu.appendChild(divTextForm);
    formu.appendChild(secTextForm);
    formu.appendChild(botones);
    dialog.appendChild(formu);
    menu.appendChild(dialog);

}