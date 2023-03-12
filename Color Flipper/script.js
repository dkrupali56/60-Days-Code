const colorBtn = document.getElementById("color-btn");
const colorCode = document.getElementById("color-code");

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  colorCode.innerText = randomColor;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
