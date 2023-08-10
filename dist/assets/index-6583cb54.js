(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}})();const s=[{name:"Pizza",ingredients:["pepperoni","mushrom","mozarella"],price:14,image:"img/pizza.jpg",uuid:"a2e2ad66-5c17-4ac5-ac43-e206cff6f785one"},{name:"Hamburger",ingredients:["beef","cheese","lettuce"],price:12,image:"img/hamburger.jpg",uuid:"271fbefc-3863-4cfe-a552-bd6ef62747catwo"},{name:"Beer",ingredients:["grain, hops, yeast, water"],price:12,image:"img/beer.jpg",uuid:"387054df-c9a9-455c-8ef0-d590fbfb7b15three"}],p=document.getElementById("menu-cont"),d=document.getElementById("recap-cont"),a=document.getElementById("add-elem-cont");function g(){let t="";s.forEach(e=>{t+=`
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
            `}),p.innerHTML=t}g();document.addEventListener("click",t=>{s.forEach(e=>{t.target.id===e.uuid&&y(t.target.id)}),t.target.id==="repurchase"&&location.reload()});const h=document.getElementById("total");let i=[];function y(t){const e=s.filter(c=>c.uuid===t)[0];i.includes(e)||(i.push(e),f())}function f(){if(i.length>0){a.innerHTML="",d.style.display="block",i.forEach(e=>{a.innerHTML+=`
            <div class="cart-elem">
                <div class="cart-left">
                    <h4>${e.name}</h4>
                    <span class="cart-remove" data-id = ${e.uuid}>remove</span>
                </div>
                <span class="price">€ ${e.price}</span>
            </div>
            `});let t=0;for(let e=0;e<i.length;e++)t+=i[e].price,h.textContent="€"+t||1}else d.innerHTML="No elements found"}const u=document.querySelector(".no-interaction"),v=document.getElementById("checkout-cont");v.addEventListener("click",t=>{t.target.id==="close-btn"&&(u.style.display="none")});const b=document.getElementById("order");b.addEventListener("click",()=>u.style.display="block");const m=document.getElementById("user-form");m.addEventListener("submit",t=>{t.preventDefault();const e=new FormData(m).get("user-name");u.style.display="none",d.innerHTML=`<div class="thank-cont">
        <p id="order-complete-msg">Thanks ${e}, your order is on his way</p>
        <span role="button" id="repurchase">Purchase Again!</span>
    </div>`});a.addEventListener("click",t=>{i.forEach(e=>{t.target.dataset.id===e.uuid&&E(e)})});function E(t){const e=i.indexOf(t);i.splice(e,1),f()}
