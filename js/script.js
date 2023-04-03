function generateRandomQuote() {
    const quotes = [
      {
        quote: "Be the change you want to see in the world.",
        author: "Mahatma Gandhi"
      },
      {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas Edison"
      },
      {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
      },
      {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
      }
    ];
  
    const index = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotation").innerHTML = "&quot;" + quotes[index].quote + "&quot;";
    document.getElementById("author").innerHTML = "-" + quotes[index].author;
  }

  window.onload = function() {
    generateRandomQuote();
    // document.getElementById('generate').addEventListener('click',generateRandomQuote);
  }
  

  