const pageLoad = (() => {
    // content container
    let content = document.getElementById('content');

    // navbar
    let nav = document.createElement('nav');
    nav.setAttribute('id', 'nav-bar');
    content.append(nav);

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
    const menu = document.createElement('a');
    menu.setAttribute('id', 'menu');
    menu.textContent = 'Menu';
    navMenu.append(menu);

    // order link
    const order = document.createElement('a');
    order.setAttribute('id', 'order');
    order.textContent = 'Order';
    navMenu.append(order);

    // about us link
    const aboutUs = document.createElement('a');
    aboutUs.setAttribute('id', 'about-us');
    aboutUs.textContent = 'About Us';
    navMenu.append(aboutUs);

    // contact link
    const contact = document.createElement('a');
    contact.setAttribute('id', 'contact');
    contact.textContent = 'Contact';
    navMenu.append(contact);

    // body container
    const bodyContainer = document.createElement('div');
    bodyContainer.setAttribute('id', 'body-container');
    content.append(bodyContainer);

    // // hero section
    // const heroSection = document.createElement('section');
    // heroSection.append(bodyContainer);

    // hero container
    const heroContainer = document.createElement('div');
    heroContainer.setAttribute('id', 'hero-container');
    bodyContainer.append(heroContainer);

    // hero statement
    const heroStatement = document.createElement('div');
    heroStatement.setAttribute('id', 'hero-statement');
    heroStatement.textContent = "At Travless's, we want our pizza to flavor your next favorite memory.";
    heroContainer.append(heroStatement);

    // pizza logo
    const pizzaContainer = document.createElement('div');
    pizzaContainer.setAttribute('id', 'pizza-container');
    heroContainer.append(pizzaContainer);
    const pizzaImg = document.createElement('img');
    pizzaImg.src = '/src/images/pizza-half.png';
    pizzaImg.setAttribute('id', 'pizza');
    pizzaContainer.append(pizzaImg);

    // reviews and award container
    const reviewsAwardContainer = document.createElement('div');
    reviewsAwardContainer.setAttribute('id', 'review-and-awards-container');
    bodyContainer.append(reviewsAwardContainer);

    // review 1 container
    const review1Container = document.createElement('div');
    review1Container.setAttribute('id', 'review-1-container');
    reviewsAwardContainer.append(review1Container);

    // review 1
    const review1 = document.createElement('div');
    review1.setAttribute('id', 'review-1');
    review1.textContent = `"You just can't beat Travless's when it comes to pizza in the 412"`;
    review1Container.append(review1);
    const pittMag = document.createElement('img');
    pittMag.setAttribute('id', 'pitt-mag');
    pittMag.src = '/src/images/Pittsburgh_Magazine_logo.png';
    review1Container.append(pittMag);

    // award
    const award = document.createElement('img');
    award.setAttribute('id', 'award');
    award.src = '/src/images/Best-Restaurant-Award-logo.png';
    reviewsAwardContainer.append(award);

    // review 2 container
    const review2Container = document.createElement('div');
    review2Container.setAttribute('id', 'review-2-container');
    reviewsAwardContainer.append(review2Container);

    // review 2
    const review2 = document.createElement('div');
    review2.setAttribute('id', 'review-2');
    review2.textContent = '"A Pittsburgh staple!"'
    review2Container.append(review2);
    const trib = document.createElement('img');
    trib.setAttribute('id', 'trib');
    trib.src = '/src/images/TribLIVELogo.png';
    review2Container.append(trib);

    // footer
    const footer = document.createElement('footer');
    footer.setAttribute('id', 'footer');
    content.append(footer);
    
    // social media container
    const socialMediaContainer = document.createElement('div');
    socialMediaContainer.setAttribute('id', 'social-media-container');
    footer.append(socialMediaContainer);

    // follow us
    const followUs = document.createElement('div');
    followUs.setAttribute('id', 'follow-us');
    followUs.textContent = 'Follow Us!';
    socialMediaContainer.append(followUs);

    // social media logo container
    const socialMediaLogos = document.createElement('div');
    socialMediaLogos.setAttribute('id', 'social-media-logo-container');
    socialMediaContainer.append(socialMediaLogos);

    // twitter
    const twitter = document.createElement('img');
    twitter.setAttribute('id', 'twitter');
    twitter.src = '/src/images/social/icon-twitter.svg';
    socialMediaLogos.append(twitter);

    // instagram
    const instagram = document.createElement('img');
    instagram.setAttribute('id', 'instagram');
    instagram.src = '/src/images/social/icon-instagram.svg';
    socialMediaLogos.append(instagram);

    // facebook
    const facebook = document.createElement('img');
    facebook.setAttribute('id', 'facebook');
    facebook.src = '/src/images/social/icon-facebook.svg';
    socialMediaLogos.append(facebook);

    // order online button container
    const orderOnlineBtnContainer = document.createElement('div');
    orderOnlineBtnContainer.setAttribute('id', 'contact-btn-container');
    footer.append(orderOnlineBtnContainer);
    
    //order online button
    const orderOnlineBtn = document.createElement('button');
    orderOnlineBtn.setAttribute('id', 'order-btn');
    orderOnlineBtn.textContent = 'Order Online';
    orderOnlineBtnContainer.append(orderOnlineBtn);

})();
