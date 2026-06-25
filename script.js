const params = new URLSearchParams(window.location.search);

const BG =
  params.get("bg") || "111111";

const TEXT =
  params.get("text") || "FFD84D";

const RADIUS =
  params.get("radius") || "24";

const MODE =
  params.get("mode") || "12";

document.documentElement.style
.setProperty("--bg", "#" + BG);

document.documentElement.style
.setProperty("--text", "#" + TEXT);

document.documentElement.style
.setProperty("--radius", RADIUS + "px");

function flip(el, value){

  if(el.textContent === value) return;

  el.textContent = value;

  el.classList.remove("animate");

  void el.offsetWidth;

  el.classList.add("animate");
}

function updateClock(){

  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();

  const ampm =
    hours >= 12 ? "PM" : "AM";

  if(MODE === "12"){
    hours = hours % 12 || 12;
  }

  const hh =
    String(hours).padStart(2,"0");

  const mm =
    String(minutes).padStart(2,"0");

  document.getElementById("ampm")
  .textContent = ampm;

  flip(
    document.getElementById("hour-flip"),
    hh
  );

  flip(
    document.getElementById("minute-flip"),
    mm
  );

  document.getElementById("hour-top")
  .textContent = hh;

  document.getElementById("hour-bottom")
  .textContent = hh;

  document.getElementById("minute-top")
  .textContent = mm;

  document.getElementById("minute-bottom")
  .textContent = mm;
}

updateClock();

setInterval(updateClock,1000);
