let Products = JSON.parse(localStorage.getItem("Products")) || []; 
let Order = JSON.parse(sessionStorage.getItem("order")) || [];


const cardsContainer = document.getElementById('cards-container')

function renderizarCard(){
    //iterar el array para acceder a cada producto
    cardsContainer.innerHTML = ""; //lo que hace esto o para lo que está es para que cada vez que se cargue la funcion, se borre toda la tabla

    if(Products.length === 0){
        cardsContainer.innerHTML = `<h1 class="disabled">ERROR, NO SE ENCONTRARON PRODUCTOS</h1>`;
        return
    }
    Products.forEach((producto, index) =>{    
        let imageSrc = producto.image ? producto.image : '/assets/images/funciones-pagina/not-found.webp'; 

        const card = `                                          
                        <article class="card">
                            <div class="card__header">
                                <img src="${imageSrc}" alt="${producto.name}" class="card__img">
                            </div>
                            <div class="card__body">
                                <div class="card__title">
                                    ${producto.name}
                                </div>
                                <p class="card__description">
                                    ${producto.description}    
                                </p>
                                <div class="card__details">
                                    <div class="card__date">
                                        13/12/2022
                                    </div>
                                    <div class="card__price">
                                        $ ${producto.price}
                                    </div>
                                </div>
                            </div>
                            <div class="card__footer">
                                <div class="card__btn-container">
                                    <a class="card__btn" href="/" onclick="addToCart(${index})">
                                        Comprar
                                    </a>
                                </div>
                                <div class="card__btn-container">
                                    <a class="card__btn" href="/pages/product-detail/product-detail.html?id=${index}">
                                        Detalle
                                    </a>
                                </div>
                            </div>
                        </article>`

        cardsContainer.innerHTML += card
    })
}

renderizarCard()

function addToCart(productId) {
    const product = Products[productId];
    Order.push(product);
    sessionStorage.setItem("order",  JSON.stringify(Order))
    
    console.log(Order);
    window.location.replace('/pages/order-detail/order-detail.html');
}


function deleteProduct(id){
    const productName = Products[id].name;

    if (confirm(`¿Está seguro que desea borrar el producto ${productName}?`)) {
        Products.splice(id, 1);

        localStorage.setItem("Products", JSON.stringify(Products));

        // showAlert(`Elemento borrado correctamente.`);

        showAlert(`El elemento "${productName}" borrado correctamente`, 'success')
        
        renderizarTabla() 
        return   
    }else{
        showAlert(`Error al borrar el producto`, 'error');
        return; //es como poner return null, incluso se podria dejar sin el else, para que no haga nada
    }
}  


function editProduct(id){    

    submitBtn.classList.add('edit-btn') //le agrega una clase al boton para que tome los estilos del css
    submitBtn.innerText = 'Modificar Producto' //va a cambiar lo que dice el boton

    let product = Products[id];
    console.table(product)
    const el = productForm.elements;
    el.name.value = product.name
    el.description.value = product.description
    el.price.value = product.price
    el.image.value = product.image

    editIndex = id; //esta declarado arriba de renderizarTabla y se hace para que podamos traernos el id del que estamos editando para mas tarde que se termine de modificar
}