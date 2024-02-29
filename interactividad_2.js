const diccionarioLocalProveedores = localStorage.getItem('proveedoresObjeto'); 
const diccionarioProveedores = JSON.parse(diccionarioLocalProveedores);

// Para mostrar el diccionario de proveedores
const diccionarioContainer = document.getElementById('diccionarioContainer');
for (let clave in diccionarioProveedores) {

    const valor = diccionarioProveedores[clave];
    const parrafoProveedores = document.createElement('p');

    parrafoProveedores.textContent = `Proveedor ${clave}: Sector ${valor[0]} Nombre: ${valor[1]}, Telefono: ${valor[2]}, E-Mail: ${valor[3]}, Direccion:${valor[4]}, Alcance Regional:${valor.slice(5, valor.length -1)}, Método de pago: ${valor[valor.length-1]}`;
    
    diccionarioContainer.appendChild(parrafoProveedores);

}

const diccionarioLocalClientes = localStorage.getItem('clientesObjeto');
const diccionarioClientes = JSON.parse(diccionarioLocalClientes);

// Para mostrar el diccionario de clientes
const diccionarioContainerClientes = document.getElementById('diccionarioContainerClientes');
for (let clave in diccionarioClientes) {

    const valorClientes = diccionarioClientes[clave];
    
    const parrafoClientes = document.createElement('a');
    parrafoClientes.textContent = `Cliente: ${clave} Nombre:  ${valorClientes[0]}, Telefono: ${valorClientes[1]}, E-Mail: ${valorClientes[2]}, Direccion:${valorClientes[3]}, Método de pago: ${valorClientes[valorClientes.length-1]}`;
    

    diccionarioContainerClientes.appendChild(parrafoClientes);

}


function devolverse(){
    window.history.back();
}
