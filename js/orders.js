const badgeHTML = document.getElementById('card-count')

//va a ser la lista de lo que la persona ordene y vaya agregando

let order = {
    products: [ 
        { 
            productName: 'XBOX', //name del producto es igual a un productName
            cantidad: 2,
            price: 1000
        },
        {
            productName: 'Switch',
            cantidad: 1,
            price: 20000
        },
        {
            productName: 'Switch',
            cantidad: 3,
            price: 20000
        }
    ],
    user: 'email@gmail.com',
    total: 30000
}

function actualizarBadge(){
    badgeHTML.innerText = order.products.reduce((acc, producto)=> {
        return acc += producto.cantidad //va a ir sumando cada uno de los productos que voy agregando, incluso si del mismo producto agrego 2 o +

    },0)

    // let count;  // *ESTO HACE LO MISMO QUE ARRIBA PERO ES UNA MANERA MAS SIMPLE PARA ENTENDER, LA DE ARRIBA ES LA RECOMENDADA Y COMO VAMOS A TENER QUE HACER TAMBIEN EL CALCULO DEL TOTAL
    // order.products.forEach(prod => {
    //     count += prod.cantidad
    // })

    // badgeHTM.innerText = count
}

actualizarBadge()

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