const signIn = document.getElementById('sign-in');
const navbarList = document.getElementById('navbar-list')


function renderHeaderLinks(){    

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    
    if(currentUser){//pregunta si el usuario existe
        signIn.innerHTML =  '<div onclick="logout()" class="navbar__nav-link">Logout</div>'

        if(currentUser.role === 'ADMIN_ROLE'){

            const adminProductLink = createListItemElement('admin-product', 'Admin Product');

            const adminUserLink = createListItemElement('admin-user', 'Admin Users');
            //const li = document.createElement('li')   //? SI quisieramos que quede bien seria esta linea (ejemplo 1)            

            navbarList.appendChild(adminProductLink) //y ahora lo agregamos al navbar
            navbarList.appendChild(adminUserLink) //y ahora lo agregamos al navbar
        }

    }else{        
        const link = createLinkElement('login', 'Login')
        signIn.replaceChildren(link)

        //esto es lo mismo que lo que hace arriba pero insertando todo por js
        //signIn.innerHTML = '<a href="/pages/login/login.html" class="navbar__nav-link">Login</a>'
    }
}

function createListItemElement(path, text){
    const listItem = document.createElement('li')
    listItem.classList.add('navbar__nav-item')

    listItem.setAttribute('id', path)
    link = createLinkElement(path,  text) //insertamos dentro del li el adminProductLink y lo mismo con el siguiente

    listItem.appendChild(link)
    return listItem
}


//con la siguiente funcion creamos las rutas de acceso, entonces segun cada cosa que hagamos tendra su pagina
function createLinkElement(path, text, type = null){
    let li;
    const link = document.createElement('a')
    link.classList.add('navbar__nav-link')
    link.href =`/pages/${path}/${path}.html`
    //link.setAttribute('target', '_blank')
    link.innerText = text
    
    //  ESTA SERIA LA MEJOR FORMA DE HACERLO //? SI quisieramos que quede bien seria esta linea para abajo, hasta return type (ejemplo 1)
    //if(type){ //si ingresa un tipo, va a crear un nuevo elemento en el navbar
    //     li = document.createElement(type)
    //     li.appenChild(link)
    // }
    // return type ? li : link
    return link
}

function logout(){
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if(currentUser.role === 'ADMIN_ROLE'){
        document.getElementById('admin-product').remove(); //eliminamos los 2 botones cuando nos deslogueamos de un role admin
        document.getElementById('admin-user').remove(); //eliminamos los 2 botones cuando nos deslogueamos
    }

    localStorage.removeItem('currentUser');
    renderHeaderLinks();
}

renderHeaderLinks();

