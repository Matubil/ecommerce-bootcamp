let Users = JSON.parse(localStorage.getItem("users")) || []; 

const userForm = document.getElementById('add-product')//Se puede escuchar eventos sin necesidad de poner el onsubmit en el html, siempre que los almacene en una variable, en el html voy a dejar eso escrito como deberia de estar y como está ahora es como dejó explicado el profesor *2
userForm.addEventListener('click', () => {
    console.dir(userForm.dataset) //un dataset es un conjunto de propiedad que yo puedo definir y puedo leer sobre mi HTML la propiedad custom
})

const submitBtn = document.getElementById('submit-btn') 

//Obtener el body de la tabla para poder modificarlo desde JS
const tableBody = document.getElementById('table-body')

let editIndex;

function renderizarTabla(){
    //iterar el array para acceder a cada producto
    tableBody.innerHTML = ""; //lo que hace esto o para lo que está es para que cada vez que se cargue la funcion, se borre toda la tabla

    if(Users.length === 0){
        tableBody.innerHTML = `<tr class="disabled"><td colspan="6">NO SE ENCONTRARON USUARIOS</td></tr>`; //colspan es para que ocupe hasta cierta cantidad de columnas

        return
    }
    Users.forEach((usuario, index) =>{    
        //!! let imageSrc = usuario.image ? usuario.image : '/assets/images/no-product.png'; esta seria otra forma de preguntar el let y el if, con el operador ternario

        const tableRow = `
                            <tr class="product">
                                <td class= "product__name">
                                    ${usuario.name}
                                </td>
                                <td class= "product__desc">
                                    ${usuario.email}    
                                </td>
                                <td class= "product__price">
                                    ${usuario.role}
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

    })
}

renderizarTabla()

                    
function addUser(evt){
    evt.preventDefault(); //esto se pone porque la pagina se vive recargando, entonces se pone eso para que no se recargue la pagina
    console.dir(evt.target); //puedo ver las cosas que trae por defecto ese evento
    console.log(evt.target);

    const elements = evt.target.elements


    const newUser = {
        name: elements.name.value,
        email: elements.email.value,
        role: elements.role.value
    };

    const newFormData = new FormData(evt.target);
    const newUserFormData = Object.fromEntries(newFormData); //aca ya tengo el objeto ya armado

    newUserFormData.price = +newUserFormData.price; //lo convierte en int

    console.log(newUser)

    if(editIndex >= 0){
        Users[editIndex] = newUser;
        showAlert(`El usuario se edito correctamente`, 'warning')
        return
    } else{
        Users.push(newUser)
        showAlert(`El usuario se agrego correctamente`, 'success')
    }

    //Guardarlo  en el localStorage, si yo borro la cache se borra mi localStorage
    localStorage.setItem("users",  JSON.stringify(Users))

    editIndex = undefined 

    submitBtn.classList.remove('edit-btn') 

    submitBtn.innerText = 'Cargar usuario'

    console.log(Users)

    renderizarTabla()

    evt.target.reset() //resetea a la altura del form para que siga cargando

    elements.name.focus(); //esta tambien le deja el focus del puntero ahi en el elemento name de la tabla
}



function deleteProduct(id){
    const userName = Users[id].name;

    if (confirm(`¿Está seguro que desea borrar el usuario ${userName}?`)) {
        Users.splice(id, 1);

        localStorage.setItem("users", JSON.stringify(Users));

        // showAlert(`Elemento borrado correctamente.`);

        showAlert(`El elemento "${userName}" borrado correctamente`, 'success')
        
        renderizarTabla() 
        return   
    }else{
        showAlert(`Error al borrar el usuario`, 'error');
        return; //es como poner return null, incluso se podria dejar sin el else, para que no haga nada
    }
}  


function editProduct(id){    

    submitBtn.classList.add('edit-btn') //le agrega una clase al boton para que tome los estilos del css
    submitBtn.innerText = 'Modificar usuario' //va a cambiar lo que dice el boton

    let user = Users[id];
    const el = userForm.elements;
    el.name.value = user.name
    el.email.value = user.email
    el.role.value = user.role
    
    editIndex = id; //esta declarado arriba de renderizarTabla y se hace para que podamos traernos el id del que estamos editando para mas tarde que se termine de modificar
}
