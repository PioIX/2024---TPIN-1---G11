function getJugador() {
    return document.getElementById("jugador").value;
}
function getPassword() {
    return document.getElementById("password").value;
}
function changeScreen() {
    const notepad = document.getElementById("notepad");
    const login = document.getElementById("login");
    const titulo = document.getElementById("titulo");
    if(notepad.style.display !== "none") {
        notepad.style.display = "none";
        login.style.display = "";
        titulo.style.display = "";
    }
    else {
        notepad.style.display = "";
        login.style.display = "none";
        titulo.style.display = "none";
        
    }
const colors = ["white"]; // Colores de fondo alternativos
const currentColor = document.body.style.backgroundColor;
const nextColor = colors.find(color => color !== currentColor) || colors[0]; // Alternar entre los colores

document.body.style.backgroundColor = nextColor
}
function getPreguntaContent() {
    return document.getElementById("content").value;
}


async function mostrarPreguntas() {
    const response = await fetch('http://localhost:3000/obtenerPreguntas',{
        method:"GET",
        headers: {
            "Content-Type": "application/json",
          },
    })


    console.log(response)
    const result = await response.json()
    console.log(result)
    let tabla = `
    <tr>
         <th> id_preguntas </th>
         <th> la_pregunta </th>
         <th> id_respuestas </th>
    </tr>
    `
    for (let i = 0; i < result.length; i++) {
        tabla += `
        <tr> 
             <td> ${result[i].id_preguntas}</td>
             <td> ${result[i].la_pregunta}</td>
             <td> ${result[i].id_respuestas}</td>
        </tr>`
    }
    document.getElementById("nuevaPregunta").innerHTML = tabla
}
async function agregarPregunta() {
    const data = {
        id_preguntas : document.getElementById("ingresarid_preguntas").value,
        la_pregunta : document.getElementById("ingresarla_pregunta").value,
        opcion_correcta: document.getElementById("ingresaropcion_correcta").value,
        opcion1 : document.getElementById("ingresaropcion1").value,
        opcion2 : document.getElementById("ingresaropcion2").value,
        opcion3 : document.getElementById("ingresaropcion3").value,
        
    }


    const response = await fetch('http://localhost:3000/insertarPreguntas',{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data),
    })













    

    console.log(response)
    const result = await response.json()
    console.log(result)
    let tabla_eliminar = `
    <tr> 
         <th>Nombre</th>
         <th>Apellido</th>
         <th> id_cliente </th>
         <th> id_sucursal </th>
    </tr>`

    for (let i = 0; i < result.length; i++) {
        tabla_eliminar = `
        <tr> 
             <td> <button onclick="eliminarEmpleado(${result[i].id})">Eliminar</button></td>
             <td> ${result[i].nombre}</td>
             <td> ${result[i].apellido}</td>
             <td> ${result[i].id_cliente}</td>
             <td> ${result[i].id_sucursal}</td>
        </tr>`
    }
    document.getElementById("eliminarEmpleado").innerHTML = tabla_eliminar
}



async function eliminarEmpleado(id) {
    const data = {
        id : id
    }

    const response = await fetch('http://localhost:3000/eliminarEmpleados',{
        method:"DELETE",
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify(data),
    })
}


async function mostraEmpleadoParaElimina(){
    const response = await fetch ('http://localhost:3000/eliminarEmpleados',{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
 
console.log(response)
const result = await response.json()
console.log(result)

let tabla_eliminar = `
<tr> 
         <th>Nombre</th>
         <th>Apellido</th>
         <th> id_cliente </th>
         <th> id_sucursal </th>
    </tr>`

    for (let i = 0; i < result.length; i++) {
        tabla_eliminar = `
        <tr> 
             <td> <button onclick="eliminarEmpleado(${result[i].id})">Eliminar</button></td>
             <td> ${result[i].nombre}</td>
             <td> ${result[i].apellido}</td>
             <td> ${result[i].id_cliente}</td>
             <td> ${result[i].id_sucursal}</td>
        </tr>`
    }
    document.getElementById("eliminarEmpleado").innerHTML = tabla_eliminar
}



async function mostrarEmpleadosParaModificar (){
    const response = await fetch ('http://localhost:3000/obtenerEmpleados',{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
 
console.log(response)
const result = await response.json()
console.log(result)

let tabla_modificar = `
<tr> 
         <th>Nombre</th>
         <th>Apellido</th>
         <th> id_cliente </th>
         <th> id_sucursal </th>
    </tr>`

    for (let i = 0; i < result.length; i++) {
        tabla_modificar += `
        <tr> 
             <td> <button onclick="modificarEmpleado(${result[i].id})">Modificar</button></td>
             <td> ${result[i].nombre}</td>
             <td> ${result[i].apellido}</td>
             <td> ${result[i].id_cliente}</td>
             <td> ${result[i].id_sucursal}</td>
        </tr>`
    }
    document.getElementById("modificarEmpleado").innerHTML = tabla_modificar
}

async function modificarEmpleadosrsç(id) {
    const data = {
        nombre : document.getElementById("ingresarModificacionNombre").value,
        id: id
    }

const response= await fetch('http://localhost:3000/modificarEmpleados',{
    method:"PUT",
    headers: {
        "Content-Type": "application/json",
        },
        body:JSON.stringify(data),

    })
    mostrarEmpleadosParaModificar()
}