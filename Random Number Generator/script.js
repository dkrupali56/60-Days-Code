const generateBtn = document.getElementById("generate-btn");
const resultElement = document.getElementById("result");

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  resultElement.innerText = `Your random number is: ${randomNumber}`;
}

generateBtn.addEventListener("click", generateRandomNumber);
