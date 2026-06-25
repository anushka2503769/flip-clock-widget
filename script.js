const params = new URLSearchParams(window.location.search);

const BG = params.get("bg") || "111111";
const TEXT = params.get("text") || "FFD84D";
const RADIUS = params.get("radius") || "24";
const MODE = params.get("mode") || "12";

document.documentElement.style.setProperty("--bg", "#" + BG);
document.documentElement.style.setProperty("--text", "#" + TEXT);
document.documentElement.style.setProperty("--radius", RADIUS + "px");

// Helper function to safely update the text inside the inner span
function updateSpanText(el, value) {
  const span = el.querySelector('span');
  if (span) {
    span.textContent = value;
  } else {
    el.textContent = value; // Fallback if span is missing
  }
}

function flip(el, value) {
  const span = el.querySelector('span');
  const currentText = span ? span.textContent : el.textContent;
  
  if (currentText === value) return;

  updateSpanText(el, value);

  el.classList.remove("animate");
  void el.offsetWidth; // Force CSS reflow
  el.classList.add("animate");
}

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();

  const ampm = hours >= 12 ? "PM" : "AM";

  if (MODE === "12") {
    hours = hours % 12 || 12;
  }

  const hh = String(hours).padStart(2, "0");
  const mm = String(minutes).padStart(2, "0");

  document.getElementById("ampm").textContent = ampm;

  // Flip elements handle their own animation trigger and text updating
  flip(document.getElementById("hour-flip"), hh);
  flip(document.getElementById("minute-flip"), mm);

  // Background panel elements update silently
  updateSpanText(document.getElementById("hour-top"), hh);
  updateSpanText(document.getElementById("hour-bottom"), hh);
  updateSpanText(document.getElementById("minute-top"), mm);
  updateSpanText(document.getElementById("minute-bottom"), mm);
}

// Run immediately on load and then on a regular interval loop
updateClock();
setInterval(updateClock, 1000);
