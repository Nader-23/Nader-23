let cartCount = document.querySelector(".cart-count");
let asideBar = document.querySelector("aside");
let closeIcon = document.querySelector(".fa-x");

cartCount.onclick = () => {
    asideBar.classList.toggle('open');
};

closeIcon.onclick = () => {
    asideBar.classList.toggle('open');
};

// items from server
const items = [
    { id: 1, title: "Bag 2", price: 55, img: "shopping (2).webp", amount: 1 },
    { id: 2, title: "Bag 3", price: 100, img: "shopping (3).webp", amount: 1 },
    { id: 3, title: "Bag 4", price: 120, img: "shopping.webp", amount: 1 },
    { id: 4, title: "Bag 5", price: 130, img: "gy6SkKKcyid3nkIlnyODGLmnFLc3zNX7OpF8UVKp.webp", amount: 1 }
];
console.log(items);

// render items
let parentBoxs = document.querySelector('.parent-boxs');
let currentItem = "";

function renderItems() {
    items.forEach(item => {
        currentItem += `<div class="box"><img src="${item.img}" alt="">
        <h4 class="product">${item.title}</h4>
        <h5 class="price">${item.price}</h5>
        <div class="cart" data-id="${item.id}">
            <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
    </div>`;
    });
    parentBoxs.innerHTML = currentItem;
}

renderItems();

// render cartItems
let cartItems = [];
let currentCarItems = "";
let parentCartBoxs = document.querySelector(".tbody");

renderCartItems();

function renderCartItems() {
    currentCarItems = "";
    cartItems.forEach(item => {
        currentCarItems += `
        <tr>
            <td>${item.id}</td>
            <td><img src="${item.img}" alt=""></td>
            <td>${item.title}</td>
            <td>
                <span class="btn" onclick="updateCartItem('increase', ${item.id})">+</span>
                <span class="amount">${item.amount}</span>
                <span class="btn" onclick="updateCartItem('decrease', ${item.id})">-</span>
            </td>
            <td class="all-price">${item.price * item.amount}</td>
            <td> <button onclick="deleteCartItem(${item.id})">Delete</button></td>
        </tr>`;
    });
    parentCartBoxs.innerHTML = currentCarItems;
    console.log(cartItems)
}

// adding indicator
document.querySelector(".cart-count span").innerHTML = cartItems.length;

// add to cart
let btnsAdd = document.querySelectorAll(".cart");
btnsAdd.forEach(btn=>{
    btn.addEventListener('click',()=>{
        console.log(btn.dataset.id)
        let id=btn.dataset.id
        items.find(item=>{
            if(item.id==id){
                if(cartItems.some(cartItem=>cartItem.id==id)){
                    alert('product already exist')
                }else{
                    cartItems.push(item)
                }
            }
        })
        document.querySelector(".indicator").innerHTML = cartItems.length;
        renderCartItems()
    })
}) 

// adding indicator


// update cart
function updateCartItem(action, id) {
    cartItems.forEach(item => {
        if (item.id == id) {
            if (action == 'increase') {
                item.amount += 1;
            } else if (action == 'decrease' && item.amount > 1) {
                item.amount -= 1;
            } else {
                alert("Amount must be 1 or more");
            }
        }
    });
    renderCartItems();
}

// delete
function deleteCartItem(id) {
    cartItems = cartItems.filter(item => item.id != id);
    renderCartItems();
    document.querySelector(".indicator").innerHTML = cartItems.length;
}

// deleteAll
function deleteAll() {
    cartItems = [];
    renderCartItems();
    document.querySelector(".indicator").innerHTML = cartItems.length;
}

