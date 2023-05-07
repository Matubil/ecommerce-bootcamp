const badgeHTML = document.getElementById('card-count')

// va a ser la lista de lo que la persona ordene y vaya agregando
function actualizarBadge() {
  let totalQuantity = 0;
  Order.forEach((producto) => {
    totalQuantity += producto.quantity
  })

  if(totalQuantity<0){
    totalQuantity=0
  }
  badgeHTML.innerText = totalQuantity
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
            <td class="order-product__quantity quantity-product">
              <button class="quantity-order-product__btn" id="restar" data-index="${index}" onclick="decreaseQuantity(event, ${index})">
                  -
              </button>
              <input type="number" class="quantity-product__input" value=${producto.quantity} data-index="${index}">    
              <button class="quantity-order-product__btn" id="sumar" data-index="${index}" onclick="increaseQuantity(event, ${index})">
                  +
              </button>
            </td>
            <td class="product__price" id="total-pedido-${index}">
              $ ${producto.price}
            </td>        
            <td class= "product__actions">
                <button class="product__action-btn" onclick="deleteProduct(${index})"> 
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </td>
        </tr>
        `
    orderDetail.innerHTML += tableRow
    valorTotal += producto.total;

  })
  // const tableRow = `
  //   <tr>
  //           <td class="order-import-total" colspan = '4'>
  //           TOTAL
  //           </td>
  //           <td class="order-import-total">
  //           $ ${totalOrden}
  //           </td>
  //   </tr>
  // ` 
  // tableBody.innerHTML += tableRow; 
}

renderOrder()

function buscarProducto(products, productName) {
  const productoEncontrado = products.find(producto => producto.name === productName);
  return productoEncontrado || null;
}

function increaseQuantity(event, index) {
  const increaseBtn = event.target;
  const cantInput = document.querySelector(`.quantity-product__input[data-index="${index}"]`);

  const productName = Products[index].name;
  const productoEncontrado = Order[index];

  if (!productoEncontrado) {
    console.error(`No se encontró ningún producto con el nombre ${productName}`);
    return;
  }

  let cant = parseInt(cantInput.value);
  if (isNaN(cant)) {
    console.error(`No se pudo convertir el valor "${cantInput.value}" a un número`);
    return;
  }

  cant++;

  productoEncontrado.quantity = cant;
  productoEncontrado.total = cant * productoEncontrado.price;
  cantInput.value = cant;

  // Aquí se actualiza el valor de la cantidad en el sessionStorage
  const productosEnCarrito = JSON.parse(sessionStorage.getItem('order'));
  const productoEnCarrito = productosEnCarrito.find(producto => producto.name === productName);
  if (productoEnCarrito) {
    productoEnCarrito.quantity = cant;
    sessionStorage.setItem('order', JSON.stringify(productosEnCarrito));
  }

  const precioTotalHTML = document.getElementById(`total-pedido-${index}`);

  if (precioTotalHTML) {
    precioTotalHTML.innerText = `$ ${productoEncontrado.total}`;
  } else {
    console.error(`Element with ID "total-pedido-${index}" not found in the DOM`);
    return;
  }

  actualizarBadge();
  updateTotal();
}

function updateTotal() {
  const index = 0; // supongamos que el índice del primer producto es 0
  const valorTotalHTML = document.getElementById(`total-pedido-${index}`);
  if (valorTotalHTML) {
    valorTotalHTML.textContent = `$ ${valorTotal}`;
  } else {
    console.error(`Element with ID "total-pedido-${index}" not found in the DOM`);
  }
}

function decreaseQuantity(event, index) {
  const increaseBtn = event.target;
  const cantInput = document.querySelector(`.quantity-product__input[data-index="${index}"]`);

  const productName = Products[index].name;
  const productoEncontrado = Order[index];

  if (!productoEncontrado) {
    console.error(`No se encontró ningún producto con el nombre ${productName}`);
    return;
  }

  let cant = parseInt(cantInput.value);
  if (isNaN(cant)) {
    console.error(`No se pudo convertir el valor "${cantInput.value}" a un número`);
    return;
  }

  cant--;
  if(cant<=0){
    cant=1
  }
  productoEncontrado.quantity = cant;
  productoEncontrado.total = cant * productoEncontrado.price;
  cantInput.value = cant;

  // Aquí se actualiza el valor de la cantidad en el sessionStorage
  const productosEnCarrito = JSON.parse(sessionStorage.getItem('order'));
  const productoEnCarrito = productosEnCarrito.find(producto => producto.name === productName);
  if (productoEnCarrito) {
    productoEnCarrito.quantity = cant;
    sessionStorage.setItem('order', JSON.stringify(productosEnCarrito));
  }

  const precioTotalHTML = document.getElementById(`total-pedido-${index}`);

  if (precioTotalHTML) {
    precioTotalHTML.innerText = `$ ${productoEncontrado.total}`;
  } else {
    console.error(`Element with ID "total-pedido-${index}" not found in the DOM`);
    return;
  }

  actualizarBadge();
  updateTotal();
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
  Order.splice(id, 1)
  //Guardarlo en el local storage
  sessionStorage.setItem('order', JSON.stringify(Order));

  renderOrder();
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
      renderOrder();
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