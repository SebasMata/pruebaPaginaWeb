const nameInput = document.getElementById('nameInput');
const passwordInput = document.getElementById('passwordInput');
const enterButton = document.getElementById('enterButton');
const message = document.getElementById('message');

enterButton.addEventListener('click', async () => {
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!name || !password) {
        message.textContent = 'Por favor, completa todos los campos.';
        return;
    }

    try {
        const response = await fetch('usuarios.xml');
        const xmlText = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        const usuarios = xmlDoc.getElementsByTagName("usuario");
        let accesoConcedido = false;

        for (let i = 0; i < usuarios.length; i++) {
            const xmlNombre = usuarios[i].getElementsByTagName("nombre")[0].textContent;
            const xmlPassword = usuarios[i].getElementsByTagName("password")[0].textContent;

            if (xmlNombre === name && xmlPassword === password) {
                accesoConcedido = true;
                break;
            }
        }

        if (accesoConcedido) {
            message.textContent = '';
            window.location.href = 'video.html';
        } else {
            message.textContent = 'Usuario o contraseña incorrectos.';
        }

    } catch (error) {
        console.error("Error al procesar el XML:", error);
        message.textContent = 'Error de conexión con la base de datos.';
    }
});

const showPasswordCheckbox = document.getElementById('showPassword');

showPasswordCheckbox.addEventListener('change', () => {
    // Si el checkbox está marcado, el tipo es 'text', si no, es 'password'
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
});