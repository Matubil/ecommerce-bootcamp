const params = location.search

console.log(params)
const paramsUrl = new URLSearchParams(params)

const paramsEntries = Object.fromEntries(paramsUrl)

console.log(paramsEntries)

const id = paramsEntries['id'];

const products = JSON.parse(localStorage.getItem('Products'))

const product = products[id]

const mainDetail = document.getElementById('main-detail')

function renderizarDetail() {
    mainDetail.innerHTML = ``;

    const detail = `
                    <div class="product-container">
                        
                        <img class="product-container__img" src="${product.image}" alt="${product.name}">
                        
                        <div class="product-container__section ">

                            <div class="product-info-container">
                                <h6 class="product-info-container__category">
                                    Categoria
                                </h6>
                                <h1 class="product-info-container__title">
                                    ${product.name}
                                </h1>
                                <div class="product-info-container__price">
                                    $ ${product.price}
                                </div>
                                <p class="product-info-container__mini-description">
                                    "Conquista el futuro de la tecnología en Vikings Technology, donde tus sueños se hacen realidad con un solo clic."
                                </p>
                            </div>
                            <div class="product-function-container">
                                <div class="product-function-container__quantity product-quantity-container">
                                    <h5 class="product-quantity-container__title">
                                        Cantidad
                                    </h5>
                                    
                                    <div class="product-quantity-container__increase quantity-product">
                                        <button class="quantity-product__btn" onclick="decreaseInput()">
                                            -
                                        </button>
                                        <input type="number" class="quantity-product__input" id="quantity-input" value=1>
                                        <button class="quantity-product__btn" onclick="increaseInput()">
                                            +
                                        </button>
                                    </div>
                                </div>
                            
                                <div class="product-function-container__btns product-detail-btn">
                                    <button class="product-detail-btn__functions" id="agregarCarrito" onclick="addCart()">Agregar al carrito</button>
                                    <button class="product-detail-btn__functions" onclick="boughtProduct()">Comprar ahora</button>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div class="product-description">
                    <h3 class="product-description__title">
                        Características
                    </h3>
                    <p class="product-description__description">
                        ${product.description}
                    </p>
                    </div> `

    mainDetail.innerHTML = detail
}

renderizarDetail()

let input = document.getElementById("quantity-input");
let currentValue = parseInt(input.value);

function increaseInput() {
    input.value = currentValue + 1;
    currentValue = parseInt(input.value);
}

function decreaseInput() {
    if (currentValue > 1) {
        input.value = currentValue - 1;
        currentValue = parseInt(input.value);
    }
}


function addCart() {
    const existingCartItems = JSON.parse(sessionStorage.getItem('order')) || [];
    const updatedProduct = { ...product, quantity: parseInt(document.querySelector('.quantity-product__input').value) };
    const existingProductIndex = existingCartItems.findIndex(item => item.name === updatedProduct.name);
    if (existingProductIndex !== -1) {
        existingCartItems[existingProductIndex].quantity += updatedProduct.quantity;
    } else {
        existingCartItems.push(updatedProduct);
    }
    sessionStorage.setItem('order', JSON.stringify(existingCartItems));

    // Actualizar el contador del carrito
    const cartCounter = document.getElementById('card-count');
    let currentCount = parseInt(cartCounter.textContent) || 0;
    cartCounter.textContent = (currentCount + updatedProduct.quantity).toString();
}


function boughtProduct() {
    const existingCartItems = JSON.parse(sessionStorage.getItem('order')) || [];
    const updatedProduct = { ...product, quantity: parseInt(document.querySelector('.quantity-product__input').value) };
    const existingProductIndex = existingCartItems.findIndex(item => item.name === updatedProduct.name);
    if (existingProductIndex !== -1) {
        existingCartItems[existingProductIndex].quantity += updatedProduct.quantity;
    } else {
        existingCartItems.push(updatedProduct);
    }
    sessionStorage.setItem('order', JSON.stringify(existingCartItems));


    window.location.replace("/pages/order-detail/order-detail.html");
};


