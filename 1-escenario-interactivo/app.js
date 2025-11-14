const monedas = document.querySelectorAll(".coins")
const score = document.querySelector(".puntaje")
let marcador = 0

console.log(monedas) /*no debe dar null*/
console.log(score)

monedas.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.add("saltomoneda")
        marcador++
        score.textContent = `X ${marcador}`
    })






    item.addEventListener("animationend", () => {
        item.style, display.add = "none"
    }, { once: true })



})

/*////////////////////////////////////////////////////////////////////////////////////////////////*/

const shyguys = document.querySelectorAll(".sg")
const score2 = document.querySelector(".puntaje2")
let marcador2 = 0


shyguys.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.add("saltoshyg")
        marcador2++
        score2.textContent = `X ${marcador2}`
    })

    item.addEventListener("animationend", () => {
        item.style, display.add = "none"
    }, { once: true })



})

/*////////////////////////////////////////////////////////////////////////////////////////////////*/

const goombas = document.querySelectorAll(".gb")
const score3 = document.querySelector(".puntaje3")
let marcador3 = 0


goombas.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.add("caidagoomba")
        marcador3++
        score3.textContent = `X ${marcador3}`
    })

    item.addEventListener("animationend", () => {
        item.style, display.add = "none"
    }, { once: true })



})


/* Carrusel */

//1. Variables
const escenas = document.querySelectorAll(".escena")
const btnAnterior = document.querySelector(".btn-anterior")
const btnSiguiente = document.querySelector(".btn-siguiente")
const miniaturas = document.querySelectorAll(".miniatura")
let indice = 0

console.log(escenas) //NodeList
console.log(btnAnterior) //div, button
console.log(btnSiguiente) //div, button
console.log(miniaturas) //NodeList

//2. Funciones 
function mostrarEscena(i) {
    for (let j = 0; j < escenas.length; j++) {
        escenas[j].classList.remove('activa')
    }
    escenas[i].classList.add('activa')
    indice = i
}
mostrarEscena(2)

//Funcion Anterior
btnAnterior.addEventListener("click", () => {
    indice = indice - 1
    if (indice < 0) {
        indice = escenas.length - 1 //Para ir a la última imagen
    }
    mostrarEscena(indice)
})


//Funcion Siguiente
btnSiguiente.addEventListener("click", () => {
    indice = indice + 1
    if (indice > escenas.length - 1) {
        indice = 0
    }
    mostrarEscena(indice)
})

//Función miniatura
miniaturas.forEach( (min, i) => {
    min.addEventListener("click", () => {
        mostrarEscena(i)
    })
});

//3. Eventos
