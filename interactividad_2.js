// Recuperar el diccionario de localStorage

console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")

const diccionarioJSON = localStorage.getItem('proveedoresObjeto');
const diccionario = JSON.parse(diccionarioJSON);

// Imprimir el diccionario en la página
const diccionarioContainer = document.getElementById('diccionarioContainer');
for (let clave in diccionario) {
    console.log("papapapa")
    const valor = diccionario[clave];
    const parrafo = document.createElement('p');
    parrafo.textContent = `${clave}: ${valor}`;
    diccionarioContainer.appendChild(parrafo);
    console.log(valor)
}

