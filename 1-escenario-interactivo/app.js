 //1. Capturar variables
 const diamantes = document.querySelectorAll(".diamond")
 const counter = document.querySelector(".contador")
 let i = 0
 let j = 0 //solo samuel

 console.log(diamantes) //No puede dar null
 console.log(counter)

 //2. Crear las funciones 

 diamantes.forEach( item => {
  //lo que yo le diga aquí
  //console.log("Elemento: ", item)
  
  item.addEventListener("click", () => {
    item.classList.add("saltar")
    i++
    counter.textContent = `Score ${i}`
  })


  item.addEventListener("animationend", () => {
    item.style.display = "none"
  }, {once: true})

 } )

 //3. Llamar eventos