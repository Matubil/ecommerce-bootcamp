const badgeHTML = document.getElementById('card-count')

// va a ser la lista de lo que la persona ordene y vaya agregando
function actualizarBadge() {
  badgeHTML.innerText = Order.length
}

console.log(Order.length)

actualizarBadge()

function renderOrder() {

  let valorTotal = 0;
  const orderDetail = document.getElementById('cart-detail-table')

  if (!orderDetail) {
    console.error("No se encontró el elemento con id 'cart-detail-table'");
    return;
  }

  //iterar el array para acceder a cada producto
  orderDetail.innerHTML = ""; //lo que hace esto o para lo que está es para que cada vez que se cargue la funcion, se borre toda la tabla

  if (Order.length === 0) {
    orderDetail.innerHTML = `<tr class="disabled"><td colspan="6">NO SE ENCONTRARON PRODUCTOS</td></tr>`; //colspan es para que ocupe hasta cierta cantidad de columnas

    return
  }

  // Agrupar productos por nombre
  const groupedProducts = Order.reduce((acc, curr) => {
    if (!acc[curr.name]) {
      acc[curr.name] = {
        ...curr,
        quantity: 0,
        total: 0
      };
    }
    acc[curr.name].quantity += curr.quantity;
    acc[curr.name].total += curr.total;
    return acc;
  }, {});

  // Convertir objeto en array
  const productsArray = Object.values(groupedProducts);

  productsArray.forEach((producto, index) => {
    let imageSrc = producto.image ? producto.image : '/assets/images/funciones-pagina/not-found.webp';

    const tableRow = `
        <tr class="order-product">
            <td class="order-product__img-cell">
                <img class= "order-product__img" src="${imageSrc}" width="120px" alt="${producto.name}">                    
            </td>
            <td class= "order-product__name">
                ${producto.name}
            </td>
            <td class= "order-product__price" id="total-pedido">
                $ ${(producto.price)*producto.quantity}
            </td>
            <td class="order-product__quantity quantity-order-product">
              <button class="quantity-order-product__btn" onclick="decreaseQuantity(${index})">
              -
              </button>
              <!-- !Recordar poner maximo 1 y que sea para completar -->
              <input type="number" class="quantity-order-product__input" value=${producto.quantity}>
              <button class="quantity-order-product__btn" onclick="increaseQuantity(${index})">
              +
              </button>
            </td>
            <td class= "product__actions">
                <button class="product__action-btn" onclick="deleteproduct(${index})"> 
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>`
    orderDetail.innerHTML += tableRow
    valorTotal += producto.total;

  })
}


renderOrder()



function increaseQuantity(index) {
  let cantInput = document.querySelector(`.quantity-product__input:nth-of-type(${index + 1})`);
  if (!cantInput) {
    console.error(`No se encontró el elemento cant-prod${index}`);
    return;
  }
  let cant = parseInt(cantInput.value);
  if (isNaN(cant)) {
    console.error(`No se pudo convertir el valor "${cantInput.value}" a un número`);
    return;
  }
  let producto = Order[index];
  cant++;
  producto.quantity = cant;
  producto.total = cant * producto.price;
  cantInput.value = cant;
  updateTotal();
  saveOrder();
}

function decreaseQuantity(index) {
  let cantInput = document.querySelector(`.quantity-product__input:nth-of-type(${index + 1})`);
  if (!cantInput) {
    console.error(`No se encontró el elemento cant-prod${index}`);
    return;
  }
  let cant = parseInt(cantInput.value);
  if (isNaN(cant)) {
    console.error(`No se pudo convertir el valor "${cantInput.value}" a un número`);
    return;
  }
  let producto = Order[index];
  if (cant > 1) {
    cant--;
    producto.quantity = cant;
    producto.total = cant * producto.price;
    cantInput.value = cant;
    updateTotal();
    saveOrder();
  }
}

function updateTotal() {
  valorTotal = Order.reduce((acc, producto) => acc + (producto.total ? producto.total : 0), 0);

  document.getElementById('total-pedido').textContent = `$ ${valorTotal}`;
}

function saveOrder() {
  localStorage.setItem('Order', JSON.stringify(Order));
}


/* REVISAR ASI ESTABA ANTES Y ARRIBA LE DI FUNCIONALIDAD DE SUMA
function increaseQuantity(index) {
    let cantInput = document.getElementById(`cant-prod${index}`);
    let cant = parseInt(cantInput.value);
    let producto = Order[index];
    cant++;
    producto.cant = cant;
    producto.total = cant * producto.price;
    cantInput.value = cant;
    renderOrder();
}
*/

function deleteProduct(id) {
  Products.splice(id, 1)
  //Guardarlo en el local storage
  localStorage.setItem('order', JSON.stringify(Products));

  renderizarTabla();
  showAlert('Producto Eliminado de la Orden')
  contarProductos();

}

function finalizarCompra() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    showAlert('Debe estar logueado para poder Finalizar la compra', 'advertencia')
  }
  else {
    if (Products.length === 0) {
      showAlert('Debe seleccionar un producto para poder Finalizar la compra', 'advertencia')
    } else {
      localStorage.removeItem('order')
      Products = [];
      renderizarTabla();
      showAlert('Compra Finalizada', 'exito')
      contarProductos();
    }

  }

}
/*
function increment(id) {
  var input = document.getElementById(`order-cant-input${id}`)
  var value = parseInt(input.value, 10);
  input.value = isNaN(value) ? 1 : value + 1;
  updateTotal(id);
}

function decrement(id) {
  var input = document.getElementById(`order-cant-input${id}`)
  var value = parseInt(input.value, 10);
  input.value = isNaN(value) ? 1 : value - 1;
  if (input.value < 1) {
    input.value = 1;
  }
  updateTotal(id)
}

function updateTotal(id) {

  const cantProd = document.getElementById(`order-cant-input${id}`);

  Products[id].cant = parseInt(cantProd.value);
  Products[id].total = Products[id].cant * parseInt(Products[id].price);

  //Guardarlo en el local storage
  localStorage.setItem('order', JSON.stringify(Products));
  renderizarTabla();

  contarProductos();

}*/