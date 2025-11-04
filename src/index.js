import './styles.css';
import {createMenu} from './menu.js';
import {createhomePage} from './homepage.js';
import {foothPage} from './footer.js';
import {contact} from './contact.js';

document.addEventListener('DOMContentLoaded', function(){
    const btnHome = document.querySelector('#btnHome');
    const btnMenu = document.querySelector('#btnMenu');
    const btnContact = document.querySelector('#btnContact');    
    
    

    createMenu();
    foothPage();
    const footerLogo = document.querySelector('.textoPiePrinc');
    btnMenu.addEventListener('click',function(){
        createhomePage();
    });
    btnHome.addEventListener('click', function(){
        createMenu();
    })
    footerLogo.addEventListener('click', function(){
        createMenu();
    });
    btnContact.addEventListener('click', function(){
        contact();
        const classDialog = document.querySelector('.class-dialog');
        const btnEnter = document.querySelector('.btnEnter');
        const btnCancel = document.querySelector('.btnCancel');
        classDialog.showModal();
        btnEnter.addEventListener('click', function(){
            classDialog.close();            
        })
        btnCancel.addEventListener('click', function(){
            classDialog.close();            
        })
    })

});