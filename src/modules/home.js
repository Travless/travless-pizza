import PizzaHalf from '../images/pizza-half.png';
import PittMag from '../images/Pittsburgh_Magazine_logo.png';
import Award from '../images/Best-Restaurant-Award-logo.png';
import Trib from '../images/TribLIVELogo.png';


const homeLoad = () => {
    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'home-container');


    // hero container
    const heroContainer = document.createElement('div');
    heroContainer.setAttribute('id', 'hero-container');
    homeContainer.append(heroContainer);

    // hero statement
    const heroStatement = document.createElement('div');
    heroStatement.setAttribute('id', 'hero-statement');
    heroStatement.textContent = "At Travless's, we want our pizza to flavor your next favorite memory.";
    heroContainer.append(heroStatement);

    // pizza logo
    const pizzaContainer = document.createElement('div');
    pizzaContainer.setAttribute('id', 'pizza-container');
    heroContainer.append(pizzaContainer);
    const pizzaImg = new Image();
    pizzaImg.src = PizzaHalf;
    pizzaImg.setAttribute('id', 'pizza');
    pizzaContainer.append(pizzaImg);
    // const pizzaImg = document.createElement('img');
    // pizzaImg.src = '/src/images/pizza-half.png';
    // pizzaImg.setAttribute('id', 'pizza');
    // pizzaContainer.append(pizzaImg);

    // reviews and award container
    const reviewsAwardContainer = document.createElement('div');
    reviewsAwardContainer.setAttribute('id', 'review-and-awards-container');
    homeContainer.append(reviewsAwardContainer);

    // review 1 container
    const review1Container = document.createElement('div');
    review1Container.setAttribute('id', 'review-1-container');
    reviewsAwardContainer.append(review1Container);

    // review 1
    const review1 = document.createElement('div');
    review1.setAttribute('id', 'review-1');
    review1.textContent = `"You just can't beat Travless's when it comes to pizza in the 412"`;
    review1Container.append(review1);
    const pittMag = new Image();
    pittMag.src = PittMag;
    pittMag.setAttribute('id', 'pitt-mag');
    review1Container.append(pittMag);
    // const pittMag = document.createElement('img');
    // pittMag.setAttribute('id', 'pitt-mag');
    // pittMag.src = '/src/images/Pittsburgh_Magazine_logo.png';
    // review1Container.append(pittMag);

    // // award
    // const award = document.createElement('img');
    // award.setAttribute('id', 'award');
    // award.src = '/src/images/Best-Restaurant-Award-logo.png';
    // reviewsAwardContainer.append(award);

    // award
    const award = new Image();
    award.src = Award;
    award.setAttribute('id', 'award');
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
    const trib = new Image();
    trib.src = Trib;
    trib.setAttribute('id', 'trib');
    review2Container.append(trib);
    // const trib = document.createElement('img');
    // trib.setAttribute('id', 'trib');
    // trib.src = '/src/images/TribLIVELogo.png';
    // review2Container.append(trib);

    return homeContainer;

};

export default homeLoad;