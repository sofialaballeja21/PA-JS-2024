//1. Creación de un Objeto Básico:
//Crea un objeto llamado libro con propiedades como título, 
//autor y añoDePublicacion. Imprime cada propiedad en la consola.
const libro = {
    titulo: 'Mas allá del mar',
    autor: 'Laura G. Miranda',
    añoDePublicacion: '2015',
//3. Métodos en Objetos:
//○ Añade un método llamado descripción al objeto libro que devuelva
//una cadena describiendo el título y el autor del libro. Invoca este
//método e imprime el resultado.
     descripcion: function() {
        console.log('Laura G. Miranda ha logrado un estilo propio')
     }
}
console.log(libro.descripcion())

//2. Anidación de Objetos:
//Crea un objeto llamado estudiante con propiedades nombre, 
//edad y direccion. direccion debe ser otro objeto con propiedades 
//calle, ciudad y pais. Imprime la dirección completa del estudiante.
const estudiante ={
    nombre: 'Renzo',
}

const ubicacion = {
    calle: 'Pedro',
    ciudad: 'Concepcion del Uruguay',
    pais: 'Argentina'
}
console.log(estudiante, ubicacion)

//3. Métodos en Objetos:
//○ Añade un método llamado descripción al objeto libro que devuelva
//una cadena describiendo el título y el autor del libro. Invoca este
//método e imprime el resultado.





























