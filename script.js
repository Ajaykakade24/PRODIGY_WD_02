let time = 0;
let running = false;
let timerInterval;
let lapCount = 1;

const timeDisplay = document.getElementById('timeDisplay');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapsList = document.getElementById('laps');

function updateTime() {
    time++;
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStopwatch() {
    running = true;
    timerInterval = setInterval(updateTime, 1000);
    startPauseBtn.textContent = "Pause";
}

function stopStopwatch() {
    running = false;
    clearInterval(timerInterval);
    startPauseBtn.textContent = "Start";
}

function toggleStopwatch() {
    if (running) {
        stopStopwatch();
    } else {
        startStopwatch();
    }
}

function resetStopwatch() {
    stopStopwatch();
    time = 0;
    timeDisplay.textContent = "00:00";
    lapsList.innerHTML = ''; // Clear lap times
    lapCount = 1;
}

function logLap() {
    if (running) {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        let lapTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
        lapsList.appendChild(lapItem);

        lapCount++;
    }
}

startPauseBtn.addEventListener('click', toggleStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
lapBtn.addEventListener('click', logLap);
