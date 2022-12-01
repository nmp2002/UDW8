// console.log("it is running");

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navBar');

if (bar){ 
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
} 

if (close){ 
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
} 

//cart
let carts = document.querySelectorAll(".cart");
let products = [
    {name: 'ĐÈN NGỦ', tag: 'lamp-1', price: 29.000, inCart: 0},
    {name: 'ĐÈN NGỦ', tag: 'lamp-2', price: 50.000, inCart: 0},
    
]

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        console.log("added to cart");
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if (productNumbers) {
        document.querySelector('.logout-bag span').textContent = productNumbers;
    } 
}