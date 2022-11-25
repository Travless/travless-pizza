import Logo from '../images/travless-logo.svg';

const navBarLoad = () => {

    // navbar
    let nav = document.createElement('nav');
    nav.setAttribute('id', 'nav-bar');

    // logo container
    const logoContainer = document.createElement('div');
    logoContainer.setAttribute('id', 'logo-container')
    nav.append(logoContainer);

    // // logo
    // const logo = document.createElement('img');
    // logo.setAttribute('id', 'logo')
    // logo.src = '/src/images/travless-logo.svg';
    // logoContainer.append(logo);

    // logo
    const logo = new Image();
    logo.src = Logo;
    logo.setAttribute('id', 'logo');
    logoContainer.append(logo);

    // praise container
    const praiseConatiner = document.createElement('div');
    praiseConatiner.setAttribute('id', 'praise-container');
    nav.append(praiseConatiner);

    // praise text
    const praise = document.createElement('div');
    praise.setAttribute('id', 'praise');
    praise.textContent = 'Rated Best Pizza in the Burgh for 2022!';
    praiseConatiner.append(praise);

    // nav menu
    const navMenu = document.createElement('div');
    navMenu.setAttribute('id', 'nav-menu');
    nav.append(navMenu);

    // home link
    const homeLink = document.createElement('a');
    homeLink.setAttribute('id', 'home');
    homeLink.textContent = 'Home';
    navMenu.append(homeLink);

    // menu link
    const menuLink = document.createElement('a');
    menuLink.setAttribute('id', 'menu');
    menuLink.textContent = 'Menu';
    navMenu.append(menuLink);

    // about us link
    const aboutUsLink = document.createElement('a');
    aboutUsLink.setAttribute('id', 'about-us');
    aboutUsLink.textContent = 'About Us';
    navMenu.append(aboutUsLink);

    return nav;

};

export default navBarLoad;