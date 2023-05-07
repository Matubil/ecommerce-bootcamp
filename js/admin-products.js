const productForm = document.getElementById('add-product')
productForm.addEventListener('click', () => {
    console.dir(productForm.dataset)
})

const submitBtn = document.getElementById('submit-btn') 

const tableBody = document.getElementById('table-body')

let editIndex;

function renderizarTabla(){
    tableBody.innerHTML = "";

    if(Products.length === 0){
        tableBody.innerHTML = `<tr class="disabled"><td colspan="6">NO SE ENCONTRARON PRODUCTOS</td></tr>`; 

        return
    }
    Products.forEach((producto, index) =>{    
        let imageSrc = producto.image ? producto.image : '/assets/images/funciones-pagina/not-found.webp'; 

        const tableRow = `
                            <tr class="product">
                                <td class="product__img-cell">
                                    <img class= "product__img" src="${imageSrc}" width="120px" alt="${producto.name}">                    
                                </td>
                                <td class= "product__name">
                                    ${producto.name}
                                </td>
                                <td class= "product__desc">
                                    ${producto.description}    
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
                            </tr>`
                            tableBody.innerHTML += tableRow

                            // !-- Intentar implementar favoritos
                            /*<button class="product__action-btn btn-favorite ${producto.favorite ? 'active' : ''}" onclick="setFavoriteProduct(${index})">
                                    <i class="fa-regular fa-star"></i>
                                </button>    */
    })
}

renderizarTabla()

                    
function addProduct(evt){
    evt.preventDefault(); //esto se pone porque la pagina se vive recargando, entonces se pone eso para que no se recargue la pagina
    console.dir(evt.target); //puedo ver las cosas que trae por defecto ese evento
    console.log(evt.target);

    const elements = evt.target.elements


    const newProduct = {
        name: elements.name.value,
        description: elements.description.value,
        price: elements.price.valueAsNumber, //la propiedad valueAsNumber, ahi esta el valor del numero en int, en value esta el valor en string, por eso con console.dir(evt.target.price) podemos ver todos los campos que tiene y sus valores
        image: elements.image.value
    };

    const newFormData = new FormData(evt.target);
    const newProductFormData = Object.fromEntries(newFormData); //aca ya tengo el objeto ya armado

    newProductFormData.price = +newProductFormData.price; //lo convierte en int

    console.log(newProduct)

    if(editIndex >= 0){
        Products[editIndex] = newProduct;
        showAlert(`El producto se edito correctamente`, 'warning')
        return
    } else{
        Products.push(newProduct)
        showAlert(`El producto se agrego correctamente`, 'success')
    }

    //Guardarlo  en el localStorage, si yo borro la cache se borra mi localStorage
    localStorage.setItem("Products",  JSON.stringify(Products))

    editIndex = undefined 

    submitBtn.classList.remove('edit-btn') 

    submitBtn.innerText = 'Cargar Producto'

    console.log(Products)

    renderizarTabla()

    evt.target.reset() //resetea a la altura del form para que siga cargando

    elements.name.focus(); //esta tambien le deja el focus del puntero ahi en el elemento name de la tabla
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
