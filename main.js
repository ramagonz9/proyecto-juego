// función para iniciar sesión
function iniciarSesion(usuario, contraseña) {
    while (true) {
        const nombreUsuario = prompt("Ingrese su nombre de usuario:");
        const contraseñaUsuario = prompt("Ingrese su contraseña:");

        if (nombreUsuario === usuario && contraseñaUsuario === contraseña) {
            alert("Inicio de sesión exitoso. ¡Bienvenido!");
            return true;
        } else {
            alert("Nombre de usuario o contraseña incorrectos. Inténtelo de nuevo.");
        }
    }
}

// funcion para acceder al juego
function jugarAdivinaElNumero() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let intentos = 0;

    while (true) {
        const numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"));
        intentos++;

        if (numeroUsuario === numeroSecreto) {
            alert(`¡Felicidades! ¡Adivinaste el número en ${intentos} intentos!`);
            break;
        } else if (numeroUsuario < numeroSecreto) {
            alert("El número es demasiado pequeño. Inténtalo de nuevo.");
        } else {
            alert("El número es demasiado grande. Inténtalo de nuevo.");
        }
    }
}

// Datos de usuario
const usuario = "usuario";
const contraseña = "contraseña";

// Iniciar sesión
if (iniciarSesion(usuario, contraseña)) {
    // si el inicio de sesión es exitoso, puede jugar.
    jugarAdivinaElNumero();
}