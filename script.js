const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const enterButton = document.getElementById('enterButton');
const message = document.getElementById('message');

enterButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value, 10);

    // Validaciones existentes
    if (!name) {
        message.textContent = 'Please enter your name.';
        return;
    }

    if (!ageInput.value || Number.isNaN(age) || age < 0) {
        message.textContent = 'Please enter a valid age.';
        return;
    }

    message.textContent = '';

    // Redirección a la nueva página
    window.location.href = 'video.html'; 
});