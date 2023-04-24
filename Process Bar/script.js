const progressBar = document.getElementById('progress-bar');

let progress = 0;

const intervalId = setInterval(() => {
  progress += 10;
  progressBar.style.width = `${progress}%`;

  if (progress === 100) {
    clearInterval(intervalId);
  }
}, 1000);
