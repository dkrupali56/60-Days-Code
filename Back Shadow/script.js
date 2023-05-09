const shadowContainer = document.getElementById('shadow-container');

shadowContainer.addEventListener('mousemove', function(event) {
  const x = event.clientX - shadowContainer.offsetLeft;
  const y = event.clientY - shadowContainer.offsetTop;

  const xOffset = x - (shadowContainer.offsetWidth / 2);
  const yOffset = y - (shadowContainer.offsetHeight / 2);

  const xShadow = xOffset / 15;
  const yShadow = yOffset / 15;

  shadowContainer.style.boxShadow = `${xShadow}px ${yShadow}px 40px rgba(0,0,0,0.4)`;
});

shadowContainer.addEventListener('mouseleave', function(event) {
  shadowContainer.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4)';
});
