document.addEventListener("DOMContentLoaded", () => {
  const subtitleEl = document.getElementById("subtitle");
  const text = "Software Developer | Game Dev Enthusiast";

  function typeText() {
    subtitleEl.textContent = ""; // Clear old text
    let i = 0;
    const interval = setInterval(() => {
      subtitleEl.textContent += text[i];
      i++;
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 100);
  }

  // Type immediately, then every 15 seconds
  typeText();
  setInterval(typeText, 25000);
});
