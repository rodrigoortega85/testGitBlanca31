//Inputs
let inputNombre = document.getElementById('inputNombre')
let inputTelefono = document.getElementById('inputTelefono')
let inputPizza = document.getElementById('inputPizza')

//etiqueta p
let mostrarNombre = document.getElementById('nombre')
let mostrarTelefono = document.getElementById('telefono')
let mostrarPizza = document.getElementById('pizza')
//boton
let boton = document.getElementById('boton')
//card
let card = document.getElementById('card')



const accion = () => {

    let textoNombre = inputNombre.value
    let textoTelefono = inputTelefono.value
    let textoPizza =  inputPizza.value
    let mayus = textoPizza.toUpperCase()

    if (mayus === "SI") {
        mostrarPizza.innerHTML = ":("
    } if (mayus === "NO") {
        mostrarPizza.innerHTML = ":)"
        }else {
            mostrarPizza.innerHTML = "Poner dato valido"
    }
    //aparecer card
    card.classList.remove("desaparecer")
    mostrarNombre.innerHTML = textoNombre
    mostrarTelefono.innerHTML = textoTelefono

}



boton.addEventListener('click', accion)