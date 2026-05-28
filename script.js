const buttons = document.querySelectorAll(".options button");
const body = document.body;
const music = document.getElementById("bg-music");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.getAttribute("data-theme");

    body.className = theme;

    if (theme === "sky") {
      music.src = "sky.mp3";
    }

    if (theme === "pink") {
      music.src = "pink.mp3";
    }

    if (theme === "warm") {
      music.src = "peach.mp3";
    }

    if (theme === "dark") {
      music.src = "dark.mp3";
    }

    music.play();
  });
});
