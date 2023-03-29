//1- Obtener formulario y almacenarlo en una variable de JS
const registerForm = document.querySelector('#register');
console.log(registerForm)
    //a- Obtener boton de submit
const registerBtn = document.getElementById('registerSubmit');
//2- Vamos a escuchar el evento directamente en JS
registerForm.addEventListener('submit', (event)=>{
    console.log('Submit event')
    //a- preventDefault
    event.preventDefault();
    //b- Tomar los datos y armar el objeto usuario
    const el = event.target.elements
    console.log(el)
    
    //d- Verificar que los datos ingresados de password1 y password2 son exactamente igual
    if(el.password1.value !== el.password2.value){
        showAlert(`El password no coincide`, 'warning')
        return
    }
    
    //c- Verificar si hay en el localStorage algun usario guardado ya con ese mail
        // a- Obtener los usuarios guardados
        const users = JSON.parse(localStorage.getItem('users')) || []; //Le ponemos [] ya que si no encuentra nada, lo inicializamos en un vector vacio
        
        const userExist = checkIfUserExist(users, el.email.value)
        
        // c-  3 versiones: 
        // existe: retorno y muestro un alert
        if(userExist){ //creo que lo mejor seria borrar la constante y directamente llamar a la funcion dentro del if
            return
        }

        // no existe: sigo con mi codigo normalmente

    
    const user = {
        name: el.name.value,
        age: el.age.value,
        password: el.password1.value,
        email:  el.email.value,
        gender: el.sex.value //aca yo lo llamo por id sex ya que gender no me funciona porque el id deberia de ser gender, que eso lo tengo que cambiar
    }

    //e- Insertar en mi array de usuarios el nuevo user (lista de usuarios)
    users.push(user)

    //f- Guardarlo en el localStorage
    localStorage.setItem('users', JSON.stringify(users)) //users ahora tiene un usuario mas

    //g- Limpiamos el formulario, o podemos llevar al usuario a la pagina de login
        //I- reseteamos nuestro formulario, comunmente es para productos    
            // registerForm.reset //con eso limpiamos nuestro formulario

        //II- Lo movemos a otra pagina
            // window.location.href = 'pages/login/login.html' //aca hay que ridereccionarlo al home por ejemplo, /index.html
        
    showAlert('El usuario se registro correctamente', 'success')

})


function checkIfUserExist(users, emailToSearch){
      // b- Recorrer el array con un forEach, findIndex o find
        // !============ Solucion 1
        // let userEmailExist = false;
        // users.forEach(usr => {
            
        //     if(usr.email === el.email.value){

        //         userEmailExist = true;

        //     } 

        // });

        // if(userEmailExist){//de esta manera, una vez despues de recorrer el array preguntariamos por cual de los motivos salio y si es true devuelve que ya existe
        //     console.warn(`El usuario ya existe`);
        //     return 
        // }

        // *============ Solucion 2 y la mejor
        /* tambien se puede escribir asi, ya que solamente es una linea y como tiene que devolver false o true es buenisima esta forma de escribirlo
        const userExist2 = users.find(user => { return user.email === el.email.value})*/
        const userExist = users.find(user => {

            if(user.email === emailToSearch){
                return true;
            }
            return false; //no es necesario poner esta linea ya que si no lo ponemos, va a retornar undefined y esto es = a false
        })

        if(userExist){
            console.warn(`El usuario ya existe`);
            return true
        }

        // *=========== Solucion 3 que tambien sirve, solo que aca devuelve el index
        // const indexOfUser = users.findIndex( usuario =>{
        //     if(usuario.email === el.email.value){
        //         return true
        //     }
        // })

        // if(indexOfUser>=0){ //(indexOfUser>!==-1) tambien se puede poner esta ya que cuando no se encuentra ningun indice va a retornar -1 y sino tenemos que poner que sea >=0 porque cuando es cero y esta en un if ahi toma que es false
        //     console.warn(`El usuario ya existe`);
        //     return
        // }

}

function showAlert(text, type){
    
    // * VAMOS A HACER NUESTRO ALERT CUSTOM

    // Crea un elemento HTML node
    const alertDialog = document.createElement('div')
    // Añade una clase
    alertDialog.classList.add('alert-dialog')
    if(type === 'error'){
        alertDialog.style.backgroundColor= 'red'
    }

    if(type === 'warning'){
        alertDialog.style.backgroundColor= 'orange'
    }

    alertDialog.innerText = text;       

    document.querySelector('body').appendChild(alertDialog)

    
    setTimeout(()=>{      

        //alertDialog.classList.add('hidden')
        alertDialog.remove() //Lo que hacemos es eliminar el cartel del HTML porque lo que va a ir haciendo es acumular varias lineas de codigo innecesariamente por cada carga

    }, 3000)
}