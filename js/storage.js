const GuardarUsuario = (usuario) => {
    let nuevaLista;
    if(listaUsuarios.length > 0) {
        nuevaLista = listaUsuarios.filter(function(u){
            return u.nombre !== usuario.nombre; 
        })
        nuevaLista.push(usuario);
        localStorage.setItem("Usuarios", JSON.stringify(nuevaLista));
    }else{
        listaUsuarios.push(usuario);
        localStorage.setItem("Usuarios", JSON.stringify(listaUsuarios));
    }
};

const CargarUsuarios = () => {
    if(localStorage.length > 0) {
        listaUsuarios = JSON.parse(localStorage.getItem("Usuarios"));
    }
};

const ListarCuentas = (usuario) => {
    const listaCuenta = $('#listaCuentas');
    let texto = "";
    usuario.cuentas.forEach(e => {
        texto += `
            <tr class="card-body justify-content-around">
                <td align="center">${e.id}</td>
                <td align="center"><input type="checkbox" id="checkPagado"></td>
                <td align="center">${e.nombre}</td>
                <td align="center">$${e.importe}</td>
                <td align="center">${e.vencimiento}</td>
                <td align="center">
                    <a href="#" class="text-primary">
                        <i class="far fa-edit"></i>
                    </a>
                </td>
                <td align="center">
                    <a href="#" class="text-danger">
                        <i class="far fa-trash-alt"></i>
                    </a>
                </td>
            </tr>
        `;
        listaCuenta.html(texto);
    })
};

const UsuarioActual = (usuario) => {
    const elemento = `<span>Usuario: <strong>${usuario.nombre}</strong></span>`;
    $("#usuarioActual").append(elemento);
    if(usuario.cuentas.length > 0) {
        ListarCuentas(usuario);
    }
}