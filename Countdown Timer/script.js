const countdownClock = document.querySelector(".countdown-clock");
const daysNumber = countdownClock.querySelector(".days .number");
const hoursNumber = countdownClock.querySelector(".hours .number");
const minutesNumber = countdownClock.querySelector(".minutes .number");
const secondsNumber = countdownClock.querySelector(".seconds .number");

function updateCountdown() {
  const now = new Date();
  const christmas = new Date(now.getFullYear(), 11, 25);

  const totalSeconds = (christmas - now) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysNumber.innerHTML = days;
  hoursNumber.innerHTML = hours;
  minutesNumber.innerHTML = minutes;
  secondsNumber.innerHTML = seconds;
}

setInterval(updateCountdown, 1000);
