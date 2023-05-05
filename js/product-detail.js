const params = location.search

console.log(params)
const paramsUrl = new URLSearchParams(params)

const paramsEntries = Object.fromEntries(paramsUrl)

console.log(paramsEntries)

const id = paramsEntries['id']; 

const products = JSON.parse(localStorage.getItem('Products'))

const product = products[id]
                            
const mainDetail = document.getElementById('main-detail')

function renderizarDetail(){
    mainDetail.innerHTML=``;

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
                                    "Compra lo que necesitas acá en Vikings Technology"
                                </p>
                            </div>
                            <div class="product-function-container">
                                <div class="product-function-container__quantity product-quantity-container">
                                    <h5 class="product-quantity-container__title">
                                        Cantidad
                                    </h5>
                                    
                                    <div class="product-quantity-container__increase quantity-product">
                                        <button class="quantity-product__btn">
                                            -
                                        </button>
                                        <!-- !Recordar poner min 1 y que sea para completar -->
                                        <input type="number" class="quantity-product__input">
                                        <button class="quantity-product__btn">
                                            +
                                        </button>
                                    </div>
                                </div>
                            
                                <div class="product-function-container__btns product-detail-btn">
                                    <button class="product-detail-btn__functions">Agregar al carrito</button>
                                    <button class="product-detail-btn__functions">Comprar ahora</button>
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

    mainDetail.innerHTML= detail
}

renderizarDetail()