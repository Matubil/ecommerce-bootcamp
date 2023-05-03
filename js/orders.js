const badgeHTML = document.getElementById('card-count')




// va a ser la lista de lo que la persona ordene y vaya agregando
function actualizarBadge(){
    badgeHTML.innerText = Order.length}

    console.log(Order.length)

    actualizarBadge()
//     // let count;  // *ESTO HACE LO MISMO QUE ARRIBA PERO ES UNA MANERA MAS SIMPLE PARA ENTENDER, LA DE ARRIBA ES LA RECOMENDADA Y COMO VAMOS A TENER QUE HACER TAMBIEN EL CALCULO DEL TOTAL
//     // order.products.forEach(prod => {
//     //     count += prod.cantidad
//     // })

//     // badgeHTM.innerText = count
// }

// actualizarBadge()

const orderDetail = document.getElementById('cart-detail-table')

function renderOrder(){
    //iterar el array para acceder a cada producto
    orderDetail.innerHTML = ""; //lo que hace esto o para lo que está es para que cada vez que se cargue la funcion, se borre toda la tabla

    if(Order.length === 0){
        orderDetail.innerHTML = `<tr class="disabled"><td colspan="6">NO SE ENCONTRARON PRODUCTOS</td></tr>`; //colspan es para que ocupe hasta cierta cantidad de columnas

        return
    }
    Order.forEach((producto, index) =>{    
        let imageSrc = producto.image ? producto.image : '/assets/images/funciones-pagina/not-found.webp'; 

        const tableRow = `
                            <tr class="product">
                                <td class="product__img-cell">
                                    <img class= "product__img" src="${imageSrc}" width="120px" alt="${producto.name}">                    
                                </td>
                                <td class= "product__name">
                                    ${producto.name}
                                </td>
                                <td class= "product__price">
                                    $ ${producto.price}
                                </td>
                                <td class= "product__actions">
                                    <button class="product__action-btn" onclick="deleteProduct(${index})"> 
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                    <button class="product__action-btn btn-edit" onclick="editProduct(${index})">
                                        <i class="fa-solid fa-pencil"></i>
                                    </button>
                                </td>
                                <td class="product-quantity-container__increase quantity-product">
                                        <button class="quantity-product__decrease">
                                            -
                                        </button>
                                        <!-- !Recordar poner maximo 1 y que sea para completar -->
                                        <input type="number" class="quantity-product__input">
                                        <button class="quantity-product__increase">
                                            +
                                        </button>
                                </td>
                            </tr>`

        orderDetail.innerHTML += tableRow
    })
}

renderOrder()



// ? Agregar elemento
function addToOrder(indice){
    //Buscar el producto por indice dentro de mi localStorage
    //Tener la posibilidad de que cuando apriete el boton comprar se añada el elemento al array dentro de order.products(hacer un push)
    
        //antes de hacer el push
        //deberia de cehckear buscando con un find o con un findindex deberia checkear si el producto ya se encuenta
            //si se encuentra incremento dentro de ese producto su cantidad++
            //sino hago un push de ese elemento
    
        //una vez que agrego el elemento, ir incrementando el total
        //Volver a guardar en el sessionStorage
}

// ? Eliminar elemento
//Pintamos en el boton de mi orden el index del array order.products y lo eliminamos. Splice
    //Antes de eliminarlo, Guardar el precio del producto por la cantidad y restarselo al total
    //Actualizar el sessionStorage con el nuevo valor

// ? Listar los elementos (Listar Orden)
//Pintar los elementos en una nueva pagina, con la posibilidad de eliminarlos (crear la tablita donde va pintando)