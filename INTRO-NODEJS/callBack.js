function soyAsincrona() {
    console.log('Hola soy Asincrona')

    setTimeout(() => {
        console.log('Estoy siendo asincrona')
    } , 300)
}

console.log('Iniciando proceso...')

console.log('Terminando proceso...')

soyAsincrona()


/*https://rickandmortyapi.com/api
 {
  "characters": "https://rickandmortyapi.com/api/character",
  "locations": "https://rickandmortyapi.com/api/location",
  "episodes": "https://rickandmortyapi.com/api/episode"
}*/


