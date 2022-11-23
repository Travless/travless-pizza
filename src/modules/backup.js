// const menuLoad = (() => {

    // menu container
    // const menuContainer  = document.createElement('div');
    // menuContainer.setAttribute('id', 'menu-container');
    // bodyContainer.append(menuContainer);

//     // brick fire container
//     const brickFireContainer = document.createElement('div');
//     brickFireContainer.setAttribute('id', 'brick-fire-container');
//     menuContainer.append(brickFireContainer);

//     // brick fire pizza text
//     const brickFireText = document.createElement('div');
//     brickFireText.setAttribute('id', 'brick-fire-text');
//     brickFireText.textContent = 'Pittsburgh Famous Brick-Fire Pizza';
//     brickFireContainer.append(brickFireText);

//     // brick fire pizza img
//     const brickFireImg = document.createElement('img');
//     brickFireImg.setAttribute('id', 'brick-fire-img');
//     brickFireImg.src = '/src/images/brick-oven-pizza.png';
//     brickFireContainer.append(brickFireImg);

//     // brick fire sizes and sauces container
//     const brickFireSizesSauces = document.createElement('div');
//     brickFireSizesSauces.setAttribute('id', 'pizza-sizes-sauces-container');
//     brickFireContainer.append(brickFireSizesSauces);

//     // brick fire sizes container
//     const brickFireSizesConatiner = document.createElement('div');
//     brickFireSizesConatiner.setAttribute('id', 'brick-fire-sizes-container');
//     brickFireSizesSauces.append(brickFireSizesConatiner);

//     // brick fire sizes title
//     const brickFireSizesTitle = document.createElement('div');
//     brickFireSizesTitle.setAttribute('id', 'brick-fire-sizes-title');
//     brickFireSizesTitle.textContent = 'Sizes';
//     brickFireSizesConatiner.append(brickFireSizesTitle);

//     // brick fire sizes
//     const brickFireSizes = document.createElement('div');
//     brickFireSizes.setAttribute('id', 'brick-fire-sizes');
//     brickFireSizesConatiner.append(brickFireSizes);

//     // small
//     const small = document.createElement('p');
//     small.setAttribute('id', 'small');
//     small.textContent = 'Small (10") - $5.99';
//     brickFireSizes.append(small);

//     // medium
//     const medium = document.createElement('p');
//     medium.setAttribute('id', 'medium');
//     medium.textContent = 'Medium (12") - $7.99';
//     brickFireSizes.append(medium);

//     // large
//     const large = document.createElement('p');
//     large.setAttribute('id', 'large');
//     large.textContent = 'Large (14") - $9.99';
//     brickFireSizes.append(large);

//     // extra large
//     const xl = document.createElement('p');
//     xl.setAttribute('id', 'xl');
//     xl.textContent = 'XL (16") - $11.99';
//     brickFireSizes.append(xl);

//     // party cut
//     const partyCut = document.createElement('p');
//     partyCut.setAttribute('id', 'party-cut');
//     partyCut.textContent = 'Party Cut (36 pieces, Sheet-Style) - $19.99';
//     brickFireSizes.append(partyCut);

//     // toppings container
//     const toppingsContainer = document.createElement('div');
//     toppingsContainer.setAttribute('id', 'toppings-container');
//     brickFireSizesSauces.append(toppingsContainer);

//     // toppings title
//     const toppingsTitle = document.createElement('div');
//     toppingsTitle.setAttribute('id', 'toppings-title');
//     toppingsTitle.textContent = 'Toppings';
//     toppingsContainer.append(toppingsTitle);

//     // toppings
//     const toppings = document.createElement('div');
//     toppings.setAttribute('id', 'toppings');
//     toppingsContainer.append(toppings);

//     // pepperoni
//     const pepperoni = document.createElement('p');
//     pepperoni.setAttribute('id', 'pepperoni');
//     pepperoni.textContent = 'Pepperoni';
//     toppings.append(pepperoni);

//     // sausage
//     const sausage = document.createElement('p');
//     sausage.setAttribute('id', 'sausage');
//     sausage.textContent = 'Sausage';
//     toppings.append(sausage);

//     // mushrooms
//     const mushrooms = document.createElement('p');
//     mushrooms.setAttribute('id', 'mushrooms');
//     mushrooms.textContent = 'Pepperoni';
//     toppings.append(mushrooms);

//     // peppers
//     const peppers = document.createElement('p');
//     peppers.setAttribute('id', 'peppers');
//     peppers.textContent = 'Peppers (Green, Red, Bell)';
//     toppings.append(peppers);

//     // wings container
//     const wingsContainer = document.createElement('div');
//     wingsContainer.setAttribute('id', 'wings-container');
//     menuContainer.append(wingsContainer);

