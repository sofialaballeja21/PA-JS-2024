/*1. Función Suma:
○ Crea una función llamada sumar que tome dos números como
parámetros y devuelva su suma. Prueba la función con diferentes
números.*/

function sumar(n1, n2) {
    const resultado = n1 + n2;
    console.log('El resultado es: ',+resultado)
}
console.log(sumar(2, 3))
console.log(sumar(100,230))
console.log(sumar(530, 134))

/*2. Función que Multiplica:
○ Crea una función llamada multiplicar que tome dos números como
parámetros y devuelva su producto. Prueba la función con diferentes
valores.*/

function multiplicar(m1, m2) {
    const resultado = m1 * m2;
    console.log('El resultado es: ',+resultado)
}
console.log(multiplicar(2, 3))
console.log(multiplicar(100,230))
console.log(multiplicar(530, 134))

/*3. Función con Parámetro por Defecto:
○ Crea una función llamada saludar que tome un parámetro nombre
con un valor por defecto de "Invitado". La función debe devolver
"Hola, [nombre]".*/

function saludar(nombre = 'Invitado'){
    const valor = nombre
    console.log('Hola, '+ valor)
}
console.log(saludar())
console.log(saludar('Silvia'))

/*4. Función que Devuelve un Objeto:
○ Crea una función llamada crearPersona que tome nombre y edad
como parámetros y devuelva un objeto con esas propiedades.*/

function crearPersona(nombre, edad) {
    const persona = {
        nombre: nombre,
        edad: edad
    }
   return persona
}

const datos_persona = (crearPersona('Cristian', 30))
console.log('La persona se llama: ' + datos_persona.nombre + ', su edad es: ', + datos_persona.edad)

/*5. Función que Modifica un Objeto:
○ Crea una función llamada actualizarEdad que tome un objeto
persona y un número nuevaEdad, y actualice la propiedad edad del
objeto.*/
const persona = {
    nombre: 'Lazaro',
    edad: 62
}
console.log('Antes de actualizar: ' + persona.nombre, persona.edad)
function actualizarEdad(persona,  nuevaEdad){
   persona.edad = nuevaEdad
}
console.log(actualizarEdad(persona, 63))
console.log('Despues de actualizar: ' + persona.nombre, persona.edad)

/*6. Función Recursiva:
○ Crea una función recursiva llamada factorial que calcule el factorial
de un número dado.

function recursiva(numero){
    for (let a of numero)
    a = a * 1

    console.log(a)
   
}
console.log(recursiva(5)*/


/*7. Función con Función Interna:
○ Crea una función llamada despedir que contenga una función
interna adios. despedir debe devolver el resultado de llamar a adios.*/

function despedir() {
    function adios(){
        console.log('Adios')

    }
    console.log(adios())
}
console.log(despedir())


/*8. Función que Usa Otra Función:
○ Crea una función llamada procesarArray que tome un array y una
función como parámetros, y aplique la función a cada elemento del
array. Usa una función como parámetro para multiplicar cada
número por 2.*/

function procesarArray(array, función) {
    array.forEach(function(elemento, indice, resp) {
        resp[indice] = función(elemento)

        
    })
}
function multiplicar2(numero){
    return numero*2

}
const array = [2, 3, 4, 5, 6]
const resultado = procesarArray(array, multiplicar2)
console.log(resultado)

/*9. Función que Devuelve Otra Función:
○ Crea una función llamada crearMultiplicador que tome un número x
y devuelva una nueva función que multiplique cualquier número por
x.*/

function crearMultiplicador(x){
    return function(numero){
        return x*numero
    }
}

const multiplicare = crearMultiplicador(3)
const resul = multiplicare(2)
console.log('el resultado es: '+resul)

/*10. Función Anónima:
○ Crea una función anónima que sume dos números y la asigna a una
variable llamada sumarAnonima. Luego, invoca la función a través de
esa variable. */

function anonima(x, y) {
    const suma = x + y
    //console.log(suma)
}

const sumarAnonima = anonima(4, 6)
console.log('La suma es: ' + sumarAnonima)