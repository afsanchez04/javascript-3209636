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