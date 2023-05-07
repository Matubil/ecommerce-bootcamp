// 1-a guardo el formulario en una varibale
const loginForm = document.getElementById('loginForm')

// 1- Obtener los datos del formulario
loginForm.addEventListener('submit', (event)=> {
    event.preventDefault();

    const {email, password} = loginForm.elements;

    console.log(email.value, password.value)
    
    // 2- Chequear datos ingresados con los usuarios que tengo
        // a- Obtener los usuarios almacenados
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // b- Email que ingreso si lo tiene algun usuario de mi array
        const user = users.find((usr) => {
            if(usr.email === email.value) {
                return true;
            }
        })

        if(!user || user.password !== password.value){
            showAlert('Login incorrecto', 'error')
            return;
        }
        
        // c- si los mails coinciden ver si las passwords son las mismas
       /* if(user.password === password.value){
            localStorage.setItem('currentUser', JSON.stringify(user))
            alert('Login correcto')
            return;
        }else{
            alert('Los datos ingresadors no son correctos')
            return;
        }*/


        localStorage.setItem('currentUser', JSON.stringify(user)) //tambien se puede poner fuera del if, ya que el if anterior tenia la validacion de la contraseña tambien

        //TODO: insertar alerta custom
        showAlert('Login Correcto, te redireccionaremos en unos instantes...')

        setTimeout(()=>{
            window.location.href = '/'; //va a la home, si quisiesemos ir a una de las páginas en especial ahi si elegimos la ruta que queremos 
        },1500)
});
// 3- Vamos a guardar en el localStorage un registro que va a ser currentUser - user

// FUNCTION LOGOUT
// 1- Borramos el registro del localStorage