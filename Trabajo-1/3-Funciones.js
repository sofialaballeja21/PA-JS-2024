/*1. Consumo de Datos desde una API:
○ Crea una función llamada obtenerUsuarios que haga una petición
HTTP a la API https://jsonplaceholder.typicode.com/users usando
fetch. Luego, imprime en la consola la lista de usuarios obtenida.*/
/*2. Procesamiento de Datos de una API:
○ Usando la función obtenerUsuarios, crea otra función llamada
imprimirNombresDeUsuarios que filtre y muestre solo los nombres
de los usuarios.*/
/*3. Autenticación Simulada:
○ Crea una función llamada autenticarUsuario que tome un objeto
credenciales con usuario y contraseña, y verifique si coinciden con
un usuario predefinido. La función debe devolver true si la
autenticación es exitosa y false en caso contrario.*/
/*4. Transformación de Datos:
○ Crea una función llamada mapearUsuarios que tome un array de
usuarios obtenidos de la API y devuelva un nuevo array con solo las
propiedades nombre y email de cada usuario.*/
/*5. Validación de Formularios:
○ Crea una función llamada validarFormulario que tome un objeto con
los campos nombre, email y password. La función debe devolver true si t
odos los campos están presentes y no están vacíos, y false en caso contrario.
//1
function obtenerUsuarios(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {console.log(data)
         //2
        data.forEach(usuario => {
            console.log(usuario.name)
            console.log(usuario.username)
            console.log(usuario.email)
            //3
            const credenciales = {
                login: usuario.name,
                user: usuario.username 
            }
            function autenticarUsuario(credenciales){
                if (credenciales.login === usuario.name &&
                   credenciales.user === usuario.username
        
               ) {
                return true; 
              } else {
                return false; 
              } 
            }
            const autenticacionExitosa = autenticarUsuario(credenciales);
            console.log(`Autenticación para ${credenciales.login}: ${autenticacionExitosa}`) 
            //4
            function mapearUsuarios(usuarios){
                return usuarios.map(usuario => {
                    return{
                        login: usuario.name,
                        email: usuario.email
                    };
                })
            }
            const usuariosTransformados = mapearUsuarios(data);
            console.log('Array de usuario transformado: ' + usuariosTransformados)
            //5
            const Formularios = {
                login: usuario.name,
                email: usuario.email,
                user: usuario.username,
            
            }
            
            function validarFormulario(Formularios) {
                if (Formularios.login != undefined && Formularios.email != undefined && Formularios.user != undefined)
                {
                    return true;
                }{
                    return false;
                }
            }
            const formularioValidado = validarFormulario(Formularios)
            console.log('El formulario ha sido: ' + formularioValidado)
        })   

    })
    .catch(console.error)
}
obtenerUsuarios()*/

/*6. Paginación de Datos:
○ Crea una función llamada obtenerPagina que tome un array de
datos y un número de página. La función debe devolver los
elementos correspondientes a esa página, asumiendo que cada
página tiene 5 elementos.
function obtenerPagina (datos, paginas){
    const elementoXpagina = 5

    const inicio = (paginas - 1) * elementoXpagina
    const fin = inicio + elementoXpagina

    const datosPaginas = datos.slice(inicio, fin)
    return datosPaginas                
}
const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const pag = obtenerPagina(datos, 2)
console.log('Los elementos de la página 4 son:', pag)*/

/*7. Envío de Datos a una API:
○ Crea una función llamada enviarDatos que tome un objeto data y
haga una petición POST a la API
https://jsonplaceholder.typicode.com/posts. La función debe
imprimir la respuesta de la API.*/

function enviarDatos(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
       method: 'POST',
       headers: {'Content-type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => console.log(json))
}
enviarDatos()

/*8. Búsqueda de Usuarios:
○ Crea una función llamada buscarUsuarioPorEmail que tome un array
de usuarios y un email como parámetros, y devuelva el usuario que
coincida con el email proporcionado. Usa el método find para
implementarlo.*/

const array = [{usuario: 'pepito', email: 'pepito@gmail.com'},
               {usuario: 'fefa',   email: 'fefalab@gmail.com'},
               {usuario: 'marron', email: 'marronla@gmail.com'},
               {usuario: 'toto',   email: 'toti@gmail.com'},
               {usuario: 'mishu',  email: 'mishulino@gmail.com'}
 ]

function buscarUsuarioPorEmail(usuario, email){
    const encontarUsuario = usuario.find(function(usuario){
        return usuario.email === email;
    })
    return encontarUsuario
}

const buscarEmail = 'fefalab@gmail.com'
const resultado = buscarUsuarioPorEmail(array, buscarEmail)

if (resultado){
    console.log('Usuario encontrado: ', resultado)
} else {
    console.log('Usuario no encontrado')
}
/*9. Generación de Token de Autenticación:
○ Crea una función llamada generarToken que tome un objeto usuario
y devuelva un token JWT simulado como una cadena. Puedes usar
una función como btoa (Base64) para simular la generación del
token.*/

function generarToker(usuario){
    const headers ={
        to: 'MJS2R5G',
        ken: 'M9K3D'
    }
    const Base64 = btoa(JSON.stringify(headers))
    const generar = btoa(JSON.stringify(usuario))

    const token = (Base64 + ('.') + generar)
    return token
}

const usuario ={
    id : 1,
    nombre: 'Ivana',
    puesto: 'Gerente'
}
const token = generarToker(usuario)
console.log('Token simulado: ', token)

/*10. Actualización de Información del Usuario:
○ Crea una función llamada actualizarUsuario que tome un objeto
usuario y una lista de cambios a aplicar. La función debe retornar el
usuario con las propiedades actualizadas.*/

function actualizarUsuario(usuario, lista) {
    const actualizado = { ...usuario, ...lista }; 
    return actualizado; 
}
const lista1 = {
    nombre: 'Maxima',
    edad: 25,
    email: 'maxima@gmail.com'
};
const lista2 = {
    nombre: 'Maxima L',
    edad: 26
};

const listaActualizada = actualizarUsuario(lista1, lista2);


console.log('Lista actualizada: ', listaActualizada)
