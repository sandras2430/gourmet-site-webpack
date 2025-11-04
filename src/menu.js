export function createMenu(){
    const menu = document.querySelector('.content');
    menu.innerHTML = '';

    const menuInicial = document.createElement('div');
    menuInicial.classList.add('menuinicial');
    

    const menuCont = document.createElement('div');
    menuCont.classList.add('menuContenedor');    
    //crear titulo
    const titulo = document.createElement('h1');
    titulo.textContent = 'PAGODA';
    const mensaje = document.createElement('div');
    mensaje.classList.add('mensajes');
    mensaje.innerHTML = `
    <span style = "text-align:center; padding:1rem"><h2>Who We Are</h2></span>
<p>At Crazy Sushi, we are the result of the perfect fusion between the millenary precision of Japanese art and the bold, creative spirit of Argentina. We are more than just a restaurant; we are a destination for those looking to elevate the sushi experience to an unexpected level.<p>

<h3>Our Mission</h3>
<p><span style = "font-weight:bold;">Our mission is simple:</span> to challenge the limits of flavor. We honor the traditional techniques of nigiri and sashimi, yet we dare to experiment with fresh, local ingredients and combinations that reflect the passion of our land.</p>

<p><span style = "font-weight:bold;">Impeccable Freshness: </span>Excellence starts with the raw ingredients. We are committed to selecting fresh fish and produce daily to ensure the highest quality in every single roll.</p>

<p>Creativity Without Limits: From the classic to our most daring <span style = "font-weight:bold;">Signature Rolls</span>, every piece is a work of art designed to surprise. We believe sushi should be fun, vibrant, and memorable.</p>

<p><span style = "font-weight:bold;">Made with Argentine Passion:</span> Behind every dish is a team that works with dedication and the unique warmth that defines us. We want your experience, whether at home or in our location, to feel like gathering with friends.</p>

<p>Crazy Sushi is the ideal combination for your palate: tradition, innovation, and the unmistakable flavor of something made with love in Argentina.</p>
    `;

    

    menuCont.appendChild(titulo);    
    menuInicial.appendChild(menuCont);
    menuInicial.appendChild(mensaje);
    menu.appendChild(menuInicial);

}