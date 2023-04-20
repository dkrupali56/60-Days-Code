const progressBar = document.querySelector('.progress__value');

function setProgress(percent) {
  progressBar.style.clip = `rect(0, ${percent}%, 100%, 0)`;
}

setProgress(50); // Change the progress value here (between 0 and 100)
