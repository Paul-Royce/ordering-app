import { menuArray } from "./data.js"

const menuContainer = document.getElementById("menu-cont")
const recapContainer = document.getElementById("recap-cont")


function rendermenuArray() {
    let menuElements = ``
    menuArray.forEach(meal => {
        menuElements += `
        <div>
        <div class="meal-cont" data-id = ${meal.uuid}>
                    <div id="img-desc-cont">
                        <img src=${meal.image} alt=${meal.name}>
                        <div class="meal-info">
                            <h2>${meal.name}</h2>
                            <p>${meal.ingredients}</p>
                            <span class="price">${meal.price}€</span>
                        </div>
                    </div>
                    <button class="add-btn" id=${meal.uuid} >+</button>
            </div>
            <hr>
            </div>
            `
    })
    menuContainer.innerHTML = menuElements
}

rendermenuArray()

document.addEventListener("click", e => {
    
    menuArray.forEach(meal => {
        if(e.target.id === meal.uuid) {
            addToCart(e.target.id)
        }
    })
    if(e.target.id === "repurchase") {
        location.reload()
    }
})

const cartArray = []

function addToCart(mealID) {
    const filteredMeal = menuArray.filter(meal => meal.uuid === mealID)[0]
    if(!cartArray.includes(filteredMeal)) {
        cartArray.push(filteredMeal)
        renderChanges()
    }
}

function renderChanges() {
    const AddElemContainer = document.getElementById("add-elem-cont")
    const totalPrice = document.getElementById("total")
    if(cartArray.length > 0) {
        AddElemContainer.innerHTML = ""
        recapContainer.style.display = "block"

        cartArray.forEach(item => {  
            AddElemContainer.innerHTML += `
            <div class="cart-elem">
                <div class="cart-left">
                    <h4>${item.name}</h4>
                    <span class="cart-remove">remove</span>
                </div>
                <span class="price">€ ${item.price}</span>
            </div>
            `
        })
        let count = 0
        for(let i=0; i < cartArray.length; i++) {
            count+= cartArray[i].price
            totalPrice.textContent = "€" + count
        }
        
    }
}


const noInteractionContainer = document.querySelector(".no-interaction")
const checkOutContainer = document.getElementById("checkout-cont")
checkOutContainer.addEventListener("click", (e) => {
    if(e.target.id === "close-btn") {
        noInteractionContainer.style.display = "none"
    }
})


const completeOrderBtn = document.getElementById("order")
completeOrderBtn.addEventListener("click", ()=> noInteractionContainer.style.display = "block")

const form = document.getElementById("user-form")
form.addEventListener("submit", (e)=> {
    e.preventDefault()
    const userName = new FormData(form).get("user-name")
    noInteractionContainer.style.display = "none"
    recapContainer.innerHTML = `<div class="thank-cont">
        <p id="order-complete-msg">Thanks ${userName}, your order is on his way</p>
        <span role="button" id="repurchase">Purchase Again!</span>
    </div>`
})

