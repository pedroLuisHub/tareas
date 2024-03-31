document.addEventListener('DOMContentLoaded', function () {
    const inputFields = document.querySelectorAll('.formulario input');

    inputFields.forEach(function (input) {
        input.addEventListener('input', function () {
            const label = this.nextElementSibling;
            if (this.value !== '') {
                label.style.opacity = '0';
            } else {
                label.style.opacity = '1';
            }
        });
    });



    
    //Para validar el login y redirigir a la página de inicio exitoso
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores de usuario y contraseña ingresados por el usuario
        var usuario = document.getElementById("username-input").value;
        var contrasena = document.getElementById("password-input").value;

        // Realizar la validación
        if (usuario === "user" && contrasena === "123") {
            // Si las credenciales son correctas, mostrar mensaje de éxito
            alert("¡Felicidades! Has iniciado sesión correctamente.");
            // Redirigir a la página de inicio exitoso
            window.location.href = "inicio_exitoso.html";
        } else {
            // Si las credenciales son incorrectas, mostrar un mensaje de error
            alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        }
    });
});


document.getElementById("olvido-contrasena").addEventListener("click", function() {
  document.getElementById("olvidoContrasenaPopup").style.display = "block";
  });

function cerrarPopup() {
  document.getElementById("olvidoContrasenaPopup").style.display = "none";
}


function enviarContrasena() {
    // Obtener el valor del correo electrónico ingresado por el usuario
    var username = document.getElementById("correo").value;

    // Por ahora, solo mostraremos un mensaje de alerta con la contraseña
    alert("Su contraseña es: 123");
    return false;
}

