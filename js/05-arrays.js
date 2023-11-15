// Declarar un array
const personajes = [];
const peliculas = ['Interstellar','Matrix','lotr',2023,true,'Los juegos del hambre']   

// Mostrar un array
console.log(peliculas);
document.write(peliculas);

document.write(`<p>El primer elementos del array es ${peliculas[0]}</p>`);
console.log(peliculas.length);
document.write(`<p>El último elemento del array es ${peliculas[peliculas.length - 1]}</p>`);
document.write(`<p>Un elemento del array es ${peliculas[2]}</p>`);

document.write(`<h2>Listado de películas</h2>`);
document.write(`<ul>`);
for (let iPeliculas = 0 ; iPeliculas<peliculas.length ; iPeliculas++){
    document.write(`<li>${peliculas[iPeliculas]}</li>`);
}
document.write(`</ul>`);

// Agregar elementos al principio del Array

peliculas.unshift('batman','IronMan 1');
document.write(`<h2>Listado de películas con dos pelis nuevas (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let iPeliculas = 0 ; iPeliculas<peliculas.length ; iPeliculas++){
    document.write(`<li>${peliculas[iPeliculas]}</li>`);
}
document.write(`</ul>`);

// Agregar elementos en el medio del array

peliculas.splice(3,0,'Scream');
document.write(`<h2>Agregamos Scream (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let iPeliculas = 0 ; iPeliculas<peliculas.length ; iPeliculas++){
    document.write(`<li>${peliculas[iPeliculas]}</li>`);
}
document.write(`</ul>`);

// Agregar elementos al final del array

peliculas.push('Gran Turismo');
document.write(`<h2>Agregamos GT (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let iPeliculas = 0 ; iPeliculas<peliculas.length ; iPeliculas++){
    document.write(`<li>${peliculas[iPeliculas]}</li>`);
}
document.write(`</ul>`);

// Modificar un elementos

peliculas[6] = 'Inception';
document.write(`<h2>Modificamos el elemento [6] (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let iPeliculas = 0 ; iPeliculas<peliculas.length ; iPeliculas++){
    document.write(`<li>${peliculas[iPeliculas]}</li>`);
}
document.write(`</ul>`);

// Eliminar elementos del array

peliculas.shift();
document.write(`<h2>Eliminamos primer elemento del array (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let iPeliculas = 0 ; iPeliculas<peliculas.length ; iPeliculas++){
    document.write(`<li>${peliculas[iPeliculas]}</li>`);
}
document.write(`</ul>`);

// Eliminar elementos del medio del array

peliculas.splice(6,1);
document.write(`<h2>Eliminamos True del array (${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let iPeliculas = 0 ; iPeliculas<peliculas.length ; iPeliculas++){
    document.write(`<li>${peliculas[iPeliculas]}</li>`);
}
document.write(`</ul>`);

// Eliminar el último elemento del array

peliculas.pop();
document.write(`<h2>Eliminamos el último elemento del array(${peliculas.length})</h2>`);
document.write(`<ul>`);
for (let iPeliculas = 0 ; iPeliculas<peliculas.length ; iPeliculas++){
    document.write(`<li>${peliculas[iPeliculas]}</li>`);
}
document.write(`</ul>`);