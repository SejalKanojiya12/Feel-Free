document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Here, your silence finds a voice.",
    "Every emotion deserves to be felt.",
    "Healing begins the moment you share.",
    "No judgments. No names. Just feelings.",
    "Because being human is never a weakness."
  ];

  const quoteText = document.querySelector(".quote-text");
  let index = 0;

  setInterval(() => {
    index = (index + 1) % quotes.length;
    quoteText.textContent = quotes[index];
  }, 6000);
});
