const infoComic = document.querySelector(".info-comic")
const listaCapitulos = document.querySelector(".lista-capitulos")

console.log(infoComic)
console.log(listaCapitulos)

//Modificar el contenido de info general del comic

infoComic.innerHTML = `
  <p>${comic.year}</p>
  <h1>${comic.nombreComic}</h1>
  <p>${comic.sinopsis}</p>
  <p>Género: ${comic.genero.join(", ")}</p>
  <p>Personajes ${comic.personajes.join(", ")}</p>
`

//Aquí vamos a mostrar las tarjetas de escenas

//console.log(comic.escenas)

comic.escenas.forEach(escena => {
  const miCard = document.createElement("div")
  miCard.classList.add("tarjeta-cap") 
  miCard.innerHTML = `
    <img src="${escena.image}" />
    <p>${escena.nombre}</p>
  `

  infoComic.appendChild(miCard)
  console.log(escena.nombre)
});

//["1","2","3","4"]