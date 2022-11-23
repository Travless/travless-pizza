const navBarLoad = () => {

    // navbar
    let nav = document.createElement('nav');
    nav.setAttribute('id', 'nav-bar');

    // logo container
    const logoContainer = document.createElement('div');
    logoContainer.setAttribute('id', 'logo-container')
    nav.append(logoContainer);

    // logo
    const logo = document.createElement('img');
    logo.setAttribute('id', 'logo')
    logo.src = '/src/images/travless-logo.svg';
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

    // contact link
    const contactLink = document.createElement('a');
    contactLink.setAttribute('id', 'contact');
    contactLink.textContent = 'Contact';
    navMenu.append(contactLink);

    return nav;

};

export default navBarLoad;