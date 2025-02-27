document.addEventListener('DOMContentLoaded', function() {
    // Manejo del Audio
    const introAudio = document.getElementById('introAudio');
    if (introAudio) {
        introAudio.volume = parseFloat(localStorage.getItem('volumen')) || 0.5;
        introAudio.play().catch(error => {
            console.error('Error al reproducir el audio:', error);
        });
    }

    // Control del Volumen
    const volumenSlider = document.getElementById('volumen');
    if (volumenSlider && introAudio) {
        volumenSlider.value = introAudio.volume;
        volumenSlider.addEventListener('input', function() {
            introAudio.volume = parseFloat(volumenSlider.value);
        });

        const guardarBtn = document.getElementById('guardar');
        if (guardarBtn) {
            guardarBtn.addEventListener('click', function() {
                localStorage.setItem('volumen', volumenSlider.value);
                alert('Volumen guardado correctamente.');
            });
        }
    }

    // Manejo del Nombre de Usuario
    const nombreUsuario = sessionStorage.getItem('nombreUsuario');
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    const formularioUsuario = document.getElementById('formularioUsuario');

    if (nombreUsuario && mensajeBienvenida && formularioUsuario) {
        mensajeBienvenida.textContent = `¡Bienvenido, ${nombreUsuario}!`;
        mensajeBienvenida.style.display = 'block';
        formularioUsuario.style.display = 'none';

        setTimeout(function() {
            window.location.href = 'menu-principal.html';
        }, 1000);
    }

    if (formularioUsuario) {
        formularioUsuario.addEventListener('submit', function(event) {
            event.preventDefault();
            const nombreUsuario = document.getElementById('nombreUsuario').value.trim();
            if (nombreUsuario.length < 3 || /[^a-zA-Z0-9]/.test(nombreUsuario)) {
                alert('Por favor, ingrese un nombre de usuario válido (mínimo 3 caracteres, solo letras y números).');
                return;
            }
            sessionStorage.setItem('nombreUsuario', nombreUsuario);
            window.location.href = 'menu-principal.html';
        });
    }

    // Navegación
    const opcionesBtn = document.getElementById('opciones');
    const creditosBtn = document.getElementById('creditos');
    const salirBtn = document.getElementById('salir');
    const volverMenuPrincipalBtn = document.getElementById('volverMenuPrincipal');

    if (opcionesBtn) {
        opcionesBtn.addEventListener('click', function() {
            window.location.href = './opciones.html';
        });
    }

    if (creditosBtn) {
        creditosBtn.addEventListener('click', function() {
            window.location.href = './creditos.html';
        });
    }

    if (salirBtn) {
        salirBtn.addEventListener('click', function() {
            sessionStorage.removeItem('nombreUsuario');
            window.location.href = './index.html';
        });
    }

    if (volverMenuPrincipalBtn) {
        volverMenuPrincipalBtn.addEventListener('click', function() {
            window.location.href = './menu-principal.html';
        });
    }
});