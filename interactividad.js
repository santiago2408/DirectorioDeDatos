// Define una función para mostrar la tabla
function mostrarTablaProveedores() {
    // Obtén la tabla
    var tablaProveedores = document.getElementById("tablaProveedores");
    // Cambia su estilo de visualización para mostrarla
    tablaProveedores.style.display = "table";
    tablaClientes.style.display = "none"
}

function mostrarTablaClientes() {
    // Obtén la tabla
    var tablaClientes = document.getElementById("tablaClientes");
    // Cambia su estilo de visualización para mostrarla
    tablaClientes.style.display = "table";
    tablaProveedores.style.display = "none"
}

function ocultarTablas(){
    tablaClientes.style.display = "None"
    tablaProveedores.style.display = "None"
}


// Lista para almacenar nombres seleccionados
let datosProveedores = [];
let proveedoresObjeto = {}

function guardarNombre(nombre, tipo) {
    console.log(tipo.type)
    if (tipo.type === 'checkbox') {
        if (tipo.checked) {
            datosProveedores.push(nombre);
        }
    }
    else{
        datosProveedores.push(nombre);}
}  
  
  // Función para mostrar los nombres seleccionados en la consola
  function guardarDatosProveedores() {
    var proveedores = 1
    while (proveedores in proveedoresObjeto){
        proveedores += 1
    } 
    proveedoresObjeto[proveedores] = datosProveedores
    datosProveedores = []
    
    console.log(JSON.stringify(proveedoresObjeto))
  }

  function deseleccionarTodo() {
    let checkboxes = document.querySelectorAll('#tablaProveedores input[type="checkbox"]');
    
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  }


let datosClientes = [];
let clientesObjeto = {}

function guardarNombreClientes(nombre, tipo) {
    console.log(tipo.type)

        datosClientes.push(nombre);
    
    console.log(datosClientes)
    
}  
  
  // Función para mostrar los nombres seleccionados en la consola
function guardarDatosClientes() {
  var clientes = 1
  while (clientes in clientesObjeto){
      clientes += 1
  } 
  clientesObjeto[clientes] = datosClientes
  datosClientes = []
  
  console.log(JSON.stringify(clientesObjeto))
}



function enviarDatosAPagina2() {
  // Convertir los diccionarios a cadenas JSON para pasarlos por la URL
  var datos1 = encodeURIComponent(JSON.stringify(proveedoresObjeto));
  var datos2 = encodeURIComponent(JSON.stringify(clientesObjeto));

  // Redirigir a la página 2 incluyendo los datos en la URL
  window.location.href = 'paginaDeLlegada.html?datos1=' + datos1 + '&datos2=' + datos2;
}

document.addEventListener('click', function(event) {
  if (event.target && event.target.id === 'enviarDatos') {
      enviarDatosAPagina2();
  }
});












