// import { menuLoad } from "./modules/menu";
import homeLoad from "./modules/home";

// content container
let content = document.getElementById('content');

console.log(homeLoad());

const navBarLoad = () => {

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
 
}

const pageLoad = (() => {
    //      HOME PAGE

    navBarLoad();
   
    // body container
    const bodyContainer = document.createElement('div');
    bodyContainer.setAttribute('id', 'body-container');
    content.append(bodyContainer);

    let homeContainer= '';
    homeLoad();
    bodyContainer.append(homeContainer);

    // bodyContainer.append(heroContainer);
    // bodyContainer.append(reviewsAwardContainer);

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


    // menu
    const menuLoad = () => {

        // menu container
        const menuContainer  = document.createElement('div');
        menuContainer.setAttribute('id', 'menu-container');
        bodyContainer.append(menuContainer);
    
        // menu item class
        class Item {
    
            constructor(imgFile, name, description, price){
            this.imgFile = imgFile
            this.name = name
            this.description = description
            this.price = price
            }
        };
    
        // creating menu items
        const pepperoniPizza = new Item ('/src/images/pepperoni-pizza.png','Pepperoni Pizza', 'Includes pepperoni, tomato sauce, and mozzorella cheese', '$10.00');
        const mushroomPizza = new Item ('/src/images/mushroom-pizza.png', 'Buffalo Chicken Pizza', 'Includes grilled chicken, buffalo sauce, mozzorella cheese and Ranch drizzle', '$12.00');
        const meatLoversPizza = new Item ('/src/images/meat-lovers-pizza.png', 'Meat Lovers Pizza', 'Includes pepperoni, sausage, spicy tomato sauce, and a three cheese blend', '$13.00');
        const VeggiePizza = new Item ('/src/images/veggie-pizza.png', 'Veggie Lovers Pizza', 'Includes red, green, and bell peppers, onions, tomato sauce, and mozzorella cheese', '$11.00');
    
        const menuItems = [pepperoniPizza, mushroomPizza, meatLoversPizza, VeggiePizza]
    
        // menu card function
        function menuCard (item) {

            let i = 0;
    
            const menuCard = document.createElement('div');
            menuCard.classList.add('menu-card');
    
            const itemImg = document.createElement('img');
            itemImg.src = item.imgFile;
            itemImg.classList.add('item-img');
            itemImg.setAttribute('id', `img-${i}`);
            menuCard.append(itemImg);
    
            const itemTitle = document.createElement('div');
            itemTitle.textContent = item.name;
            itemTitle.classList.add('item-title');
            menuCard.append(itemTitle);
    
            const itemDescription = document.createElement('div');
            itemDescription.textContent = item.description;
            itemDescription.classList.add('item-description');
            menuCard.append(itemDescription);
    
            const itemPrice = document.createElement('div');
            itemPrice.textContent = item.price;
            itemPrice.classList.add('item-price');
            menuCard.append(itemPrice);
    
            menuContainer.append(menuCard);
            i++;
        }
    
        for(let i = 0; i < menuItems.length; i++){
            menuCard(menuItems[i]);
        }
    
        return menuContainer;
    
    };


    menu.addEventListener('click', function(event){
        bodyContainer.innerHTML = '';
        menuLoad();
        // bodyContainer.append(menuContainer);
    })

})();

