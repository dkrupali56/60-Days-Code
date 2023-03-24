const clock = document.querySelector('.clock');

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  clock.querySelector('#hours').textContent = hours;
  clock.querySelector('#minutes').textContent = minutes;
  clock.querySelector('#seconds').textContent = seconds;
}

setInterval(updateTime, 1000);
