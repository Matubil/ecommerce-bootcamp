let Users = JSON.parse(localStorage.getItem("users")) || [[{"name":"prueba","age":"","password":"alfabeta","email":"admin@gmail.com","gender":"1","role":"ADMIN_ROLE"}]]; 

localStorage.setItem("users", JSON.stringify(Users))


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
        // i- Obtener los usuarios guardados
        const users = JSON.parse(localStorage.getItem('users')) || []; //Le ponemos [] ya que si no encuentra nada, lo inicializamos en un vector vacio
        
        const userExist = checkIfUserExist(users, el.email.value)
        
        // ii-  3 versiones: 
        // existe: retorno y muestro un alert
        if(userExist){ //creo que lo mejor seria borrar la constante y directamente llamar a la funcion dentro del if     
            showAlert(`El mail ya se encuentra registrado`, 'error');
            return;
        }

        // no existe: sigo con mi codigo normalmente

    
    const user = {
        name: el.name.value,
        age: el.age.value,
        password: el.password1.value,
        email:  el.email.value,
        gender: el.sex.value,//aca yo lo llamo por id sex ya que gender no me funciona porque el id deberia de ser gender, que eso lo tengo que cambiar
        role: 'USER_ROLE'
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

        // *============ Solucion 2 y la mejor
        /* tambien se puede escribir asi, ya que solamente es una linea y como tiene que devolver false o true es buenisima esta forma de escribirlo
        const userExist2 = users.find(user => return user.email === el.email.value), ademas lo que podes hacer es prescindir de las llaves*/
        const userExist = users.find(user => {

            if(user.email === emailToSearch){
                return true;
            }
            return false; //no es necesario poner esta linea ya que si no lo ponemos, va a retornar undefined y esto es = a false
        })

        if(userExist){ //!--MINUTO 42
            console.warn(`El usuario ya existe`)
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

