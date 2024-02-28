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



function enviarDiccionario() {
  // Aquí envías el diccionario a otra página web
  // Puedes usar localStorage para enviar datos entre páginas
  localStorage.setItem('clientesObjeto', JSON.stringify(clientesObjeto));
  localStorage.setItem('proveedoresObjeto', JSON.stringify(proveedoresObjeto));

  window.location.href = 'paginaDeLlegada.html'; // Redirige a la otra página
}












