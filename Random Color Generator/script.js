const colorDisplay = document.getElementById('color-display');
const colorButton = document.getElementById('color-button');

function generateRandomColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

function setBackgroundColor() {
  const randomColor = generateRandomColor();
  colorDisplay.style.backgroundColor = randomColor;
}

colorButton.addEventListener('click', setBackgroundColor);
