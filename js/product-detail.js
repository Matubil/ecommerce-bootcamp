const params = location.search

console.log(params)

//forma 1 de buscar el id
//const index = params.split('id=')[1].split('&')[0];

//forma 2 de buscar el id (es el metodo recomendado para obtener queryParams usando URLSearchParams)
const paramsUrl = new URLSearchParams(params) //lo bueno de usar esto, es que me crea un objeto con todos los parametros que se mandan en la URL

// function getProductIdFromUrl() {
//     const searchParams = new URLSearchParams(location.search);
//     return parseInt(searchParams.get('id'));
// }


const paramsEntries = Object.fromEntries(paramsUrl) //aca me forma un objeto con por cada parametro me va a formar un array, donde el primer valor va a ser el nombre del param y el segundo el valor del param

console.log(paramsEntries)

const id = paramsEntries['id']; // acceder al valor del parámetro 'id'
//accedo al id desde la constante donde me trajo cada parametro

const products = JSON.parse(localStorage.getItem('Products'))

const product = products[id]

// console.log(product.image)

// document.body.innerHTML = `<p>${JSON.stringify(product)}</p><img src=${product.image}>` //Esto lo que me está haciendo, seria imprimir el producto que yo estaba buscando, segun el boton de detalle del producto que yo aprete
                            
const mainDetail = document.getElementById('main-detail')

function renderizarDetail(){
    mainDetail.innerHTML=``;

    const detail = `
                    <div class="product-container">
                        <div class="product-container__img">
                            <img src="${product.image}" alt="${product.name}">
                        </div>

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
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, sint.
                                </p>
                            </div>
                            <div class="product-function-container">
                                <div class="product-function-container__quantity product-quantity-container">
                                    <h5 class="product-quantity-container__title">
                                        Cantidad
                                    </h5>
                                    
                                    <div class="product-quantity-container__increase quantity-product">
                                        <button class="quantity-product__decrease">
                                            -
                                        </button>
                                        <!-- !Recordar poner min 1 y que sea para completar -->
                                        <input type="number" class="quantity-product__input">
                                        <button class="quantity-product__increase">
                                            +
                                        </button>
                                    </div>
                                </div>
                            
                                <div class="product-function-container__btns product-btns">
                                    <button class="product-btn__add">Agregar al carrito</button>
                                    <button class="product-btn__shop">Comprar ahora</button>
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