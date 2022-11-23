import menuLoad from "./modules/menu";
import homeLoad from "./modules/home";
import navBarLoad from "./modules/nav";
import footerLoad from "./modules/footer";

// content container
const content = document.getElementById('content');
const nav = navBarLoad();
const bodyContainer = document.createElement('div');
bodyContainer.setAttribute('id', 'body-container');
// content.append(bodyContainer);

const pageLoad = (() => {
    //      HOME PAGE
    content.append(nav);

    content.append(bodyContainer);

    const homeContainer = homeLoad();
    bodyContainer.append(homeContainer);

    const footer = footerLoad();
    content.append(footer);

})();