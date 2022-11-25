import Twitter from '../images/social/icon-twitter.svg';
import Facebook from '../images/social/icon-facebook.svg';
import Instagram from '../images/social/icon-instagram.svg';

const footerLoad = () => {
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

    // // twitter
    // const twitter = document.createElement('img');
    // twitter.setAttribute('id', 'twitter');
    // twitter.src = '/src/images/social/icon-twitter.svg';
    // socialMediaLogos.append(twitter);

    // twitter
    const twitter = new Image();
    twitter.src = Twitter;
    twitter.setAttribute('id', 'twitter');
    socialMediaLogos.append(twitter);

    // // instagram
    // const instagram = document.createElement('img');
    // instagram.setAttribute('id', 'instagram');
    // instagram.src = '/src/images/social/icon-instagram.svg';
    // socialMediaLogos.append(instagram);

    // instagram
    const instagram = new Image();
    instagram.src = Instagram;
    instagram.setAttribute('id', 'instagram');
    socialMediaLogos.append(instagram);

    // // facebook
    // const facebook = document.createElement('img');
    // facebook.setAttribute('id', 'facebook');
    // facebook.src = '/src/images/social/icon-facebook.svg';
    // socialMediaLogos.append(facebook);

    // facebook
    const facebook = new Image();
    facebook.src = Facebook;
    facebook.setAttribute('id', 'facebook');
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

};

export default footerLoad;