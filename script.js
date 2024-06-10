let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;

const timerDisplay = document.getElementById('timer');
const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');
const wallpaperSelect = document.getElementById('wallpaper');

document.addEventListener('DOMContentLoaded', initialize);
startStopButton.addEventListener('click', startStopTimer);
resetButton.addEventListener('click', resetTimer);
wallpaperSelect.addEventListener('change', changeWallpaper);

function initialize() {
    setDefaultWallpaper('image2');  
    updateDisplay();
}

function updateDisplay() {
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopTimer() {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = 'Start';
    } else {
        timer = setInterval(updateTimer, 1000);
        startStopButton.textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
    startStopButton.textContent = 'Start';
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            isRunning = false;
            startStopButton.textContent = 'Start';
            // add break timer code too!
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }
    updateDisplay();
}

function changeWallpaper() {
    const selectedWallpaper = wallpaperSelect.value;
    updateBackground(selectedWallpaper);
}

function setDefaultWallpaper(defaultWallpaper) {
    wallpaperSelect.value = defaultWallpaper;  
    updateBackground(defaultWallpaper);
}

function updateBackground(imageName) {
    if (imageName === 'default') {
        document.body.style.backgroundImage = 'none';
    } else {
        document.body.style.backgroundImage = `url('images/${imageName}.jpg')`;
    }
}
