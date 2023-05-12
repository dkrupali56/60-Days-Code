const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let timer = null;
let time = 0;

function updateTime() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const milliseconds = Math.floor(time % 1 * 100);

    time_el.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
    time += 0.01;
}

function startTimer() {
    if (!timer) {
        timer = setInterval(updateTime, 10);
    }
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    time = 0;
    updateTime();
}

start_btn.addEventListener('click', startTimer);
stop_btn.addEventListener('click', stopTimer);
reset_btn.addEventListener('click', resetTimer);
