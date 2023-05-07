const registerForm = document.querySelector('#register');
console.log(registerForm)
const registerBtn = document.getElementById('registerSubmit');

registerForm.addEventListener('submit', (event)=>{
    console.log('Submit event')
    event.preventDefault();
    const el = event.target.elements
    console.log(el)
    
    if(el.password1.value !== el.password2.value){
        showAlert(`El password no coincide`, 'warning')
        return
    }
    
        const users = JSON.parse(localStorage.getItem('users')) || []; 
        const userExist = checkIfUserExist(users, el.email.value)
        
        if(userExist){ 
            showAlert(`El mail ya se encuentra registrado`, 'error');
            return;
        }


    
    const user = {
        name: el.name.value,
        age: el.age.value,
        password: el.password1.value,
        email:  el.email.value,
        gender: el.sex.value,
        role: 'USER_ROLE'
    }

    users.push(user)

    localStorage.setItem('users', JSON.stringify(users))

    showAlert('El usuario se registro correctamente', 'success')

})


function checkIfUserExist(users, emailToSearch){

        const userExist = users.find(user => {

            if(user.email === emailToSearch){
                return true;
            }
            return false; //no es necesario poner esta linea ya que si no lo ponemos, va a retornar undefined y esto es = a false
        })

        if(userExist){
            console.warn(`El usuario ya existe`)
            return true
        }

}

