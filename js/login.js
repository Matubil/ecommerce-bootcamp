// // 1-a guardo el formulario en una varibale
// const loginForm = document.getElementById('loginForm')
// const URL = 'http://localhost:8000/api'

// // 1- Obtener los datos del formulario
// loginForm.addEventListener('submit', async (event)=> {
//     event.preventDefault();

//     const {email, password} = loginForm.elements;

//     console.log(email.value, password.value)

//     console.log(loginForm.elements)

//         try {
//             const dataBody = {
//                 email: email.value,
//                 password: password.value
//             }

//             const resp = await axios.post(`${URL}/login`, dataBody) //clase 63 min 1:40 empieza uso de axios

//             console.log(resp)

//             console.log(resp.data) //clase 63 1:57

//             // const token = resp.data.token
//             // const user = resp.data.token
//             // const msg = resp.data.token

//             const {token, user, msg} = resp.data.token //esto es lo mismo que escribir la linea de arriba

//             localStorage.setItem('token', token)
//             localStorage.setItem('currentUser', JSON.stringify(user))

//             showAlert(msg);

//             // setTimeout(()=>{
//             //     window.location.href = '/'; //va a la home, si quisiesemos ir a una de las páginas en especial ahi si elegimos la ruta que queremos 
//             // },1500)

//         } catch (error) {
//             console.log(error)
//         }


//         //!dijo que lo de abajo ya ni va
//         // localStorage.setItem('currentUser', JSON.stringify(user)) //tambien se puede poner fuera del if, ya que el if anterior tenia la validacion de la contraseña tambien

//         // //TODO: insertar alerta custom
//         // showAlert('Login Correcto, te redireccionaremos en unos instantes...')
// });




//!PARA LA PARTE DE FRONT CON JS
// 1-a guardo el formulario en una varibale
const loginForm = document.getElementById('loginForm')

// 1- Obtener los datos del formulario
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const { email, password } = loginForm.elements;

    console.log(email.value, password.value)

    // 2- Chequear datos ingresados con los usuarios que tengo
    // a- Obtener los usuarios almacenados
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // b- Email que ingreso si lo tiene algun usuario de mi array
    const user = users.find((usr) => {
        if (usr.email === email.value) {
            return true;
        }
    })

    if (!user || user.password !== password.value) {
        showAlert('Login incorrecto', 'error')
        return;
    }

    // c- si los mails coinciden ver si las passwords son las mismas
    //    /* if(user.password === password.value){
    //         localStorage.setItem('currentUser', JSON.stringify(user))
    //         alert('Login correcto')
    //         return;
    //     }else{
    //         alert('Los datos ingresadors no son correctos')
    //         return;
    //     }


    localStorage.setItem('currentUser', JSON.stringify(user)) //tambien se puede poner fuera del if, ya que el if anterior tenia la validacion de la contraseña tambien

    //TODO: insertar alerta custom
    showAlert('Login Correcto, te redireccionaremos en unos instantes...')

    setTimeout(() => {
        window.location.href = '/'; //va a la home, si quisiesemos ir a una de las páginas en especial ahi si elegimos la ruta que queremos 
    }, 1500)
    //!dijo que lo de abajo ya ni va
})