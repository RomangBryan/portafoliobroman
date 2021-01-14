const nombre = document.getElementById("name")
const email = document.getElementById("email")
const asunto = document.getElementById("subject")
const mensaje = document.getElementById("message")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <5){
        warnings += 'nombre debe tener minimo 5 caracteres <br>'
            entrar = true
    }

    if(asunto.value.length <4){
        warnings += 'asunto debe tener minimo 4 caracteres <br>'
            entrar = true
    }

    if(mensaje.value.length <5){
        warnings += 'mensaje debe tener minimo 5 caracteres <br>'
            entrar = true
    }

    /* if(!regexEmail.test(email.Value)){
        warnings += 'El email no es valido'
            entrar = true
    } */

    if(entrar){
        parrafo.innerHTML = warnings
    }
    else{
        parrafo.innerHTML = ""
    }
    
});