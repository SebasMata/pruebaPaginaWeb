const nameInput = document.getElementById('nameInput');
const ageInput = document.getElementById('ageInput');
const enterButton = document.getElementById('enterButton');
const message = document.getElementById('message');

const videoFile = './video.mp4';
let videoEl = null;

enterButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value, 10);

    if (!name) {
        message.textContent = 'Please enter your name.';
        return;
    }

    if (!ageInput.value || Number.isNaN(age) || age < 0) {
        message.textContent = 'Please enter a valid age.';
        return;
    }

    message.textContent = '';

    if (!videoEl) {
        videoEl = document.createElement('video');
        videoEl.controls = true;
        videoEl.width = 640;
        videoEl.style.display = 'block';
        document.body.appendChild(videoEl);
    }

    videoEl.src = videoFile;
    videoEl.load();
    videoEl.play();
});