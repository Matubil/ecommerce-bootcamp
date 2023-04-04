const signIn = document.getElementById('sign-in');



function renderHeaderLinks(){    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))
    if(currentUser){//pregunta si el usuario existe
        signIn.innerHTML =  '<div onclick="logout()" class="navbar__nav-link">Logout</div>'
    }else{
        const link = document.createElement('a')
        link.classList.add('navbar__nav-link')
        link.href ='/pages/login/login.html'
        link.setAttribute('target', '_blank')

        link.innerText = 'Login'

        signIn.replaceChildren(link)

        //esto es lo mismo que lo que hace arriba pero insertando todo por js
        //signIn.innerHTML = '<a href="/pages/login/login.html" class="navbar__nav-link">Login</a>'
    }
}

function logout(){
    localStorage.removeItem('currentUser');
    renderHeaderLinks();
}

renderHeaderLinks();

