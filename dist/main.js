(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);let t=document.getElementById("content");console.log((0,e.default)()),(()=>{(()=>{let e=document.createElement("nav");e.setAttribute("id","nav-bar"),t.append(e);const n=document.createElement("div");n.setAttribute("id","logo-container"),e.append(n);const i=document.createElement("img");i.setAttribute("id","logo"),i.src="/src/images/travless-logo.svg",n.append(i);const c=document.createElement("div");c.setAttribute("id","praise-container"),e.append(c);const o=document.createElement("div");o.setAttribute("id","praise"),o.textContent="Rated Best Pizza in the Burgh for 2022!",c.append(o);const a=document.createElement("div");a.setAttribute("id","nav-menu"),e.append(a);const s=document.createElement("a");s.setAttribute("id","menu"),s.textContent="Menu",a.append(s);const d=document.createElement("a");d.setAttribute("id","order"),d.textContent="Order",a.append(d);const r=document.createElement("a");r.setAttribute("id","about-us"),r.textContent="About Us",a.append(r);const m=document.createElement("a");m.setAttribute("id","contact"),m.textContent="Contact",a.append(m)})();const n=document.createElement("div");n.setAttribute("id","body-container"),t.append(n),(0,e.default)(),n.append("");const i=document.createElement("footer");i.setAttribute("id","footer"),t.append(i);const c=document.createElement("div");c.setAttribute("id","social-media-container"),i.append(c);const o=document.createElement("div");o.setAttribute("id","follow-us"),o.textContent="Follow Us!",c.append(o);const a=document.createElement("div");a.setAttribute("id","social-media-logo-container"),c.append(a);const s=document.createElement("img");s.setAttribute("id","twitter"),s.src="/src/images/social/icon-twitter.svg",a.append(s);const d=document.createElement("img");d.setAttribute("id","instagram"),d.src="/src/images/social/icon-instagram.svg",a.append(d);const r=document.createElement("img");r.setAttribute("id","facebook"),r.src="/src/images/social/icon-facebook.svg",a.append(r);const m=document.createElement("div");m.setAttribute("id","contact-btn-container"),i.append(m);const p=document.createElement("button");p.setAttribute("id","order-btn"),p.textContent="Order Online",m.append(p);const l=()=>{const e=document.createElement("div");e.setAttribute("id","menu-container"),n.append(e);class t{constructor(e,t,n,i){this.imgFile=e,this.name=t,this.description=n,this.price=i}}const i=[new t("/src/images/pepperoni-pizza.png","Pepperoni Pizza","Includes pepperoni, tomato sauce, and mozzorella cheese","$10.00"),new t("/src/images/mushroom-pizza.png","Buffalo Chicken Pizza","Includes grilled chicken, buffalo sauce, mozzorella cheese and Ranch drizzle","$12.00"),new t("/src/images/meat-lovers-pizza.png","Meat Lovers Pizza","Includes pepperoni, sausage, spicy tomato sauce, and a three cheese blend","$13.00"),new t("/src/images/veggie-pizza.png","Veggie Lovers Pizza","Includes red, green, and bell peppers, onions, tomato sauce, and mozzorella cheese","$11.00")];function c(t){let n=0;const i=document.createElement("div");i.classList.add("menu-card");const c=document.createElement("img");c.src=t.imgFile,c.classList.add("item-img"),c.setAttribute("id",`img-${n}`),i.append(c);const o=document.createElement("div");o.textContent=t.name,o.classList.add("item-title"),i.append(o);const a=document.createElement("div");a.textContent=t.description,a.classList.add("item-description"),i.append(a);const s=document.createElement("div");s.textContent=t.price,s.classList.add("item-price"),i.append(s),e.append(i),n++}for(let e=0;e<i.length;e++)c(i[e]);return e};menu.addEventListener("click",(function(e){n.innerHTML="",l()}))})()})();