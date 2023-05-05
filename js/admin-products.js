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

// ! DESCOMENTAR LO DE ARRIBA PARA CARGAR LOS PRODUCTOS E IR A LA PESTAÑA ADMINPRODUCT


var Products = JSON.parse(localStorage.getItem("Products")) || []; 

// ! Intentar implementar favoritos
let favorites = [];

const productForm = document.getElementById('add-product')//Se puede escuchar eventos sin necesidad de poner el onsubmit en el html, siempre que los almacene en una variable, en el html voy a dejar eso escrito como deberia de estar y como está ahora es como dejó explicado el profesor *2
productForm.addEventListener('click', () => {
    console.dir(productForm.dataset) //un dataset es un conjunto de propiedad que yo puedo definir y puedo leer sobre mi HTML la propiedad custom
})

const submitBtn = document.getElementById('submit-btn') 

//Obtener el body de la tabla para poder modificarlo desde JS
const tableBody = document.getElementById('table-body')

let editIndex;

function renderizarTabla(){
    //iterar el array para acceder a cada producto
    tableBody.innerHTML = ""; //lo que hace esto o para lo que está es para que cada vez que se cargue la funcion, se borre toda la tabla

    if(Products.length === 0){
        tableBody.innerHTML = `<tr class="disabled"><td colspan="6">NO SE ENCONTRARON PRODUCTOS</td></tr>`; //colspan es para que ocupe hasta cierta cantidad de columnas

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

// !-- Intentar Implementar
/*function setFavoriteProduct(id){

    const favCount = 0; //esto sirve para lo de varios favoritos
    const prodFiltradosFavoritos = Products.forEach( prod =>{
        if(prod.favorite){
            favCount++
        }
    })

    Products.forEach((prod, index)=> {
        if(id === index) prod.favorite = true;
        else prod.favorite = false;
    })

    localStorage.setItem("favorites", JSON.stringify(favorites))

    renderizarTabla();
}*/