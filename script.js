let timerInterval;
let isRunning = false;
let seconds = 0;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const timerDisplay = document.getElementById('timer');

// Função para iniciar e parar o cronômetro
startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Iniciar';
    } else {
        timerInterval = setInterval(updateTimer, 1000);
        startStopBtn.textContent = 'Parar';
    }
    isRunning = !isRunning;
});

// Função para resetar o cronômetro
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    seconds = 0;
    timerDisplay.textContent = '00:00';
    startStopBtn.textContent = 'Iniciar';
});

// Função que atualiza o cronômetro
function updateTimer() {
    seconds++;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${padZero(minutes)}:${padZero(remainingSeconds)}`;
}

// Função para adicionar zero à esquerda se necessário
function padZero(num) {
    return num < 10 ? '0' + num : num;
}
