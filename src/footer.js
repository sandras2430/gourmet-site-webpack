export function foothPage(){
    const pie = document.querySelector('.foot');
    pie.innerHTML = '';
    const divTituloPie = document.createElement('div');
    divTituloPie.classList.add('divTituloPie');
    const textoPiePrinc = document.createElement('div');
    textoPiePrinc.classList.add('textoPiePrinc');
    textoPiePrinc.innerHTML = `PAGODA`;
    const textoPie = document.createElement('div');
    textoPie.classList.add('alin');
    textoPie.innerHTML = `     
    <p>© 2025 PAGODA Sushi. All rights reservs.</p>        
    `;
    const secText = document.createElement('div');
    secText.classList.add('alin');
    secText.innerHTML = `
    <p>Phone: (+54) 342 3487722</p>
    <p>Addres: The best place</p>
    <p>City: Paradise</p>
    `;

    divTituloPie.appendChild(textoPiePrinc);
    divTituloPie.appendChild(textoPie);
    divTituloPie.appendChild(secText);
    pie.appendChild(divTituloPie);
    
}