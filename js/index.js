/*
<article class="card">
    <div class="card__header">
        <img src="/assets/images/products/Teclado-logitech.webp" alt="Teclado-logitech" class="card__img">
    </div>
    <div class="card__body">
        <div class="card__title">
            Teclado Logitech G213 Prodigy RGB Gaming Español
        </div>
        <p class="card__description">
            -Interruptor: Semi-Mecanico <br>
            -Tipo De Conexion: Cableada <br>
            -Largo Del Cable: 1.8 M <br>
            -Tipo De Conector: USB <br>
            -Retroiluminado: LED<br>
        </p>
        <div class="card__details">
            <div class="card__date">
                13/12/2022
            </div>
            <div class="card__price">
                $ 13.275,39
            </div>
        </div>
    </div>
    <div class="card__footer">
        <div class="card__btn-container">
            <a class="card__btn" href="#">
                Comprar
            </a>
        </div>
        <div class="card__btn-container">
            <a class="card__btn" href="#">
                Detalle
            </a>
        </div>
    </div>
</article> */

const user = JSON.parse(localStorage.getItem('currentUser'))
const cardContainer = document.querySelector('#card-container')

const productsLS = JSON.parse(localStorage.getItem('products')) || []; //products del local storage significa

function renderizarProductos(products){

    cardContainer.innerHTML = ``;

    products.forEach(product, index => {
        
        const card = document.createElement('article')
        card.classList.add('card') //card.classList.add('card', 'otra clase', 'otra clase') //para agregar 3 clases por ejemplo
        
        card.innerHTML = `<article class="card">
                            <div class="card__header">
                                <img src="${product.image}" alt="${product.name}" class="card__img">
                            </div>
                            <div class="card__body">
                                <div class="card__title">
                                    ${product.name}
                                </div>
                                <p class="card__description">
                                    -${product.description}
                                </p>
                                <div class="card__details">
                                    <div class="card__date">
                                        13/12/2022
                                    </div>
                                    <div class="card__price">
                                        ${product.price}
                                    </div>
                                </div>
                            </div>
                            <div class="card__footer">
                                <div class="card__btn-container"> ` //<button class="card_btn-container" onclick="addToOrder(${index}) ${user ? "" : "disabled"} ver despues si lo agregamos asi o si lo podemos agregar de otra forma, seguramente queda mejor que los 2 sean botones
                                `
                                    <a class="card__btn" href="#">
                                        Comprar
                                    </a>
                                </div>
                                <div class="card__btn-container">
                                    <a class="card__btn" href="/pages/product-detail.html?id=${index}">
                                        Detalle
                                    </a>
                                </div>
                            </div>
                          </article>`
    })
}


renderizarProductos(productsLS)