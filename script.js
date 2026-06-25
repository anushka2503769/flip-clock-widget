const themes = {
  sakura: {
    bg: "#FFF7FB",
    glass: "rgba(255,240,247,.85)",
    text: "#FF4D8D"
  },

  lavender: {
    bg: "#F4F1FF",
    glass: "rgba(244,241,255,.85)",
    text: "#6A5ACD"
  },

  sage: {
    bg: "#EEF5EA",
    glass: "rgba(238,245,234,.85)",
    text: "#56705A"
  },

  sky: {
    bg: "#EDF7FF",
    glass: "rgba(237,247,255,.85)",
    text: "#339AF0"
  },

  chocolate: {
  bg: "#2C1A11",
  glass: "rgba(44, 26, 17, 0.85)",
  text: "#D0A98C"
  }

};

const params = new URLSearchParams(location.search);

const theme = params.get("theme");

if (theme && themes[theme]) {

  document.documentElement.style.setProperty(
    "--glass",
    themes[theme].glass
  );

  document.documentElement.style.setProperty(
    "--text",
    themes[theme].text
  );
}

function update() {

  const now = new Date();

  const hours =
    String(now.getHours()).padStart(2,"0");

  const minutes =
    String(now.getMinutes()).padStart(2,"0");

  document.getElementById("clock").textContent =
    `${hours}:${minutes}`;

  document.getElementById("date").textContent =
    now.toLocaleDateString(
      undefined,
      {
        weekday:"long",
        month:"long",
        day:"numeric"
      }
    );
}
update();

/* update every second so minute changes exactly on time */
setInterval(update,1000);
