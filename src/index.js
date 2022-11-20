const pageLoad = () => {
    // content container
    const content = document.getElementById('content');

    // nav-header
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'nav-bar');
    content.append(nav);

    const logoContainer = document.createElement('div');
    logoContainer.setAttribute('id', 'logo-container')
    nav.append(logoContainer);
    const logo = document.createElement('img');
    logo.setAttribute('id', 'logo')
    logo.src = './images/travless-logo.svg';
    logoContainer.append(logo);

    const praiseConatiner = document.createElement('div');
    praiseConatiner.setAttribute('id', 'praise-container');
    nav.append(praiseConatiner);
    const praise = document.createElement('div');
    praise.setAttribute('id', 'praise');
    praise.textContent('Rated Best Pizza in the Burgh for 2022!');
    praiseConatiner.append(praise);

    const navMenu = document.createElement('div');
    navMenu.setAttribute('id', 'nav-menu');
    nav.append('navMenu');
    const menu = document.createElement('a');
    menu.setAttribute('id', 'menu');
    menu.textContent = 'Menu';
    navMenu.append(menu);
    const order = document.createElement('a');
    order.setAttribute('id', 'order');
    order.textContent = 'Order';
    navMenu.append(order);
    const aboutUs = document.createElement('a');
    aboutUs.setAttribute('id', 'about-us');
    aboutUs.textContent = 'About Us';
    navMenu.append(aboutUs);
    const contact = document.createElement('a');
    contact.setAttribute('id', 'contact');
    contact.textContent = 'Contact';
    navMenu.append(contact);

    // body container
    
};

pageLoad();
