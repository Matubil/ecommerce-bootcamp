let Users = JSON.parse(localStorage.getItem("users")) || [[{ "name": "MATIAS BILONI", "age": "", "password": "12341234", "email": "admin@gmail.com", "gender": "1", "role": "ADMIN_ROLE" }]];

// if(!Users || Users.length === 0){
//     window.localStorage.setItem('users',JSON.stringify([{
//         "name":"MATIAS BILONI",
//         "age":"23",
//         "password":"12341234",
//         "email":"admin@gmail.com",
//         "gender":"1",
//         "role":"ADMIN_ROLE"}]))
//     window.location.reload()
// }

// var Products = JSON.parse(localStorage.getItem("Products")) || [{
//     name: "Teclado Logitech G213 Prodigy RGB Gaming Español",
//     description: "-Interruptor: Semi-Mecanico <br>                    -Tipo De Conexion: Cableada <br>                    -Largo Del Cable: 1.8 M <br>                    -Tipo De Conector: USB <br>                    -Retroiluminado: LED<br>",
//     price:13275.39,
//     image: "/assets/images/products/Teclado-logitech.webp"
// },
// {
//     name:"Mouse Pad T-Dagger Lava S",
//     description:` -Tamaño:  S   <br>                    -Deslizamiento:   Rapido <br>                    -MaterialTela: Caucho <br>                    -Conexion:    No <br>                    -Alto / Ancho: 290 Mm X 240 Mm <br>                    -Grosor: 3 Mm <br>`,
//     price:847.32,
//     image:"/assets/images/products/Mouse-pad.webp"
// },
// {
//     name:"Mouse Thermaltake Neros RGB 3200 Dpi",
//     description:`-Tipo De Conexion: Cableado <br>
//                     -Tipo De Conector: USB <br>
//                     -Tipo: Optico <br>
//                     -Sensor: PIXART PMW-3050 <br>
//                     -DPI: 750, 1500, 2000, 2500, 3200 Dpi <br>`,
//     price:4950.84,
//     image:"/assets/images/products/Mouse-thermaltake.webp"
// },
// {
//     name:"CPU Cooler Aigo ICE400 Fixed RGB",
//     description:`-Consumo: 12 VDC <br>\n
//                     -TDP: 150 W  <br>\n
//                     -Tipo De Refrigeracion: Aire <br>\n
//                     -Velocidad Del Fan: 800 - 1.800 RPM <br>\n
//                     -Iluminacion: Si <br>\n
//                     -Nivel Maximo De Ruido: 36 DB <br>\n
//                     -Dimensiones: 122 Mm X 75 Mm X 158 Mm <br>\n
//                     -Socket Compatibles: Intel LGA 115x/ 1200 / 775 - AMD AM4/ AM3+/ AM3 / FM2 / FM1 / AM2+ / AM2`,
//     price:7614.65,
//     image:"/assets/images/products/Cooler-aigo.webp"
// },
// {
//     name:"Webcam Solarmax Look Pro 2000 QHD 2K Autofocus",
//     description:`-Microfono Incorporado: Si<br>\n
//                     -Campo Visual: 90 Grados<br>\n
//                     -Resolucion Máxima: 2592 X 1944<br>\n
//                     -Peso: 160g<br>\n
//                     -Alto: 30 Mm<br>\n
//                     -Ancho: 111 Mm<br>\n
//                     -Profundidad: 80 Mm<br>`,
//     price:5473.73,
//     image:"/assets/images/products/Webcam-solamarx.webp"
// },
// {
//     name:"Monitor Led Curvo 27\" VIEWSONIC VX2768-2KPC-MHD QHD 144Hz",
//     description:`-Tipo De Panel: MVA <br>\n
//                     -Pantalla: Curvo <br>\n
//                     -Ancho: 610 Mm <br>\n
//                     -Alto: 452 Mm Con Base <br>\n
//                     -Tamaño De Pantalla: 27\"<br>\n
//                     -Entrada VGA: No <br>\n
//                     -Entrada DisplayPort: 1 <br>\n
//                     -Entrada HDMI 2.0: 2 <br>`,
//     price:136081.44,
//     image:"/assets/images/products/Monitor-omni.webp"
// }, 
// {
//     name:"Gabinete Gigabyte Aorus C700 Glass",
//     description:`-Factor Mother: Mini ITX / Micro ATX / -ATX / E-ATX   <br>\n
//                     -Ventana: Si <br>\n
//                     -Tipo De Ventana: Vidrio <br>\n
//                     -Colores: Negro  <br>\n
//                     -USB 3.1 Type C: 1   <br>\n
//                     -USB 3.0: 4  <br>\n
//                     -HDMI: 1 <br>\n
//                     -Audio HD: Si <br>`,
//     price:194600.65,
//     image:"/assets/images/products/Gabinete-Gigabyte.webp"
// },
// {
//     name:"Micro AMD Ryzen 9 7900X 4.7 Ghz AM5",
//     description:`-Modelo: Ryzen 9 7900x <br>\n
//                     -Familia: AMD <br>\n
//                     -Nucleos: 12 <br>\n
//                     -Hilos: 24 <br>\n
//                     -Frecuencia Max.: Hasta 5.6 GHz <br>\n
//                     -Proceso De Fabricacion: TSMC 5nm FinFET <br>\n
//                     -Grafica Integrada: AMD Radeon Graphics <br>\n
//                     -Socket: AM5 <br>`,
//     price:190997.89,
//     image:"/assets/images/products/Ryzen-9.webp"
// },
// {
//     name:"Placa de Video Lenovo By MSI Nvidia Geforce RTX 3080 10GB GDDR6X",
//     description:`-Tipo De Conexion PCI Express 4.0 <br>\n
//                     -Chipset GPU RTX 3080 <br>\n
//                     -Producto LHR Si <br>\n
//                     -Salidas HDMI 1 <br>\n
//                     -Salidas DVI-D No <br>\n
//                     -Salidas DisplayPort 3 <br>\n
//                     -Salidas VGA No <br>\n
//                     -Consumo 350 W <br>`,
//     price:258495.02, 
//     image:"/assets/images/products/Nvidia-Geforce-RTX-3080-10GB.webp"
// },
// {
//     name:"Motherboard Asus Rog Strix Z690-I Gaming Wifi DDR5 S1700",
//     description:`-Socket: 1700 <br>\n
//                     -Chipset: Z690 <br>\n
//                     -Plataforma: Intel <br>\n
//                     -Salidas HDMI: 1 <br>\n
//                     -Salidas VGA: No <br>\n
//                     -Salidas DisplayPort: No <br>\n
//                     -Salidas DVI-D: No <br>\n
//                     -Puertos SATA: 4 <br>\n
//                     -Slot M2: 2 <br>\n
//                     -Slot PCI-E 16X: 1 <br>`,
//     price:142027.11,
//     image:"/assets/images/products/Motherboard-Asus-Rog-Strix-Z690.webp"
// },
// {
//     name:"Micro Intel I9-11900KF 5.3Ghz 16Mb S.1200",
//     description:`-Modelo: I9 11900KF <br>\n
//                     -Familia: Intel <br>\n
//                     -Nucleos: 8 <br>\n
//                     -Hilos: 16 <br>\n
//                     -Frecuencia: 5.3 Ghz <br>\n
//                     -Proceso De Fabricacion: 14 Nm <br>\n
//                     -Grafica Integrada: N/A <br>\n
//                     -Socket: S.1200 <br>`,
//     price:148608.38,
//     image:"/assets/images/products/Intel-i9.webp"
// },
// {
//     name:"Silla Gamer Genesis Nitro 950 Black",
//     description:`-Capacidad De Peso: 150 Kg <br>\n
//                     -Peso Del Producto: 24.5 Kg <br>\n
//                     -Accesorios: NO <br>\n
//                     -Ancho Del Respaldo: 520 Mm <br>\n
//                     -Largo Del Respaldo: 865 Mm <br>\n
//                     -Ajuste De Altura: Si <br>`,
//     price:128864.87,
//     image:"/assets/images/products/Silla-gamer-genesis.webp"
// }]; 

