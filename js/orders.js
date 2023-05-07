
const badgeHTML = document.getElementById('card-count')

// va a ser la lista de lo que la persona ordene y vaya agregando
function actualizarBadge() {
  let totalQuantity = 0;
  Order.forEach((producto) => {
    totalQuantity += producto.quantity
  })


  badgeHTML.innerText = totalQuantity
}


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
    valorTotal += producto.price;
  })
  console.log(valorTotal)
  updateTotal();
  const tableRow = `
        <tr class="order-import-total">
                <td class="order-import-total__text"  colspan = '3'>
                  TOTAL
                </td>
                <td class="order-import-total__price" id="valor-total" colspan = '2'>
                  $ ${valorTotal}
                </td>
        </tr>
        `
  orderDetail.innerHTML += tableRow;


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
  productoEncontrado.total = Math.round(cant * productoEncontrado.price * 100) / 100;
  cantInput.value = cant;
  console.log(cant)
  // Aca se actualiza el valor de la cantidad en el sessionStorage
  const productosEnCarrito = JSON.parse(sessionStorage.getItem('order'));
  const productoEnCarrito = productosEnCarrito.find(producto => producto.name === productoEncontrado.name);
  if (productoEnCarrito) {
    console.log(productoEnCarrito.quantity)
    productoEnCarrito.quantity = cant;
    console.log(productoEnCarrito.quantity)

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
  let valorTotal = 0;

  Order.forEach((producto) => {
    valorTotal +=  Math.round((producto.quantity * producto.price) * 100) / 100;;
  });

  const totalHTML = document.getElementById('valor-total');
  if (totalHTML) {
    totalHTML.textContent = `$ ${valorTotal.toFixed(2)}`;
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
  if (cant <= 0) {
    cant = 1
  }
  productoEncontrado.quantity = cant;
  productoEncontrado.total = Math.round(cant * productoEncontrado.price * 100) / 100;
  cantInput.value = cant;

  // Aca se actualiza el valor de la cantidad en el sessionStorage
  const productosEnCarrito = JSON.parse(sessionStorage.getItem('order'));
  const productoEnCarrito = productosEnCarrito.find(producto => producto.name === productoEncontrado.name);
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

function deleteProduct(id) {
  Order.splice(id, 1)
  //Guardarlo en el local storage
  sessionStorage.setItem('order', JSON.stringify(Order));

  renderOrder();
  showAlert('Producto Eliminado de la Orden')
  actualizarBadge()

}

function finalizarCompra() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    showAlert('Debe de estar logueado para Finalizar la compra', 'advertencia')
  } else {
    if (Order.length === 0) {
      showAlert('Debe seleccionar un producto para poder Finalizar la compra', 'advertencia')
    } else {
      sessionStorage.removeItem('order');
      Order = []; // Vacía el carrito
      renderOrder(); // Renderizar la orden antes de eliminar el contenido del carrito
      showAlert('Compra Finalizada', 'exito');
      
    }
  }
}


