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

export default menuLoad;