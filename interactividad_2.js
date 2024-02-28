// Recuperar el diccionario de localStorage

console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")

const diccionarioJSON = localStorage.getItem('proveedoresObjeto');
const diccionario = JSON.parse(diccionarioJSON);

// Imprimir el diccionario en la página
const diccionarioContainer = document.getElementById('diccionarioContainer');
for (let clave in diccionario) {

    const valor = diccionario[clave];
    const parrafo = document.createElement('p');
    parrafo.textContent = `Proveedor ${clave}: Sector ${valor[0]} Nombre: ${valor[1]}, Telefono: ${valor[2]}, E-Mail: ${valor[3]}, Direccion:${valor[4]}, Alcance Regional:${valor.slice(5, valor.length -1)}, Método de pago: ${valor[valor.length-1]}`;
    
    parrafo.style.marginBottom = "10px";
    const espacio = document.createElement('p');
    espacio.textContent = ' '; // Puedes ajustar este texto según tus preferencias
    diccionarioContainer.appendChild(parrafo);

}

const diccionarioJSONClientes = localStorage.getItem('clientesObjeto');
const diccionarioClientes = JSON.parse(diccionarioJSONClientes);

// Imprimir el diccionario en la página
const diccionarioContainerClientes = document.getElementById('diccionarioContainerClientes');
for (let clave in diccionarioClientes) {

    const valorClientes = diccionarioClientes[clave];
    const parrafoClientes = document.createElement('a');
    parrafoClientes.textContent = `Cliente: ${clave} Nombre:  ${valorClientes[0]}, Telefono: ${valorClientes[1]}, E-Mail: ${valorClientes[2]}, Direccion:${valorClientes[3]}, Método de pago: ${valorClientes[valorClientes.length-1]}`;
    
    parrafoClientes.style.marginBottom = "10px";
    const espacioClientes = document.createElement('p');
    espacioClientes.textContent = ' '; // Puedes ajustar este texto según tus preferencias
    diccionarioContainerClientes.appendChild(parrafoClientes);

}
