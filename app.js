const menuPct = document.querySelector(".menuPct");
const cross = document.querySelector(".cross");
const menuBox = document.querySelector(".menu");
const main = document.querySelector("main");

menuPct.addEventListener("click", () => {
  menuPct.classList.add("none");
  menuBox.style.left = "0px";
  menuBox.style.transitionDuration = "1s";
  main.style.marginLeft = "255px";
  main.style.transitionDuration = "1s";
});

cross.addEventListener("click", () => {
  menuBox.style.left = "-250px";
  menuBox.style.transitionDuration = "1s";
  main.style.marginLeft = "90px";
  main.style.transitionDuration = "1s";
  menuPct.classList.remove("none");
});