//     // wings title
//     const wingsTitle = document.createElement('div');
//     wingsTitle.setAttribute('id', 'wings-title');
//     wingsTitle.textContent = 'Wings';
//     wingsContainer.append(wingsTitle);

//     // wings img
//     const wingsImg = document.createElement('img');
//     wingsImg.setAttribute('id', 'wings-img');
//     wingsImg.src = '/src/images/wings.png';
//     wingsContainer.append(wingsImg);

//     // wings count and sauces container
//     const wingSizesSauces = document.createElement('div');
//     wingSizesSauces.setAttribute('id', 'wings-sizes-sauces');
//     wingsContainer.append(wingSizesSauces);

//     // wings count container
//     const wingsCountContainer = document.createElement('div');
//     wingsCountContainer.setAttribute('id', 'wings-count-container');
//     wingSizesSauces.append(wingsCountContainer);

//     // wings count title
//     const wingsCountTitle = document.createElement('div');
//     wingsCountTitle.setAttribute('id','wings-count-title');
//     wingsCountTitle.textContent = 'Count';
//     wingsCountContainer.append(wingsCountTitle);

//     // wings count
//     const wingsCount = document.createElement('div');
//     wingsCount.setAttribute('id', 'wings-count');
//     wingsCountContainer.append(wingsCount);

//     // half dozen wings
//     const halfDozen = document.createElement('p');
//     halfDozen.setAttribute('id', 'half-dozen');
//     halfDozen.textContent = 'Half-Dozen (6) Wings - $8.99';
//     wingsCount.append(halfDozen);

//     // dozen
//     const dozen = document.createElement('p');
//     dozen.setAttribute('id', 'dozen');
//     dozen.textContent = 'Dozen (12) Wings - $13.95';
//     wingsCount.append(dozen);

//     // additional wings
//     const additionalWings = document.createElement('p');
//     additionalWings.setAttribute('id', 'additional-wings');
//     additionalWings.textContent = 'Additional Wings - $4.99/6 Wings';
//     wingsCount.append(additionalWings);

//     // wings sauces container
//     const wingSaucesContainer = document.createElement('div');
//     wingSaucesContainer.setAttribute('id', 'wing-sauces-container');
//     wingSizesSauces.append(wingSaucesContainer);

//     // wing sauces text
//     const wingSaucesText = document.createElement('div');
//     wingSaucesText.setAttribute('id', 'wing-sauce-text');
//     wingSaucesText.textContent = 'Sauces';
//     wingSaucesContainer.append(wingSaucesText);

//     // wing sauces
//     const wingSauces = document.createElement('div');
//     wingSauces.setAttribute('id', 'wing-sauces');
//     wingSaucesContainer.append(wingSauces);

//     // buffalo
//     const buffalo = document.createElement('p');
//     buffalo.setAttribute('id', 'buffalo');
//     buffalo.textContent = 'Buffalo';
//     wingSauces.append(buffalo);

//     // bbq
//     const bbq = document.createElement('p');
//     bbq.setAttribute('id', 'bbq');
//     bbq.textContent = 'BBQ';
//     wingSauces.append(bbq);

//     // sweet and mild
//     const sweetMild = document.createElement('p');
//     sweetMild.setAttribute('id', 'sweet-mild');
//     sweetMild.textContent = 'Sweet & Mild';
//     wingSauces.append(sweetMild);

//     // honey mustard
//     const honeyMustard = document.createElement('p');
//     honeyMustard.setAttribute('id', 'honey-mustard');
//     honeyMustard.textContent = 'Honey Mustard';
//     wingSauces.append(honeyMustard);

// })();

const menuLoad = () => {

    

    function Item (name, description, price) {
        this.name = name
        this.description = description
        this.price = price
    };

    const pepperoniPizza = new Item ('Pepperoni Pizza', 'Includes pepperoni, tomato sauce, and mozzorella cheese', '$10.00');
    const mushroomPizza = new Item ('Buffalo Chicken Pizza', 'Includes grilled chicken, buffalo sauce, mozzorella cheese and Ranch drizzle', '$12.00');
    const meatLoversPizza = new Item ('Meat Lovers Pizza', 'Includes pepperoni, sausage, spicy tomato sauce, and a three cheese blend', '13.00');
    const VeggiePizza = new Item ('Veggie Lovers Pizza', 'Includes red, green, and bell peppers, onions, tomato sauce, and mozzorella cheese', '$11.00');

    function menuCard (item) {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const itemTitle = document.createElement('div');
        itemTitle.textContent = pizza.name;
        menuCard.append(itemTitle);

        const itemDescription = document.createElement('div');
        itemDescription.textContent = pizza.description;
        menuCard.append(itemDescription);

        const itemPrice = document.createElement('div');
        itemPrice.textContent = pizza.price;
        menuCard.append(itemPrice);
    }
}
