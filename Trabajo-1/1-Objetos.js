//1. Creación de un Objeto Básico:
//Crea un objeto llamado libro con propiedades como título, 
//autor y añoDePublicacion. Imprime cada propiedad en la consola.
/*const libro = {
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
console.log(estudiante, ubicacion)*/

/*4. Iteración sobre Propiedades de un Objeto:
○ Crea un objeto producto con propiedades como nombre, precio y
disponible. Usa un bucle for...in para imprimir todas las propiedades
y sus valores.

const producto = {
    nombre: 'Arroz', precio: '$690.95', disponible: true,
    nombre: 'Fideo', precio: '$1100', disponible: false}

for (const a in producto) {
    console.log(a + ':' + producto[a])
}*/

/*5. Actualización de Propiedades:
○ Modifica el valor de la propiedad precio del objeto producto y luego
imprime el objeto completo para verificar el cambio.*/

const producto = {
    nombre: 'Arroz', precio: '$690.95', disponible: true}

/*for (const a in producto) {
    console.log(a + ':' + producto[a])
}
producto.precio = '$780.00'
console.log('Producto modificado:', producto)*/

/*6. Comprobación de Propiedades:
○ Crea una función llamada tienePropiedad que tome un objeto y una
cadena como parámetros, y devuelva true si el objeto tiene una
propiedad con ese nombre, o false en caso contrario.

cadena = 'Manzana'

function tienePropiedad(propiedad, str){
    if(propiedad.nombre === str){
        return true
    } else {
        return false
    }
}
console.log(tienePropiedad(producto, cadena))*/

/*7. Eliminación de Propiedades:
○ Elimina la propiedad disponible del objeto producto. Imprime el
objeto antes y después de eliminar la propiedad. 

console.log(producto)
delete(producto.disponible)
console.log(producto.disponible)*/

/* 8. Combinar Objetos:
○ Usa Object.assign para combinar dos objetos, persona1 y persona2,
en un nuevo objeto. Imprime el resultado.

const persona = {nombre: 'Carla', edad: 24, Empresa: 'Arcor'}
const persona2 = {segundoNombre: 'Ines', antiguedad: '6 meses', puesto: 'Desarrollo web'}
console.log(persona, persona2)

Object.assign(persona, persona2)
console.log(persona)*/

/* 9. Copiar Objetos:
○ Crea una copia profunda del objeto estudiante utilizando el método
JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
original no haya sido alterado.

const estudiante = {nombre: 'Ivan', edad: 23,
                    Carrera: 'Lic. en sistemas de información',
                    materias: {
                        primero: 'Aprobado',
                        segundo: 'Aprobado',
                        tercero: 'cursando'
                    },
                    facultad: 'UTN'
                }
               

//Modifica JSON.STRINGIFY
const estudianteModificado = JSON.parse(JSON.stringify(estudiante))
estudianteModificado.nombre = 'Ivan Francisco'
//estudiante.facultad.push('UADER') 

console.log('Original: ', estudiante)
console.log('Copia: ', estudianteModificado)*/

/*10. Métodos Getters y Setters:
○ Añade un getter y un setter al objeto libro para la propiedad
añoDePublicacion. Usa el setter para actualizar el año de publicación
y luego usa el getter para leerlo. */

/*const libro = {
    Titulo: 'El misterio de la guía de ferrocarriles',
    Editorial: ' Collins Crime Club',
    añoDePublicacion: '6 de enero de 1936',
    Autor: 'Agatha Christie', 
    Géneros: 'Misterio, Novela, Policial'
}*/
var libroSet = {
    set añoDePublicacion(mensaje) {
      this.log.push(mensaje);
    },
    log: [],
  };

libro.añoDePublicacion = '6-01-1936'
const setOriginal =console.log(libro.log)

libro.añoDePublicacion = '06-01-1936'
const setModificado = console.log(libro.log)

var libroGet = {
    get añoDePublicacion() {
      if (this.log.length > 0) {
        return this.log[this.log.length - 1];
      } else {
        return null;
      }
    },
    log: [],
  };
//console.log(libroGet)
  
























