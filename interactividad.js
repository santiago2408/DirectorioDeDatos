function desplegarTablaClientes(){}

function desplegarTablaProvedores(){}

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




