(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();const a=[{name:"Pizza",ingredients:["pepperoni","mushrom","mozarella"],price:14,image:"T/img/pizza.jpg",uuid:"a2e2ad66-5c17-4ac5-ac43-e206cff6f785one"},{name:"Hamburger",ingredients:["beef","cheese","lettuce"],price:12,image:"T/img/hamburger.jpg",uuid:"271fbefc-3863-4cfe-a552-bd6ef62747catwo"},{name:"Beer",ingredients:["grain, hops, yeast, water"],price:12,image:"T/img/beer.jpg",uuid:"387054df-c9a9-455c-8ef0-d590fbfb7b15three"}],m=document.getElementById("menu-cont"),l=document.getElementById("recap-cont");function f(){let t="";a.forEach(e=>{t+=`
        <div>
        <div class="meal-cont" data-id = ${e.uuid}>
                    <div id="img-desc-cont">
                        <img src=${e.image} alt=${e.name}>
                        <div class="meal-info">
                            <h2>${e.name}</h2>
                            <p>${e.ingredients}</p>
                            <span class="price">${e.price}€</span>
                        </div>
                    </div>
                    <button class="add-btn" id=${e.uuid} >+</button>
            </div>
            <hr>
            </div>
            `}),m.innerHTML=t}f();document.addEventListener("click",t=>{a.forEach(e=>{t.target.id===e.uuid&&p(t.target.id)}),t.target.id==="repurchase"&&location.reload()});const o=[];function p(t){const e=a.filter(c=>c.uuid===t)[0];o.includes(e)||(o.push(e),g())}function g(){const t=document.getElementById("add-elem-cont"),e=document.getElementById("total");if(o.length>0){t.innerHTML="",l.style.display="block",o.forEach(i=>{t.innerHTML+=`
            <div class="cart-elem">
                <div class="cart-left">
                    <h4>${i.name}</h4>
                    <span class="cart-remove">remove</span>
                </div>
                <span class="price">€ ${i.price}</span>
            </div>
            `});let c=0;for(let i=0;i<o.length;i++)c+=o[i].price,e.textContent="€"+c}}const d=document.querySelector(".no-interaction"),h=document.getElementById("checkout-cont");h.addEventListener("click",t=>{t.target.id==="close-btn"&&(d.style.display="none")});const y=document.getElementById("order");y.addEventListener("click",()=>d.style.display="block");const u=document.getElementById("user-form");u.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(u).get("user-name");d.style.display="none",l.innerHTML=`<div class="thank-cont">
        <p id="order-complete-msg">Thanks ${e}, your order is one his way</p>
        <span role="button" id="repurchase">Purchase Again!</span>
    </div>`});
