const menuPct = document.querySelector(".menuPct");
const menuBox = document.querySelector(".menuBox");
const cross = document.querySelector(".cross");
const nav = document.querySelector("nav");

menuPct.addEventListener("click", () => {
  menuBox.classList.remove("none");
  const img = document.createElement("img");
  img.src =
    "../pct/close-9d0558d71b43e0639452918265692010da90b082b4e6066911c02e8dac0227b5.svg";
  img.classList.add("cross");
  nav.appendChild(img);
  menuPct.classList.add("none");
  img.addEventListener("click", () => {
    img.classList.add("none");
    menuBox.classList.add("none");
    menuPct.classList.remove("none");
  });
});
