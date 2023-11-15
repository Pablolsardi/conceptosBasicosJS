// Notación literal

const usuario = {
    // propiedades clave: valor
    nombre: 'Juan',
    edad: 18,
    mail: 'juan@mail.com',
    apellido: 'Perez',
    password:'21234Efg$',
    nickname: 'el juancho',
    // métodos
    login: function(){
        document.write(`<p>El usuario "${this.nickname}" fue logueado</p>`);
    },
    logout: () =>{
        document.write(`<p>El usuario "${this.nickname}" fue deslogueado</p>`);
    }
}

// Mostrar objeto 
console.log(usuario);
document.write(usuario.apellido);
document.write(`<h2>Usuario: ${usuario.nickname}</h2>`);
document.write(`<p>Nombre completo: ${usuario.apellido}, ${usuario.nombre}</p>`);
document.write(`<p>Edad: ${usuario['edad']}</p>`);

// Modificar propiedad
usuario.edad = 25;
document.write(`<p>Edad: ${usuario.edad}</p>`);

// Agregar propiedad nueva
usuario.fotoPerfil = 'http://127.0.0.1:5500/index.html';
console.log(usuario);

// Borrar propiedad de un objeto

delete usuario.apellido;
document.write(`<p>Nombre completo: ${usuario.apellido}, ${usuario.nombre}</p>`);
console.log(usuario);

// Usar métodos de objetos
usuario.login();
usuario.logout();
