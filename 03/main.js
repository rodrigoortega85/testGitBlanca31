// let edad = prompt('Ingresa tu edad')

// Number(edad)

// if(edad >= 18) {
//     console.log('Puedes entrar')
// } else{
//     console.log('No puedes entrar')
// }

// 

// let edad = prompt('Ingresa tu edad')
// if(edad < 16) {
//     console.log('No puedes sacar tu licencia')
// }else if(edad >= 16 || edad === 17){
//     console.log('Puedes sacar un permiso')
// }else {
//     console.log('No puedes')
// }

//si mi numero es par escribir en consola *Numero* es par 
//si mi numero es impar escribir en consola *Numero* es impar
//Modulo -> °

// let numero = prompt('Ingresa el numero')
// if(numero % 2  === 0){
//     console.log(numero + ' es par')
// } else {
//     console.log(numero + ' es impar')
// }

//piedra papel o tijera
let player1 =prompt('Player1 elige Piedra Papel o Tijera')
let player2 =prompt('Player2 elige Piedra Papel o Tijera')

if (player1 === player2){
    console.log('Empate')
} else if(player1 === 'piedra' || 'Piedra' && player2 === 'tijera'|| 'Tijera'){
    console.log('Gana Player1')
} else if(player1 === 'piedra' || 'Piedra' && player2 === 'papel' || 'Papel'){
    console.log('Gana Player2')
} else if(player1 === 'papel' || 'Papel' && player2 === 'piedra' || 'Piedra'){
    console.log('Gana Player1')
} else if(player1 === 'papel' || 'Papel' && player2 === 'tijera' || 'Tijera'){
    console.log('Gana Player2')
} else if(player1 === 'tijera' || 'Tijera' && player2 === 'piedra' || 'Piedra'){
    console.log('Gana Player2')
} else if(player1 === 'tijera' || 'Tijera' && player2 === 'papel' || 'Papel'){
    console.log('Gana Player1')
} else{
    console.log('Favor de ingresar los datos correctos')
}