// localStorage.setItem("Products", JSON.stringify(Products))

localStorage.setItem("users", JSON.stringify(Users))

let Products = JSON.parse(localStorage.getItem("Products")) || [];
let Order = JSON.parse(sessionStorage.getItem("order")) || [];


const cardsContainer = document.getElementById('cards-container')


function renderizarCard(listaProducts) {
    //iterar el array para acceder a cada producto
    cardsContainer.innerHTML = "";

    if (listaProducts.length === 0) {
        cardsContainer.innerHTML = `<h1 class="disabled">ERROR, NO SE ENCONTRARON PRODUCTOS</h1>`;
        return;
    }

    listaProducts.forEach((producto) => {
        let imageSrc = producto.image ? producto.image : '/assets/images/funciones-pagina/not-found.webp';

        // Buscar el índice correspondiente en la lista original usando el nombre del producto
        let index = Products.findIndex((p) => p.name === producto.name);

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
                                <a class="card__btn" href="/" onclick="addToCart(event, ${index})">
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

renderizarCard(Products)

function searchProduct() {
    var searchTerm = document.getElementById('search-input').value;
    var products = JSON.parse(localStorage.getItem('Products'));
    var foundProducts = products.filter(function(product) {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    var productCountElement = document.getElementById('product-count');
    productCountElement.textContent = 'Se encontraron ' + foundProducts.length + ' productos';

    renderizarCard(foundProducts)
}



function addToCart(event, productId) {
    event.preventDefault();

    const product = Products[productId];
    
    // Buscar si el producto ya está en el carrito
    const index = Order.findIndex(item => item.name === product.name);
    
    if (index !== -1) { // Si el producto ya está en el carrito, aumentar su cantidad
        Order[index].quantity++;
    } else { // Si el producto no está en el carrito, agregarlo con cantidad 1
        const newProduct = {
        ...product,
        quantity: 1
        };
        Order.push(newProduct);
    }
    
    // Guardar el carrito actualizado en el localStorage
    sessionStorage.setItem("order", JSON.stringify(Order));
    console.log(Order);
    window.location.replace("/pages/order-detail/order-detail.html");
}



function deleteProduct(id) {
    const productName = Products[id].name;

    if (confirm(`¿Está seguro que desea borrar el producto ${productName}?`)) {
        Products.splice(id, 1);

        localStorage.setItem("Products", JSON.stringify(Products));

        // showAlert(`Elemento borrado correctamente.`);

        showAlert(`El elemento "${productName}" borrado correctamente`, 'success')

        renderizarTabla()
        return
    } else {
        showAlert(`Error al borrar el producto`, 'error');
        return; //es como poner return null, incluso se podria dejar sin el else, para que no haga nada
    }
}


function editProduct(id) {

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