const params = window.location.sesarch;

console.log(params)

//forma 1 de buscar el id
//const index = params.split('id=')[1].split('&')[0];

//forma 2 de buscar el id (es el metodo recomendado para obtener queryParams usando URLSearchParams)
const paramsUrl = new URLSearchParams(params) //lo bueno de usar esto, es que me crea un objeto con todos los parametros que se mandan en la URL

const paramsEntries = Object.fromEntries(paramsUrl) //aca me forma un objeto con por cada parametro me va a formar un array, donde el primer valor va a ser el nombre del param y el segundo el valor del param

console.log(paramsEntries)

const id = paramsEntries.id //accedo al id desde la constante donde me trajo cada parametro

const products = JSON.parse(localStorage.getItem('products'))

const product = products[id]

document.body.innerHTML = `<p>${JSON.stringify(product)}</p><img src=${product.image}>` //Esto lo que me está haciendo, seria imprimir el producto que yo estaba buscando, segun el boton de detalle del producto que yo aprete
                            