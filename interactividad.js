// Define una función para mostrar la tabla
function mostrarTablaProveedores() {
    // Obtén la tabla
    var TablaProveedores = document.getElementById("TablaProveedores");
    // Cambia su estilo de visualización para mostrarla
    TablaProveedores.style.display = "table";
    TablaClientes.style.display = "none"
}

function mostrarTablaClientes() {
    // Obtén la tabla
    var TablaClientes = document.getElementById("TablaClientes");
    // Cambia su estilo de visualización para mostrarla
    TablaClientes.style.display = "table";
    TablaProveedores.style.display = "none"
}

function ocultarTablas(){
    TablaClientes.style.display = "None"
    TablaProveedores.style.display = "None"
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