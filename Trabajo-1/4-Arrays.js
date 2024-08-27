/*1. Agregar y Eliminar Elementos:
○ Crea un array frutas con los valores ["manzana", "banana", "pera"]. Usa
push para agregar una fruta al final, y pop para eliminar la última
fruta.*/

const frutas = ['Manzana', 'Banana', 'Pera']
console.log('Sin push: ', frutas)
const agregarFruta = frutas.push('Naranja')
console.log(agregarFruta)
console.log('Con push: ', frutas)

/*2. Array Bidimensional:
○ Crea un array bidimensional llamado matriz con los valores [[1, 2, 3],
[4, 5, 6], [7, 8, 9]]. Accede al elemento 5 e imprímelo en la consola.*/

matriz = [[1, 2, 3], 
          [4, 5, 6],
          [7, 8, 9]]

const elemento5 = matriz[1][1]
console.log('Elemento: ', elemento5)
/*3. Iterar sobre un Array:
○ Usa un bucle for para iterar sobre el array frutas e imprimir cada
elemento.*/
for (const i of frutas) {
    console.log(i)
}
/*4. Uso de map:
○ Crea una función llamada elevarAlCuadrado que tome un array de
números y devuelva un nuevo array con cada número elevado al
cuadrado. Usa map para implementar la función.*/

const numeros = [2, 3, 4, 5]

function elevarAlCuadrado(numero){
    return numero.map(elemento => {
        return elemento * elemento
})
}
const cuadrado = elevarAlCuadrado(numeros)
console.log(cuadrado)

/*5. Uso de filter:
○ Crea una función llamada filtrarMayoresDe que tome un array de
números y un valor de referencia, y devuelva un nuevo array solo con
los números mayores que ese valor. Usa filter.*/
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function filtrarMayoresDe(numero, filtro){
    const filtar = numero.filter((num) => num > filtro)
    return  filtar
    
}
const mayoresDe = filtrarMayoresDe(array, 5)
console.log('Los numeros filtrados son: ' ,mayoresDe)
/*6. Uso de reduce:
○ Crea una función llamada sumarElementos que tome un array de
números y devuelva la suma de todos los elementos del array
usando reduce.*/
function sumarElementos(numeros){
    const inicial = 0
    const sumar = numeros.reduce(
        (acumulador, valor) => acumulador + valor, inicial)
    return sumar
}
const resultado = sumarElementos(array)

/*7. Uso de some:
○ Crea un array de números llamado numeros y usa some para
verificar si algún número es mayor que 10.*/
console.log('Suma de los elementos: ',resultado)
const usoSome = [4, 2, 10, 13, 3, 5, 6, 19, 15]
const mayor = (elemento) => elemento > 10;
console.log(usoSome.some(mayor))

/*8. Uso de every:
○ Crea un array de números llamado numeros y usa every para
verificar si todos los números son positivos.*/
const num = [-1,2,-4, 3, 6, 4]
const positivos = ((mayores)=> mayores > 0)
console.log('¿Son todos numeros positivos? ',num.every(positivos))

/*9. Uso de find:
○ Crea un array de objetos llamados personas donde cada objeto
tenga nombre y edad. Usa find para encontrar a la primera persona
mayor de 30 años.*/
const datos = [{nombre: 'estefano', edad: 13},
               {nombre: 'Viviana', edad: 55},
               {nombre: 'Ignacio', edad: 33},
               {nombre: 'Victoria', edad: 44},
               {nombre: 'Luciana', edad: 31}
            ]

function mayorDe30(edad){
    return edad.edad > 30

}
const dato = datos.find(mayorDe30)
console.log('¿Hay mayores de 30? ', dato)

/*10. Uso de sort:
○ Crea un array de palabras y ordénalo alfabéticamente usando sort.*/
const alfabeto = ['A', 'C', 'B', 'E', 'G', 'F', 'D']

console.log('Ordenado', alfabeto.sort())

