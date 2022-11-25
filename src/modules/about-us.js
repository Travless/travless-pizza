import AboutUsImg from '../images/pizzeria-header.webp';

const aboutUsLoad = () => {
    
    // about us container
    const aboutUsContainer = document.createElement('div');
    aboutUsContainer.setAttribute('id', 'about-us-container');
    // bodyContainer.append(aboutUsContainer);

    // // about us img
    // const aboutUsImg = document.createElement('img');
    // aboutUsImg.setAttribute('id', 'about-us-img');
    // aboutUsImg.src = '/src/images/pizzeria-header.webp';
    // aboutUsContainer.append(aboutUsImg);

    // about us img
    const aboutUsImg = new Image();
    aboutUsImg.src = AboutUsImg;
    aboutUsImg.setAttribute('id', 'about-us-img');
    aboutUsContainer.append(aboutUsImg);

    // about us header
    const aboutUsTitle = document.createElement('h1');
    aboutUsTitle.setAttribute('id', 'about-us-title');
    aboutUsTitle.textContent = 'A Tradition Built on Friendship';
    aboutUsContainer.append(aboutUsTitle);

    // about us text
    const aboutUsText = document.createElement('p');
    aboutUsText.setAttribute('id', 'about-us-text');
    aboutUsText.textContent = "At Travless’s, we are built on an idea: providing you a pizza that works on your budget and is flavors your next favorite memory. Our pizzas are made with all natural ingredients and made fresh to order. Whether it is parties, family gatherings, the big game, a movie night with your family, and everything in between, Travless’s has you covered!";
    aboutUsContainer.append(aboutUsText);

    // line space
    const lineSpace1 = document.createElement('div');
    lineSpace1.classList.add('line-space');
    aboutUsContainer.append(lineSpace1);

    // hours of operation title
    const hoursTitle = document.createElement('h2');
    hoursTitle.classList.add('about-us-titles');
    hoursTitle.textContent = 'Hours of Operation';
    aboutUsContainer.append(hoursTitle);

    // hours of operation
    const hours = document.createElement('p');
    hours.classList.add('about-us-p');
    hours.textContent = 'Monday - Thursday: 11 AM - 9 PM | Friday - Saturday: 11 AM - 11 PM | Sunday: 11AM - 6 PM';
    aboutUsContainer.append(hours);

    // line space
    const lineSpace2 = document.createElement('div');
    lineSpace2.classList.add('line-space');
    aboutUsContainer.append(lineSpace2);

    // address and contact title
    const addressTitle = document.createElement('h2');
    addressTitle.classList.add('about-us-titles');
    addressTitle.textContent = 'Contact and Address';
    aboutUsContainer.append(addressTitle);

    // address
    const address = document.createElement('p');
    address.classList.add('about-us-p');
    address.textContent = '123 Brown Avenue, Pittsburgh, PA 15282';
    aboutUsContainer.append(address);

    // phone
    const phone = document.createElement('p');
    phone.classList.add('about-us-p');
    phone.textContent = 'Phone: (412) 555-1234';
    aboutUsContainer.append(phone);

    // email
    const email = document.createElement('p');
    email.classList.add('about-us-p');
    email.textContent = 'Email - contact@travlesspizza.com';
    aboutUsContainer.append(email);

    return aboutUsContainer;

};

export default aboutUsLoad;