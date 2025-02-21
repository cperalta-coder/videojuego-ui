document.addEventListener('DOMContentLoaded', function() {
    const nombreUsuario = sessionStorage.getItem('nombreUsuario');
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    const formularioUsuario = document.getElementById('formularioUsuario');

    if (nombreUsuario && mensajeBienvenida && formularioUsuario) {
        mensajeBienvenida.textContent = `¡Bienvenido, ${nombreUsuario}!`;
        mensajeBienvenida.style.display = 'block';
        formularioUsuario.style.display = 'none';

        setTimeout(function() {
            window.location.href = 'menu-principal.html'; // Redirige al menú principal
        }, 3000);
    }

    if (formularioUsuario) {
        formularioUsuario.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombreUsuario = document.getElementById('nombreUsuario').value;
            sessionStorage.setItem('nombreUsuario', nombreUsuario);
            window.location.href = 'menu-principal.html'; // Redirige al menú principal
        });
    }
});