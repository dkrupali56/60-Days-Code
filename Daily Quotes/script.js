const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
    "The way to get started is to quit talking and begin doing. -Walt Disney",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
    "The only way to do great work is to love what you do. -Steve Jobs",
    "If you can dream it, you can achieve it. -Zig Ziglar",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill",
    "Believe you can and you're halfway there. -Theodore Roosevelt",
    "I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison",
    "Don't watch the clock; do what it does. Keep going. -Sam Levenson",
    "You miss 100% of the shots you don't take. -Wayne Gretzky"
  ];
  
  function generateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = randomQuote;
  }
  