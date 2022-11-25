import './style.css';
import menuLoad from "./modules/menu";
import homeLoad from "./modules/home";
import aboutUsLoad from "./modules/about-us";
import navBarLoad from "./modules/nav";
import footerLoad from "./modules/footer";

// content container
const content = document.getElementById('content');
const nav = navBarLoad();
const bodyContainer = document.createElement('div');
bodyContainer.setAttribute('id', 'body-container');
// content.append(bodyContainer);

const pageLoad = (() => {
    //      HOME PAGE
    content.append(nav);

    content.append(bodyContainer);

    const homeContainer = homeLoad();
    bodyContainer.append(homeContainer);

    const footer = footerLoad();
    content.append(footer);

    const menuNav = document.getElementById('menu');
    const homeNav = document.getElementById('home');
    const aboutUsNav = document.getElementById('about-us');

    // console.log(menuNav);

    menuNav.addEventListener('click', function(event){
        bodyContainer.innerHTML = '';
        const menu = menuLoad();
        bodyContainer.append(menu);
    });

    homeNav.addEventListener('click', function(event){
        bodyContainer.innerHTML = '';
        bodyContainer.append(homeContainer);
    });

    aboutUsNav.addEventListener('click', function(event){
        bodyContainer.innerHTML = '';
        const aboutUs = aboutUsLoad();
        bodyContainer.append(aboutUs);
    })


})();
