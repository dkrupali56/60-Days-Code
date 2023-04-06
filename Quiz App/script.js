const quizData = [
    {
      question: "What is the capital of France?",
      a: "Paris",
      b: "London",
      c: "New York",
      d: "Tokyo",
      correct: "a",
    },
    {
      question: "What is the largest country in the world?",
      a: "Russia",
      b: "Canada",
      c: "China",
      d: "USA",
      correct: "a",
    },
    {
      question: "What is the smallest country in the world?",
      a: "Monaco",
      b: "Vatican City",
      c: "San Marino",
      d: "Liechtenstein",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  const questionEl = document.querySelector(".question");
  const optionEls = document.querySelector(".options");
  const scoreEl = document.getElementById("score");
  const submitBtn = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.textContent = currentQuizData.question;
    optionEls.innerHTML = `
      <label>
        <input type="radio" name="option" value="a" />
        ${current
  