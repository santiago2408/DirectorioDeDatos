// Recuperar el diccionario de localStorage

console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa")

const diccionarioJSON = localStorage.getItem('proveedoresObjeto');
const diccionario = JSON.parse(diccionarioJSON);

// Imprimir el diccionario en la página
const diccionarioContainer = document.getElementById('diccionarioContainer');
for (let clave in diccionario) {

    const valor = diccionario[clave];
    const parrafo = document.createElement('p');
    parrafo.textContent = `Cliente ${clave}: Sector ${valor[0]} Nombre ${valor[1]} ${valor[2]} ${valor[3]} ${valor[4]} ${valor.slice(5, valor.length -1)} ${valor[valor.length-1]}`;
    
    parrafo.style.marginBottom = "10px";
    const espacio = document.createElement('p');
    espacio.textContent = ' '; // Puedes ajustar este texto según tus preferencias
    diccionarioContainer.appendChild(parrafo);
    console.log(valor[0])
}

