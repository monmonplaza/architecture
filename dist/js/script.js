/***************** RESPONSIVE MENU ********************/
const toggleMenu = document.querySelector(".toggle__menu");

toggleMenu.addEventListener("click", openMenu);

function openMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    this.querySelector("p").textContent = "Close";
  } else {
    this.querySelector("p").textContent = "Menu";
  }
}

/***************** RESPONSIVE MENU END ********************/

/***************** VIDEO ********************/
const playBtn = document.querySelector("#playbtn");
const pauseBtn = document.querySelector("#pausebtn");
const video = document.querySelector(".main__video");
const overlay = document.querySelector(".overlay");

if (playBtn && pauseBtn && overlay) {
  playBtn.addEventListener("click", clickPlay);
  pauseBtn.addEventListener("click", clickPause);
  overlay.addEventListener("click", clickOverlay);
}

function clickPlay() {
  video.play();
  playBtn.classList.add("hide");
}
function clickOverlay() {
  if (playBtn.classList.contains("hide")) {
    video.pause();
    pauseBtn.classList.remove("hide");
    playBtn.classList.add("hide");
  }
}
function clickPause() {
  video.play();
  pauseBtn.classList.add("hide");
  playBtn.classList.add("hide");
}
/***************** VIDEO END ********************/

/************ ACCORDION ************************/
const accordions = document.querySelectorAll(".accordion__header");
if (accordions) {
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      accordion.parentElement.classList.toggle("show");
    });
  });
}

/************ ACCORDION END ********************/
