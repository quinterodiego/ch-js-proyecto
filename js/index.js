var listaUsuarios = [];
var usuarioActual;
var nombre = "";
var email = "";
var password = "";
var usuariosJSON = [];


const selectUsuarios = $('#selectUsuarios');
let options = "";

$.ajax({
    url: './db/usuarios.json',
    success: function(datos) {
        usuariosJSON = datos;
        usuariosJSON.forEach(u => {
            options += `
                <option>${u.name}</option>
            `;
            selectUsuarios.html(options);
        })
    }
});