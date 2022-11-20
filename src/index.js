const pageLoad = (() => {
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
    logo.src = './images/travless-logo.svg';
    logoContainer.append(logo);
    
})();
