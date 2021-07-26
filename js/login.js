CargarUsuarios();

$('#form-iniciar-sesion').hide();

const CrearUsuario = (event) => {
    nombre = $('#nombre').val();
    email = $('#email').val();
    password = $('#password').val();

    if(nombre == '' || email ==  '' || password == '') {
        return;
    }

    $('#crear-usuario button').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');

    usuarioActual = new Usuario(nombre, email, password);

    $('#crear-usuario').trigger('reset');

    GuardarUsuario(usuarioActual);

    sessionStorage.setItem("UsuarioActual", JSON.stringify(usuarioActual));

    setInterval(() => {
        window.location = './views/manager.html';
    }, 1000);

    event.preventDefault();
};

const ValidarNombre = () => {
        let inputNombre = $('#nombre').val();
        let nombreExiste = listaUsuarios.find((e) => e.nombre === inputNombre)
        if(nombreExiste != null) {
            $('#nombreExiste').removeClass('d-none');
        }else{
            $('#nombreExiste').addClass('d-none');
        }
}

const ValidarEmail = () => {
    let inputEmail = $('#email').val();
    let emailExiste = listaUsuarios.find((e) => e.email === inputEmail)
    if(emailExiste != null) {
        $('#emailExiste').removeClass('d-none');
    }else{
        $('#emailExiste').addClass('d-none');
    }
}

$('#mensaje-iniciar-sesion').click(function() {
    $('#crear-usuario').hide('slow');
    $('#form-iniciar-sesion').show('slow');
})

$('#mensaje-crear-cuenta').click(function() {
    $('#form-iniciar-sesion').hide('slow');
    $('#crear-usuario').show('slow');
})

const ValidarUsuario = (e) => {
    let email = $('#email-login').val();
    let password = $('#password-login').val();

    if(listaUsuarios.some((e) => e.email === email && e.password === password)){
        $('#login-error').addClass('d-none');
        usuarioActual = listaUsuarios.find(e => e.email === email);
        $('#form-iniciar-sesion').trigger('reset');
        $('#form-iniciar-sesion button').attr('data-toggle', 'modal').attr('data-target', '#exampleModalCenter');
        sessionStorage.setItem("UsuarioActual", JSON.stringify(usuarioActual));
        console.log("guarde");
        setInterval(() => {
            window.location = './views/manager.html';
        }, 1000);
    }else {
        $('#login-error').removeClass('d-none');
    }

    e.preventDefault();
}

$('.logo-cover ').hover(function() {
    $(this).animate({ 
                right: '100px'},
                "slow")
                .animate({ 
                    left: '0'},
                    "slow");
  });